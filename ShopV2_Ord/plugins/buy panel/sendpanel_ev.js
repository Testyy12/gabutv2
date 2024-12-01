const moment = require('moment-timezone');
const fetch = require('node-fetch');

exports.run = {
   async: async (m, {
      client,
      Func, 
      command, 
      users,
      isPrefix, 
      env, 
      setting
   }) => {
      try {
         if (m.mtype === 'conversation' || m.mtype === 'extendedTextMessage') {
         if (users.opsi_username === true) {
         users.username_panel = m.text;
         if (m.text.length < 5) return client.reply(m.chat, '*🚩 Username minimal 5 character*', m);
         let username_panel = users.username_panel;
         users.opsi_username = false;
         let memory = users.memory;
         let cpu = users.cpu;
         let disk = users.disk;
         let number = `${m.sender.replace(/@.+/g, '')}`
         client.sendReact(m.chat, '🕘', m.key);
         const randomSevenDigitNumber = String(Math.floor(1000000 + Math.random() * 9000000));

         const response = await fetch(global.domain + "/api/application/users", {
            method: "POST",
            headers: {
               "Accept": "application/json",
               "Content-Type": "application/json",
               "Authorization": "Bearer " + global.plta
            },
            body: JSON.stringify({
               "email": username_panel + "@yanamiku.shop",
               "username": username_panel,
               "first_name": username_panel,
               "last_name": username_panel,
               "language": "en",
               "password": randomSevenDigitNumber
            })
         });

         const userData = await response.json();

         if (response.ok) {
            const user = await userData.attributes;

            let f1 = await fetch(global.domain + "/api/application/nests/5/eggs/" + global.egg_panel, {
               "method": "GET",
               "headers": {
                  "Accept": "application/json",
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + global.plta
               }
            });

            if (!f1.ok) return client.reply(m.chat, 'Terjadi kesalahan saat mengambil data egg.', m);

            let data = await f1.json();
            let startup_cmd = data.attributes.startup

            await fetch(global.domain + "/api/application/servers", {
               "method": "POST",
               "headers": {
                  "Accept": "application/json",
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " + global.plta,
               },
               "body": JSON.stringify({
                  "name": username_panel,
                  "description": "PANEL BY YANAMIKU",
                  "user": user.id,
                  "egg": parseInt(15),
                  "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                  "startup": startup_cmd,
                  "environment": {
                     "INST": "npm",
                     "USER_UPLOAD": "0",
                     "AUTO_UPDATE": "0",
                     "CMD_RUN": "npm start"
                  },
                  "limits": {
                     "memory": memory,
                     "swap": 0,
                     "disk": disk,
                     "io": 500,
                     "cpu": cpu
                  },
                  "feature_limits": {
                     "databases": 5,
                     "backups": 5,
                     "allocations": 5
                  },
                  deploy: {
                     locations: [parseInt(1)],
                     dedicated_ip: false,
                     port_range: [],
                  },
               })
            });

            let tanggal = `${moment().format('DD/MM/YYYY HH:mm')}`

            await client.sendMessageModify(number + '@c.us', `Informasi akun panel Anda:

Email: ${username_panel}@yanamiku.shop
Username: ${username_panel}
Password: ${randomSevenDigitNumber}
Link Panel: ${global.domain}

Silakan gunakan informasi di atas untuk masuk ke panel Anda.

${global.footer}`, m, {
               ads: true,
               largeThumb: true,
               thumbnail: await Func.fetchBuffer('https://iili.io/Jq7Wjn9.jpg'),
               url: setting.link
            }).then(() => client.sendMessageModify(m.chat, `*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣ *ID USER* : ${user.id}
┣ *USERNAME* : ${user.username}
┣ *EMAIL* : ${user.email}
┣ *FIRST NAME* : ${user.first_name}
┣ *LAST NAME* : ${user.last_name} 
┣ *TANGGAL* : ${tanggal}
┗⬣ *PASSWORD BERHASIL DIKIRIM KE @${number}*

${global.footer}`, m, {
               ads: true,
               largeThumb: true,
               thumbnail: 'https://iili.io/JqWJNae.jpg',
               url: setting.link
            })).then(() => client.reply(env.owner + '@c.us', `*🔴  NOTIFIKASI*

@${number} Membeli Panel ${users.code_panel}

*— Data Panel* : 
- Id User : ${user.id}
- Username : ${user.username}
- Email : ${user.email}
- First Name : ${user.first_name}
- Last Name : ${user.last_name}
- Waktu Pembelian : ${tanggal}

${global.footer}`, null)).then(() => client.sendReact(m.chat, '✅', m.key));
            users.memory = '';
            users.cpu = '';
            users.disk = '';
            users.code_panel = '';
         } else {
            if (userData.errors && userData.errors[0].code === "ValidationException" && userData.errors[0].detail.includes("has already been taken")) {
               users.opsi_username = true;
               return client.reply(m.chat, 'Username sudah tersedia. Harap berikan username lainnya.', m);
            } else {
  if (userData && userData.errors && Array.isArray(userData.errors)) {
    users.opsi_username = true;
    let errorMessage = '🚩 Terjadi kesalahan:\n';
    userData.errors.forEach((error, index) => {
      errorMessage += `\n${index + 1}. Detail: ${error.detail}\n   Rule: ${error.meta.rule}`;
    });
    return client.reply(m.chat, errorMessage, m);
  } else {
    return client.reply(m.chat, `🚩 Terjadi kesalahan yang tidak diketahui: ${JSON.stringify(userData)}`, m);
  }
}
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