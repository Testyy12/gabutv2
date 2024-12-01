exports.run = {
   usage: ['beli-admin-panel'],
   category: 'panel pterodactyl',
   async: async (m, {
      client,
      Func, 
      command, 
      isPrefix, 
      users
   }) => {
      try {
         let balance = users.deposit
         let harga = global.harga_admin_panel
         if (users.deposit < harga) return client.reply(m.chat, `*🚩 Deposit kamu tidak mencukupi untuk membeli admin panel seharga Rp. ${Func.formatNumber(harga)}*

Deposit kamu : Rp. ${balance}`, m)
         client.sendReact(m.chat, '🕘', m.key)
         users.deposit -= harga
         users.opsi_akun = true
         client.reply(m.chat, `✅ *Berhasil membeli admin panel*

Sisa saldo Deposit : Rp. ${Func.formatNumber(users.deposit)}

Silahkan kirimkan Username untuk akun panel anda _(minimal 5 huruf)_`, m)
      } catch (e) {
         return console.log(e)
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   location: __filename
}