const fs = require('fs');
const path = require('path');

async function belipanel2(m, { client, Func, users, args, command, isPrefix }) {
  try {
    if (!args[0]) {
      return client.reply(m.chat, Func.example(isPrefix, command, '1GB'), m);
    }

    const panelName = args[0];
    const panelsPath = path.join('lib/database/panel.json');
    if (!fs.existsSync(panelsPath)) {
      throw 'File panel.json tidak ditemukan.';
    }

    const panels = JSON.parse(fs.readFileSync(panelsPath, 'utf8'));
    const panel = panels[panelName];

    if (!panel) {
      return client.reply(m.chat, `🚩 Panel dengan nama ${panelName} tidak ditemukan.`, m);
    }

    // Memeriksa apakah saldo pengguna mencukupi
    if (users.deposit < panel.harga) {
      return client.reply(m.chat, `🚩 Saldo Anda tidak mencukupi untuk membeli panel ${panelName}. Harga: Rp ${panel.harga}. Saldo Anda: Rp ${users.deposit}.`, m);
    }

    // Mengurangi saldo pengguna dan menambahkan resources ke akun pengguna
    users.deposit -= panel.harga;
    users.cpu += panel.cpu;
    users.disk += panel.disk;
    users.memory += panel.ram;
    users.opsi_username = true;
    users.code_panel = panelName;
    users.total_pengeluaran += panel.harga;
    users.total_pembelian += 1;

    // Tambahkan jumlah penjualan panel
    panel.terjual += 1;

    // Simpan perubahan pada panel.json
    fs.writeFileSync(panelsPath, JSON.stringify(panels, null, 2), 'utf8');

    client.reply(m.chat, `✅ Anda berhasil membeli panel ${panelName}.

Detail Panel:
  • Harga: Rp ${Func.formatNumber(panel.harga)}
  • RAM: ${panel.ram} MB
  • CPU: ${panel.cpu} %
  • Disk: ${panel.disk} MB

Saldo Anda saat ini : Rp ${Func.formatNumber(users.deposit)}.`, m).then(() => client.reply(m.chat, '*🚩 Silahkan masukkan Username (5 character)*', m));
  } catch (e) {
    console.log(e);
    client.reply(m.chat, Func.jsonFormat(e), m);
  }
}

exports.run = {
  usage: ['belipanel'],
  use: 'code',
  category: 'panel pterodactyl',
  async: async (m, { client, Func, users, args, command, isPrefix }) => {
      if (!args[0]) return client.reply(m.chat, Func.example(isPrefix, command, '1GB'), m)
      await belipanel2(m, { client, Func, users, args, command, isPrefix });
  },
  error: false,
  owner: false,
  location: __filename,
};