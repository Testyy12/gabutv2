const fs = require('fs');
const path = require('path');

// Fungsi untuk memformat angka dengan pemisah ribuan
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

async function listPanel(m, { client, isPrefix, command, setting }) {
  try {
    const panelsPath = path.join('lib/database/panel.json');
    if (!fs.existsSync(panelsPath)) {
      throw 'File panel.json tidak ditemukan.';
    }

    const panels = JSON.parse(fs.readFileSync(panelsPath, 'utf8'));
    const panelKeys = Object.keys(panels);

    if (setting.style === 1) {
      let message = '🛍️ *Daftar Panel*\n\n';
      panelKeys.forEach((panel, index) => {
        const details = panels[panel];
        message += `*${index + 1}. ${panel}*\n`;
        message += `  • Harga: Rp ${formatNumber(details.harga)}\n`;
        message += `  • RAM: ${details.ram} MB\n`;
        message += `  • CPU: ${details.cpu} MHz\n`;
        message += `  • Disk: ${details.disk} MB\n`;
        message += `  • Terjual: ${details.terjual}\n`;
        message += '____________________________\n\n';
      });

      client.reply(m.chat, message + global.footer, m);

    } else if (setting.style === 2) {
      const sections = panelKeys.map((panel, index) => ({
        title: `━━━━━━━━━━━━━ ${panel} ━━━━━━━━━━━━━`,
        rows: [{
          title: panel,
          description: `Harga: Rp ${formatNumber(panels[panel].harga)}`,
          id: `${isPrefix}detailpanel ${panel}`
        }],
        highlight_label: `Terjual: ${panels[panel].terjual}`
      }));

      const buttons = [{
        name: 'single_select',
        buttonParamsJson: JSON.stringify({
          title: 'Panel Hosting',
          sections
        })
      }];

      client.sendIAMessage(m.chat, buttons, null, {
        header: '🛍️ *Daftar Panel*',
        content: 'Berikut adalah daftar panel yang tersedia:',
        footer: global.footer,
        media: ''
      });
    }
  } catch (e) {
    return client.reply(m.chat, `🚩 ${e}`, m);
  }
}

exports.run = {
  usage: ['listpanel'],
  category: 'panel pterodactyl',
  async: async (m, { client, text, args, Func, command, isPrefix, setting }) => {
    await listPanel(m, { client, isPrefix, command, setting });
  },
  error: false,
  location: __filename
};