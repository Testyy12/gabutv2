const moment = require('moment-timezone');
const fetch = require('node-fetch');

exports.run = {
   async: async (m, {
      client,
      Func, 
      command, 
      isPrefix, 
      users,
      setting, 
      env
   }) => {
      try {
         if (users.opsi_akun === true) {
            if (m.mtype === 'conversation' || m.mtype === 'extendedTextMessage') {
            }

            if (m.text.length < 5) return client.reply(m.chat, '*🚩 Username minimal 5 huruf*', m)
            
            client.sendReact(m.chat, '🕘', m.key)
            users.opsi_akun = false
            
            let username = m.text
            let number = `${m.sender.replace(/@.+/g, '')}`
            
            const randomSevenDigitNumber = String(Math.floor(1000000 + Math.random() * 9000000));

         const response = await fetch(global.domain + "/api/application/users", {
            method: "POST",
            headers: {
               "Accept": "application/json",
               "Content-Type": "application/json",
               "Authorization": "Bearer " + global.plta
            },
            body: JSON.stringify({
               "email": username + "@yanamiku.shop",
               "username": username,
               "first_name": username,
               "last_name": username,
               "language": "en",
               "root_admin": true, 
               "password": randomSevenDigitNumber
            })
         });

         const data = await response.json();
         const user = await data.attributes;
         const tanggal = `${moment().format('DD/MM/YYYY HH:mm')}`

         if (response.ok) {
            await client.sendMessageModify(number + '@c.us', `Informasi akun Admin Panel Anda:

Email: ${username}@yanamiku.shop
Username: ${username}
Password: ${randomSevenDigitNumber}
Link Panel: ${global.domain}

Silakan gunakan informasi di atas untuk masuk ke panel Anda.

${global.footer}`, m, {
                  ads: true,
                  largeThumb: true,
                  thumbnail: await Func.fetchBuffer('https://iili.io/Jq7Wjn9.jpg'),
                  url: setting.link
               });
            return client.sendMessageModify(m.chat, `*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣ *ID* : ${user.id}
┣ *USERNAME* : ${user.username}
┣ *EMAIL* : ${user.email}
┣ *NAME* : ${user.first_name} ${user.last_name}
┣ *TANGGAL* : ${tanggal}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${number}*

${global.footer}`, m, {
                  ads: true,
                  largeThumb: true,
                  thumbnail: await Func.fetchBuffer('https://iili.io/JqWJNae.jpg'),
                  url: setting.link
               }).then(() => client.reply(env.owner +'@c.us', `*🔴 NOTIFIKASI*
               
○ @${number} Membeli admin panel
○ Waktu Pembelian : ${tanggal}

${global.footer}`, null)).then(() => client.sendReact(m.chat, '✅', m.key));
         } else {
            if (data.errors && data.errors[0].code === "ValidationException" && data.errors[0].detail.includes("has already been taken")) {
               users.opsi_akun = true
               return client.reply(m.chat, 'Username atau email sudah tersedia. Harap gunakan username atau email lainnya.', m);
               client.sendReact(m.chat, '⚠️', m.key)
            } else {
               return client.reply(m.chat, `Terjadi kesalahan: ${JSON.stringify(data)}`, m);
            }
         }
         }
      } catch (e) {
         return console.log(e)
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   location: __filename
}