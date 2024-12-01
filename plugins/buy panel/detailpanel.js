const fs = require('fs');
const path = require('path');

// Fungsi untuk memformat angka dengan pemisah ribuan
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

async function detailPanel(m, { client, isPrefix, command, text, setting }) {
  try {
    if (!text) {
      return client.reply(m.chat, `🚩 Masukkan kode panel. Contoh: ${isPrefix + command} 1GB`, m);
    }

    const panelsPath = path.join('lib/database/panel.json');
    if (!fs.existsSync(panelsPath)) {
      throw 'File panel.json tidak ditemukan.';
    }

    const panels = JSON.parse(fs.readFileSync(panelsPath, 'utf8'));
    const panel = panels[text];

    if (!panel) {
      return client.reply(m.chat, `🚩 Panel dengan kode ${text} tidak ditemukan.`, m);
    }

    const message = `  • Harga: Rp ${formatNumber(panel.harga)}\n` +
                    `  • RAM: ${panel.ram} MB\n` +
                    `  • CPU: ${panel.cpu}%\n` +
                    `  • Disk: ${panel.disk} MB\n` +
                    `  • Terjual: ${panel.terjual}\n`;

   const message2 = `  • Harga: Rp ${formatNumber(panel.harga)} (promo)\n` +
                    `  • RAM: Unlimited\n` +
                    `  • CPU: Unlimited\n` +
                    `  • Disk: Unlimited\n` +
                    `  • Terjual: ${panel.terjual}\n`;

    if (setting.style === 1) {
      if (text === 'UNLIMITED') {
      client.reply(m.chat, message2 + global.footer, m);
      }
      client.reply(m.chat, message + global.footer, m);
    } else if (setting.style === 2 && text === 'UNLIMITED') {
    var buttons = [{
   name: "quick_reply",
   buttonParamsJson: JSON.stringify({
      display_text: "Kembali ke Daftar Panel",
      id: `${isPrefix}listpanel`
   }),
}, {
   name: "quick_reply",
   buttonParamsJson: JSON.stringify({
      display_text: "Beli Panel",
      id: `${isPrefix}belipanel ${text}`
   })
}]

      client.sendIAMessage(m.chat, buttons, null, {
        header: `🛍️ *Detail Panel ${text}*`,
        content: message2,
        footer: global.footer,
        media: ''
      });
    } else if (setting.style === 2) {
var buttons = [{
   name: "quick_reply",
   buttonParamsJson: JSON.stringify({
      display_text: "Kembali ke Daftar Panel",
      id: `${isPrefix}listpanel`
   }),
}, {
   name: "quick_reply",
   buttonParamsJson: JSON.stringify({
      display_text: "Beli Panel",
      id: `${isPrefix}belipanel ${text}`
   })
}]

      client.sendIAMessage(m.chat, buttons, null, {
        header: `🛍️ *Detail Panel ${text}*`,
        content: message,
        footer: global.footer,
        media: ''
      });
    }
  } catch (e) {
    return client.reply(m.chat, `🚩 ${e}`, m);
  }
}

exports.run = {
  usage: ['detailpanel'],
  use: 'code',
  category: 'panel pterodactyl',
  async: async (m, { client, text, args, Func, command, isPrefix, setting }) => {
    await detailPanel(m, { client, isPrefix, command, text, setting });
  },
  error: false,
  location: __filename
};