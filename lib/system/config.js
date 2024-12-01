const { Function: Func, NeoxrApi } = new(require('@neoxr/wb'))
global.Api = new NeoxrApi(process.env.API_ENDPOINT, process.env.API_KEY)
global.header = `Yilzi-BOTz (Yilzi-Project)`
global.footer = `ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙʏ ʏɪʟᴢɪ`

// Payment
global.payment = `𝐏 𝐀 𝐘 𝐌 𝐄 𝐍 𝐓
   
╭╼
╎∘ Dana : 081359123789
╎∘ Gopay : 081359123789
╎∘ Ovo : 081359123789
╎∘ Bank : 7373828282「 BCA 」
╎∘ Pulsa : 081359123789「 Axis 」
╰─━─━─━─━─━─━─━─╼`

// Orderkuota - https://okeconnect.com
global.ord_id = 'OK****'
global.ord_apikey = ''
global.qris = 'https://ibb.co.com/zndTchY'

// Panel Pterodactyl
global.harga_admin_panel = 10000
global.domain = 'https://xxxx.com'
global.plta = 'plta_'
global.pltc = 'pltc_'
global.egg_panel = '15' // id eggs yang dipakai
global.idloc = '1' // id location

// Status message
global.status = Object.freeze({
   invalid: Func.Styles('Invalid url'),
   wrong: Func.Styles('Wrong format.'),
   fail: Func.Styles('Can\'t get metadata'),
   error: Func.Styles('Error occurred'),
   errorF: Func.Styles('Sorry this feature is in error.'),
   premium: Func.Styles('This feature only for premium user.'),
   auth: Func.Styles('You do not have permission to use this feature, ask the owner first.'),
   seller: Func.Styles('🚩 This command only seller panel'),
   owner: Func.Styles('This command only for owner.'),
   group: Func.Styles('This command will only work in groups.'),
   botAdmin: Func.Styles('This command will work when I become an admin.'),
   admin: Func.Styles('This command only for group admin.'),
   private: Func.Styles('Use this command in private chat.'),
   gameSystem: Func.Styles('Game features have been disabled.'),
   gameInGroup: Func.Styles('Game features have not been activated for this group.'),
   gameLevel: Func.Styles('You cannot play the game because your level has reached the maximum limit.')
})