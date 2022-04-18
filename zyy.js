//━━━━━━━━━━━━━━━[ 𝗦𝗖 𝗢𝗥𝗜 𝗗𝗜𝗞𝗔 ]━━━━━━━━━━━━━━━\\
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const hx = require('hxz-api')
const xfar = require('xfarr-api')
const ra = require('ra-api')
const kotz = require('kotz-api')
const yts = require("yt-search")
const path = require('path')
const os = require('os')
/*const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")*/
const moment = require('moment-timezone')
const speed = require('performance-now')
const Instagram = require('instagram-web-api')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
/*const { setppig, login, logout, upinstastory, follow, unfollow, likepost, unlikepost } = require('./lib/handlerIG')*/

//━━━━━━━━━━━━━━━[ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 ]━━━━━━━━━━━━━━━\\
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    ...(global.db || {})
}

//━━━━━━━━━━━━━━━[ 𝗦𝗧𝗢𝗥𝗔𝗚𝗘 ]━━━━━━━━━━━━━━━\\

//━━━━━━━━━━━━━━━[ 𝗜𝗦𝗜 𝗗𝗕𝗡𝗬𝗔 ]━━━━━━━━━━━━━━━\\
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

module.exports = zyy = async (zyy, m, msg, M, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await zyy.decodeJid(zyy.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)    

////////////////////////////////////////////////////	    
	    const textImg = (teks, buffer = fs.readFileSync(global.fakeImg), msg, men) => {
            zyy.sendMessage(m.chat, { text: teks, jpegThumbnail: buffer, mention: men ? men : [] }, { quoted: msg ? mess : msg })
             }
const sendFile = async (from, url, caption, msg, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return zyy.sendMessage(from, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: msg})
}
let type = mime.split("/")[0]+"Message"
if(mime.split("/")[0] === "image"){
return zyy.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: msg})
} else if(mime.split("/")[0] === "video"){
return zyy.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: msg})
} else if(mime.split("/")[0] === "audio"){
return zyy.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: msg })
} else {
return zyy.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: msg })
}
}

(function(_0x287a88,_0x40fcb3){const _0x204970=_0xfd93,_0x539cc5=_0x287a88();while(!![]){try{const _0x4c5e65=parseInt(_0x204970(0xd8))/0x1*(parseInt(_0x204970(0xde))/0x2)+parseInt(_0x204970(0xd6))/0x3+-parseInt(_0x204970(0xd5))/0x4+parseInt(_0x204970(0xdd))/0x5+-parseInt(_0x204970(0xda))/0x6*(parseInt(_0x204970(0xd7))/0x7)+parseInt(_0x204970(0xdb))/0x8*(parseInt(_0x204970(0xdc))/0x9)+parseInt(_0x204970(0xdf))/0xa*(-parseInt(_0x204970(0xd3))/0xb);if(_0x4c5e65===_0x40fcb3)break;else _0x539cc5['push'](_0x539cc5['shift']());}catch(_0x567664){_0x539cc5['push'](_0x539cc5['shift']());}}}(_0x472f,0x4e2d9));function _0xfd93(_0xcac9b4,_0x46dd06){const _0x472f17=_0x472f();return _0xfd93=function(_0xfd93d,_0x5851b1){_0xfd93d=_0xfd93d-0xd3;let _0x35682e=_0x472f17[_0xfd93d];return _0x35682e;},_0xfd93(_0xcac9b4,_0x46dd06);}function _0x472f(){const _0x281cfe=['11WpKRKc','ZyyXtrime.gif','52168EwBxZh','941949LHoyFh','621313xvGJGq','124CJJdpd','chat','30jfYavq','3176oumfFV','3204VQmycP','2398180DZSxLK','4894kNYpBP','4613250gNwvnZ','sendMessage'];_0x472f=function(){return _0x281cfe;};return _0x472f();}const sendGif=(_0x435afd,_0x390185)=>{const _0x140da9=_0xfd93;zyy[_0x140da9(0xe0)](m[_0x140da9(0xd9)],_0x435afd,'videoMessage',{'mimetype':'video/gif','filename':_0x140da9(0xd4),'gifPlayback':!![],'caption':_0x390185,'sendEphemeral':!![],'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]},'quoted':m});};
//━━━━━━━━━━━━━━━[ 𝗕𝗨𝗔𝗧 𝗚𝗥𝗢𝗨𝗣 ]━━━━━━━━━━━━━━━\\
        const groupMetadata = m.isGroup ? await zyy.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : zyy.decodeJid
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

//━━━━━━━━━━━━━━━[ 𝗦𝗦𝗧 ]━━━━━━━━━━━━━━━\\

 /*try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
*/
//━━━━━━━━━━━━━━━[ 𝗕𝗨𝗧𝗧𝗢𝗡 ]━━━━━━━━━━━━━━━\\
const sendButton5 = async (id, text1, desc1, yo) => {

var buatpesan = await generateWAMessageFromContent(m.chat, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/E14rIyYMuovIfkskhi5QN9"
            }
          },
          {
            "callButton": {
              "displayText": "Call Owner",
              "phoneNumber": "+62 858-7831-3791"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Donate",
              "id": `${prefix}donate`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Script",
              "id": `${prefix}sc`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Owner",
              "id": `${prefix}owner`
            }
          }
        ]
      }
    }
  }, {})
zyy.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

let buton = [
{ callButton: {displayText: `Instagram`, url: `https://instagram.com/spnx.fauzi/`} },
{ urlButton: { displayText: `Call Owner`, phoneNumber : `+6289503657396`} },
{ quickReplyButton: { displayText: `Donate`, id: `${prefix}donasi` } },
{ quickReplyButton: { displayText: `Rules`, id: `${prefix}rules` } },
{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
]

//━━━━━━━━━━━━━━━[ 𝗣𝗨𝗕𝗟𝗜𝗖 𝗢𝗥 𝗦𝗘𝗟𝗙 ]━━━━━━━━━━━━━━━\\
        if (!zyy.public) {
            if (!m.key.fromMe) return
        }

//━━━━━━━━━━━━━━━[ 𝗞𝗢𝗡𝗦𝗢𝗟 & 𝗔𝗨𝗧𝗢𝗥𝗘𝗔𝗗 ]━━━━━━━━━━━━━━━\\
        if (m.message) {
            zyy.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ CHAT ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
//━━━━━━━━━━━━━━━[ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝟭 𝗠𝗘𝗡𝗜𝗧 𝗪𝗔𝗜𝗧 ]━━━━━━━━━━━━━━━\\
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
            console.log('Updating Database...')
        }, 60 * 1000)

/*	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

//━━━━━━━━━━━━━━━[ yo ]━━━━━━━━━━━━━━━\\

	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await zyy.setStatus(`🤖 ${zyy.user.name} | ⏳ Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await zyy.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return reply(`Ehh maaf kamu admin`)
        if (isCreator) return reply(`Ehh maaf kamu owner bot ku`)
        zyy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
*/       
//━━━━━━━━━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━━━━━━━━━\\        
        moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

//━━━━━━━━━━━━━━━[ 𝗥𝗘𝗦𝗣𝗢𝗡 𝗖𝗠𝗗 𝗙𝗥𝗢𝗠 𝗠𝗘𝗗𝗜𝗔 ]━━━━━━━━━━━━━━━\\        
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: zyy.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, zyy.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        zyy.ev.emit('messages.upsert', msg)
        }

//━━━━━━━━━━━━━━━[ 𝗚𝗔𝗠𝗘 ]━━━━━━━━━━━━━━━\\	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            zyy.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zyy.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zyy.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zyy.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zyy.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zyy.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zyy.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zyy.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, zyy.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zyy.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zyy.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zyy.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zyy.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zyy.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zyy.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await zyy.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await zyy.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    zyy.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    zyy.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) zyy.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) zyy.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) zyy.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    zyy.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) zyy.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) zyy.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    zyy.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
/*let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }*/
        switch(command) {
/*case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	*/
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await zyy.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await zyy.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            zyy.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await zyy.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) zyy.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                m.reply('*── 「 DONATE 」 ──*\n\n_Kalian Bisa Dukung Bot Lewat Donate Ke :_\n _》Dana : 089503657396_\n _》Gopay : Gada_\n _》Pulsa : 089503657396 ( Three )_\n\n_Donate Kalian Sangat Berarti._\n\n_Contact person Owner:_\n_wa.me/6289503657396_'), { quoted: m }
            }
            break
            case 'sc': {
                m.reply('*── 「 SCRIPT 」 ──*\n •ZyyXtrime : https://github.com/Fauzibanh/')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    zyy.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    zyy.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    zyy.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    zyy.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    zyy.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    zyy.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    zyy.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await zyy.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await zyy.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    zyy.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    zyy.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, zyy.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    zyy.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    zyy.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, zyy.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    zyy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    zyy.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, zyy.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    zyy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    zyy.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, zyy.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    zyy.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    zyy.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, zyy.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    zyy.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    zyy.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, zyy.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                zyy.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
case 'yatim':{
 if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let oi = m.sender
            let ytm = member[Math.floor(Math.random() * member.length)]
            let mty = `Cieee Yatim Baru

 @${ytm.split('@')[0]}`
            let ments = [oi, ytm]
            let buttons = [
                        { buttonId: 'yatim', buttonText: { displayText: 'Yatim' }, type: 1 }
                    ]
                     zyy.sendButtonText(m.chat, buttons, mty, zyy.user.name, m, {mentions: ments})
}
break
case 'piatu':
case 'piyatu': {
 if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let bh = m.sender
            let bra = member[Math.floor(Math.random() * member.length)]
            let bruh = `Cieee Piatu Baru

 @${bra.split('@')[0]}`
            let ments = [bh, bra]
            let buttons = [
                        { buttonId: 'piatu', buttonText: { displayText: 'Piatu' }, type: 1 }
                    ]
                     zyy.sendButtonText(m.chat, buttons, bruh, zyy.user.name, m, {mentions: ments})
}
break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await zyy.sendButtonText(m.chat, buttons, jawab, zyy.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian 💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await zyy.sendButtonText(m.chat, buttons, jawab, zyy.user.name, m, {mentions: menst})
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await zyy.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await zyy.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zyy.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zyy.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zyy.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zyy.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'setmenu':{
if (!isCreator) return m.reply('Mau Apa Dek?')
if(args.length === 1)return m.reply('Pilih gif / img / loc')
if (args[0].toLowerCase() === 'gif'){
global.modelMenu = 'GifButton'
m.reply('Done..')
} else if (args[0].toLowerCase() === 'img'){
global.modelMenu = 'ImgButton'
m.reply('Done..')
} else if (args[0].toLowerCase() === 'loc'){
global.modelMenu = 'LocButton'
m.reply('Done..')
}
}
break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zyy.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zyy.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await zyy.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await zyy.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await zyy.downloadAndSaveMediaMessage(quoted)
                await zyy.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await zyy.downloadAndSaveMediaMessage(quoted)
                await zyy.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `➣ @${mem.id.split('@')[0]}\n`
                }
                zyy.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            zyy.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

 [ UPVOTE ]
• Total: ${vote[m.chat][1].length}

 [ DEVOTE ]
• Total: ${vote[m.chat][2].length}

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: zyy.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            zyy.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: zyy.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            zyy.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: zyy.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            zyy.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

 [ UPVOTE ]
 
• Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ DEVOTE ]
 
• Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


*${prefix}hapusvote* - untuk menghapus vote


`
zyy.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await zyy.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await zyy.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await zyy.sendButtonText(m.chat, buttons, `Mode Group`, zyy.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await zyy.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await zyy.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await zyy.sendButtonText(m.chat, buttons, `Mode Edit Info`, zyy.user.name, m)

            }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await zyy.groupInviteCode(m.chat)
                zyy.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await zyy.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await zyy.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                zyy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
/*            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await zyy.sendButtonText(m.chat, buttons, `Mode Antilink`, zyy.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                reply(`${zyy.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                reply(`${zyy.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await zyy.sendButtonText(m.chat, buttons, `Mute Bot`, zyy.user.name, m)
                }
             }
             break*/
case 'culik': {
if (!isCreator) throw mess.owner
let pantek = []
              for (let mem of participants) {
              pantek.push(mem.jid)
              }
              zyy.groupParticipantsUpdate(args[0], pantek)
}
break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await zyy.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/spnx.fauzi'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Number',
                                    phoneNumber: '+62 895-0365-7396'
                                }
                            }]
                      fatihgans = fs.readFileSync('./media/gambar.jpg')
                      let txt = `「 *REALZI - MD* 」\n\n${text}`
                      zyy.send5ButImg(i, txt, zyy.user.name, fatihgans, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} tes`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/spnx.fauzi'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Number',
                                    phoneNumber: '+62 895-0365-7396'
                                }
                            }]
                      memei = fs.readFileSync('./media/gambar.jpg')
                      let txt = `「 *REALZI - MD* 」\n\n${text}`
                      zyy.send5ButImg(yoi, txt, zyy.user.name, memei, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `➣ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━➣ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ➣ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                zyy.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await zyy.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `➣ *Nama :* ${nama}\n➣ *User :* @${i.split('@')[0]}\n➣ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 zyy.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await zyy.groupMetadata(i)
                     teks += `➣ *Nama :* ${metadata.subject}\n➣ *Owner :* @${metadata.owner.split('@')[0]}\n➣ *ID :* ${metadata.id}\n➣ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n➣ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 zyy.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    zyy.sendText(m.chat, 'List Online:\n\n' + online.map(v => '➣ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
             case 'sendbuffer':
var _0xcf553=_0x25c0;(function(_0x400b10,_0x49223f){var _0x20b501=_0x25c0,_0x2f4d4e=_0x400b10();while(!![]){try{var _0x163d37=-parseInt(_0x20b501(0xaf))/0x1*(parseInt(_0x20b501(0xb5))/0x2)+-parseInt(_0x20b501(0xb7))/0x3+-parseInt(_0x20b501(0xae))/0x4+-parseInt(_0x20b501(0xb0))/0x5+-parseInt(_0x20b501(0xad))/0x6+-parseInt(_0x20b501(0xb2))/0x7+parseInt(_0x20b501(0xb4))/0x8*(parseInt(_0x20b501(0xb3))/0x9);if(_0x163d37===_0x49223f)break;else _0x2f4d4e['push'](_0x2f4d4e['shift']());}catch(_0x5a6493){_0x2f4d4e['push'](_0x2f4d4e['shift']());}}}(_0x9aa0,0x20024));function _0x9aa0(){var _0x2a3742=['919398PAPBdY','563776qgXcTK','3901iYjFku','1067580kmVFKA','chat','1656900NKMILT','867501ZKviYr','104kAmDEE','134iPoSQP','reply','348567rDmbXG','done','log'];_0x9aa0=function(){return _0x2a3742;};return _0x9aa0();}function _0x25c0(_0x4a29ae,_0x1139fb){var _0x9aa039=_0x9aa0();return _0x25c0=function(_0x25c076,_0x305a33){_0x25c076=_0x25c076-0xad;var _0x357ecc=_0x9aa039[_0x25c076];return _0x357ecc;},_0x25c0(_0x4a29ae,_0x1139fb);}try{await m[_0xcf553(0xb6)]('Tunggu\x20sebentar...'),sendFile(m[_0xcf553(0xb1)],isUrl(q)[0x0],mess[_0xcf553(0xb8)]);}catch(_0x197c30){m['reply'](_0x197c30),console[_0xcf553(0xb9)](_0x197c30);}
break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await zyy.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await zyy.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await zyy.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await zyy.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    zyy.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await zyy.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await zyy.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            zyy.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            zyy.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${zyy.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            zyy.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await zyy.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await zyy.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await zyy.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await zyy.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    zyy.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `➣ No : ${no++}\n➣ Type : ${i.type}\n➣ Video ID : ${i.videoId}\n➣ Title : ${i.title}\n➣ Views : ${i.views}\n➣ Duration : ${i.timestamp}\n➣ Upload At : ${i.ago}\n➣ Author : ${i.author.name}\n➣ Url : ${i.url}\n\n─────────────────\n\n`
                }
                zyy.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `➣ *Title* : ${g.title}\n`
                teks += `➣ *Description* : ${g.snippet}\n`
                teks += `➣ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [{buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🔗 *Media Url* : ${images}`,
                    footer: zyy.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zyy.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    zakki = `
➣ Title : ${anu.title}
➣ Ext : Search
➣ ID : ${anu.videoId}
➣ Duration : ${anu.timestamp}
➣ Viewers : ${anu.views}
➣ Upload At : ${anu.ago}
➣ Author : ${anu.author.name}
➣ Channel : ${anu.author.url}
➣ Description : ${anu.description}
➣ Url : ${anu.url}`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   zyy.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: zakki,
                            hydratedFooterText: `Playing To ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'UrL Video',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Audio',
                                    id: `ytmp3 ${anu.url} 128kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: 'VIdeo',
                                    id: `ytmp4 ${anu.url} 480p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  zyy.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 10000000) return m.reply('File Melebihi Batas'+util.format(media))
                zyy.sendImage(m.chat, thumbnail, `➣ Title : ${title}\n➣ File Size : ${media[0].formattedSize}\n➣ Url : ${url}\n➣ Ext : MP3\n➣ Resolusi : ${args[1] || '128kbps'}`, m)
                zyy.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 480p`
                let quality = args[1] ? args[1] : '480p'
                let media = await ytv(text, quality)
                if (media.filesize >= 10000000) return m.reply('File Melebihi Batas '+util.format(media))
                zyy.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `➣ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n➣ Url : ${isUrl(text)}\n➣ Ext : MP3\n➣ Resolusi : ${args[1] || '480p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100000) return m.reply('File Melebihi Batas'+util.format(media))
                zyy.sendImage(m.chat, thumbnail, `➣ Title : ${title}\n➣ File Size : ${media[0].formattedSize}\n➣ Url : ${url}\n➣ Ext : MP3\n➣ Resolusi : ${args[1] || '128kbps'}`, m)
                zyy.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100000) return m.reply('File Melebihi Batas'+util.format(media))
                zyy.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `➣ Title : ${title}\n➣ File Size : ${media[0].formattedSize}\n➣ Url : ${url}\n➣ Ext : MP4\n➣ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                zyy.sendMessage(m.chat, { image: { url: result }, caption: '➣ Media Url : '+result }, { quoted: m })
            }
            break
case 'waifu':
m.reply('Loading...')
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
sendFile(m.chat, data.url, 'Ni Cewe 2D Lu')
})
break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'waifu':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold': {
textImg('Loading...')
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
sendFile(from, data.url, mess.done)
})
}
break			
	    case 'couple': case 'ppcp': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                zyy.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                zyy.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: zyy.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zyy.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `➣ Title : ${result.title}\n➣ Category : ${result.type}\n➣ Detail : ${result.source}\n➣ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: zyy.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zyy.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `➣ Title : ${result.title}\n➣ Source : ${result.source}\n➣ Media Url : ${result.image}`,
                    footer: zyy.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zyy.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'mode': case 'set': {
        const buttons = [
{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF'}, type: 1},
{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC'}, type: 1}
]

const buttonMessage = {
text: "Pilih Salah Satu",
footerText: 'Hello Owner',
buttons: buttons,
headerType: 1
}
                zyy.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break            
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                zyy.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                zyy.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                zyy.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                zyy.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Nomor HP :* ${anu.message.nomer_hp}\n➣ *Angka Shuzi :* ${anu.message.angka_shuzi}\n➣ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n➣ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Mimpi :* ${anu.message.mimpi}\n➣ *Arti :* ${anu.message.arti}\n➣ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} zyy, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Nama Anda :* ${anu.message.nama_anda.nama}\n➣ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➣ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➣ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➣ *Hasil :* ${anu.message.result}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} zyy, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Nama Anda :* ${anu.message.nama_anda.nama}\n➣ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➣ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➣ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➣ *Hasil :* ${anu.message.result}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} zyy, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Nama Suami :* ${anu.message.suami.nama}\n➣ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n➣ *Nama Istri :* ${anu.message.istri.nama}\n➣ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n➣ *Hasil :* ${anu.message.result}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} zyy, 28, 10, 2005, Dini, 1, 7, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Nama Anda :* ${anu.message.nama_anda.nama}\n➣ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➣ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➣ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➣ *Sisi Positif :* ${anu.message.sisi_positif}\n➣ *Sisi Negatif :* ${anu.message.sisi_negatif}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} zyy`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Nama :* ${anu.message.nama}\n➣ *Arti :* ${anu.message.arti}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} zyy, 28, 10, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Nama :* ${anu.message.nama}\n➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Life Path :* ${anu.message.life_path}\n➣ *Destiny :* ${anu.message.destiny}\n➣ *Destiny Desire :* ${anu.message.destiny_desire}\n➣ *Personality :* ${anu.message.personality}\n➣ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} zyy|Dini`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendImage(m.chat,  anu.message.gambar, `➣ *Nama Anda :* ${anu.message.nama_anda}\n➣ *Nama Pasangan :* ${anu.message.nama_pasangan}\n➣ *Sisi Positif :* ${anu.message.sisi_positif}\n➣ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Tanggal Pernikahan :* ${anu.message.tanggal}\n➣ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Lahir :* ${anu.message.hari_lahir}\n➣ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Lahir :* ${anu.message.hari_lahir}\n➣ *Rezeki :* ${anu.message.rejeki}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Lahir :* ${anu.message.hari_lahir}\n➣ *Pekerjaan :* ${anu.message.pekerjaan}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Analisa :* ${anu.message.analisa}\n➣ *Angka Akar :* ${anu.message.angka_akar}\n➣ *Sifat :* ${anu.message.sifat}\n➣ *Elemen :* ${anu.message.elemen}\n➣ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Analisa :* ${anu.message.analisa}\n➣ *Sektor :* ${anu.message.sektor}\n➣ *Elemen :* ${anu.message.elemen}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendImage(m.chat, anu.message.image, `➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Simbol Tarot :* ${anu.message.simbol_tarot}\n➣ *Arti :* ${anu.message.arti}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} zyy, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Nama :* ${anu.message.nama}\n➣ *Lahir :* ${anu.message.tahun_lahir}\n➣ *Gender :* ${anu.message.jenis_kelamin}\n➣ *Angka Kua :* ${anu.message.angka_kua}\n➣ *Kelompok :* ${anu.message.kelompok}\n➣ *Karakter :* ${anu.message.karakter}\n➣ *Sektor Baik :* ${anu.message.sektor_baik}\n➣ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Kala Tinantang :* ${anu.message.kala_tinantang}\n➣ *Info :* ${anu.message.info}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Hasil :* ${anu.message.result}\n➣ *Info :* ${anu.message.info}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Hari Lahir :* ${anu.message.hari_lahir}\n➣ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n➣ *Hari Naas :* ${anu.message.hari_naas}\n➣ *Info :* ${anu.message.catatan}\n➣ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Hari Lahir :* ${anu.message.hari_lahir}\n➣ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n➣ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Hari Lahir :* ${anu.message.hari_lahir}\n➣ *tanggal Lahir :* ${anu.message.tgl_lahir}\n➣ *Arah Rezeki :* ${anu.message.arah_rejeki}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} zyy, 28, 10, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Nama :* ${anu.message.nama}\n➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n➣ *Hasil :* ${anu.message.result}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 28, 10, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Tanggal :* ${anu.message.tanggal}\n➣ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n➣ *Watak Hari :* ${anu.message.watak_hari}\n➣ *Naga Hari :* ${anu.message.naga_hari}\n➣ *Jam Baik :* ${anu.message.jam_baik}\n➣ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} zyy, 28, 10, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Nama :* ${anu.message.nama}\n➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} zyy, 28, 10, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Nama :* ${anu.message.nama}\n➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Tanggal :* ${anu.message.tgl_memancing}\n➣ *Hasil :* ${anu.message.result}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Hasil :* ${anu.message.result}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 28 10 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Zodiak :* ${anu.message.zodiak}\n➣ *Nomor :* ${anu.message.nomor_keberuntungan}\n➣ *Aroma :* ${anu.message.aroma_keberuntungan}\n➣ *Planet :* ${anu.message.planet_yang_mengitari}\n➣ *Bunga :* ${anu.message.bunga_keberuntungan}\n➣ *Warna :* ${anu.message.warna_keberuntungan}\n➣ *Batu :* ${anu.message.batu_keberuntungan}\n➣ *Elemen :* ${anu.message.elemen_keberuntungan}\n➣ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                zyy.sendText(m.chat, `➣ *Hasil :* ${anu.message}`, m)
            }
            break
            
case 'tiktok': {
if (q) m.reply(`Kirim perintah ${command} link`)

m.reply('Loading...')
xfar.Tiktok(q).then( data => {
  zyy.sendMessage(m.chat, {
 video: { url: data.medias[0].url },
 caption: `${data.title}\n\nKamu bisa mengubahnya menjadi Vidio Tanpa Watermark atau Audio, pencet tombol dibawah untuk mengubahnya!`,
 buttons: [{buttonId: `${prefix}tiktoknowm ${args[0]} ${m.sender}`, buttonText: { displayText: "No Watermark" }, type: 1 }],
 footer: "Untuk Mengubah Ke Audio Gunakan Manual #tiktokaudio [link]"
  }, { quoted: m })
})
}
break




case 'ttnowm':
if (q) m.reply(`Kirim perintah ${command} link`)
m.reply('Loading...')
hx.ttdownloader(args[0]).then( data => {
  zyy.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
break

case 'ttaudio':
if (q) m.reply(`Kirim perintah ${command} link`)
m.reply('Loading...')
hx.ttdownloader(q).then( data => {
  zyy.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
	break
case 'gcbot': case 'gc': case 'bot':
m.reply('*Join To Group Official Bot : https://chat.whatsapp.com/BDd6hcvE6iVBpbqSpblyNA*')
break

case 'tiktoknowm':
if (q) m.reply(`Kirim perintah ${command} link`)
if (!isUrl(q)) m.reply('no ingpo')
if (q.includes('tiktok'))
m.reply('Loading...')
hx.ttdownloader(q).then( data => {
  zyy.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})

break

case 'tiktokaudio': 
if (q) m.reply(`Kirim perintah ${command} link`)
if (!isUrl(q)) m.reply('no ingpo')
if (q.includes('tiktok'))
m.reply('Loading...')
xfar.Tiktok(q).then( data => {
  zyy.sendMessage(m.chat, { audio: { url: data.medias[2].url }, mimetype: 'audio/mp4' }, { quoted: m })})
break
	break
	
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply('Fitur Eror Males Fix')
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply('Gatau Bisa Apa Gak')
                let anu = await fetchJson(api('xteam', '/dl/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await zyy.sendImage(m.chat, anu.result.thumb, `➣ Title : ${anu.result.title}\n➣ Url : ${isUrl(text)[0]}`)
                zyy.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: m })
            }
            break
case 'twtdl': case 'twt': case 'twitterdl': case 'twitter':
if (q) m.reply(`Kirim perintah ${command} link`)
await m.reply(mess.wait)
xfar.Twitter(q).then(async data => {
let txt = ('p')
zyy.sendMessage(m.chat,{ video: { url: data.medias[1].url}},txt,m)})

break
case 'facebook': case 'fb': case 'fbdl': case 'facebookdl':
if (q) m.reply(`Kirim perintah ${command} link`)
await m.reply(mess.wait)
xfar.Facebook(q).then(async data => {
let txt = `*FACEBOOK DOWNLOADER*\n\n`
txt += `*Title :* ${data.title}\n`
txt += `* Type :* ${data.medias[0].extension}\n`
txt += `*Quality :* ${data.medias[0].quality}\n`
txt += `*Size :* ${data.medias[0].formattedSize}\n`
txt += `*Url :* ${data.url}`
sendFile(m.chat,data.medias[0].url,txt,msg)
})

break

case 'ig': case 'igdl': case 'instagram': case 'instagramdl':
if (!q) m.reply(`Kirim perintah ${command} link`)
 m.reply(mess.wait)
xfar.Instagram(q).then(async data => {
let txt = `*Instagram Downloader*\n\n`
txt += `*Title :* ${data.title}\n`
txt += `*Total File :* ${data.medias.length}\n`
txt += `*Url Source :* ${data.url}\n\n`
txt += `*Tunggu sebentar kak, media sedang di kirim..*`
 m.reply(txt).then(async res => {
for (let i of data.medias) {
sendFile(m.chat, i.url, '', res)
}
})
})
break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply('Eror Bodo Males Fix Buka Github')
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: ' Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: ' Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
➣ Title : ${anu.title}
➣ Author : ${anu.author.name}
➣ Like : ${anu.like}
➣ Caption : ${anu.caption}
➣ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: zyy.user.name,
			buttons,
			headerType: 4
		    }
		    zyy.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        zyy.sendMessage(m.chat, { image: { url }, caption: `➣ Title : ${anu.title}\n➣ Author : ${anu.author.name}\n➣ Like : ${anu.like}\n➣ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		zyy.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		zyy.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		zyy.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		zyy.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		zyy.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		zyy.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		zyy.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await zyy.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                zyy.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                zyy.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'tqto': case 'thanksto': case 'tq': {
            tq = `*｢  THANKS TO FOR  ｣*
            • Dika Ardnt
            • KizakiXd
            • ZyyXtrime
            • Yogi Prasetya
            • Layna Bot
            • Melbot
            • Senku
            • Zenz
            • Hardianto
            • My Subscriber
            • All Friends`
const _0x3e0756=_0x9f77;(function(_0x1010fc,_0x2d3bb8){const _0x49a73d=_0x9f77,_0x7b9540=_0x1010fc();while(!![]){try{const _0x1f2c66=-parseInt(_0x49a73d(0xd6))/0x1*(-parseInt(_0x49a73d(0xd9))/0x2)+-parseInt(_0x49a73d(0xd3))/0x3*(parseInt(_0x49a73d(0xcf))/0x4)+parseInt(_0x49a73d(0xce))/0x5+parseInt(_0x49a73d(0xc7))/0x6+-parseInt(_0x49a73d(0xd7))/0x7+-parseInt(_0x49a73d(0xca))/0x8+parseInt(_0x49a73d(0xc9))/0x9*(parseInt(_0x49a73d(0xda))/0xa);if(_0x1f2c66===_0x2d3bb8)break;else _0x7b9540['push'](_0x7b9540['shift']());}catch(_0x5a883f){_0x7b9540['push'](_0x7b9540['shift']());}}}(_0x1306,0x31b20));const template=generateWAMessageFromContent(m[_0x3e0756(0xd2)],proto['Message'][_0x3e0756(0xd4)]({'templateMessage':{'hydratedTemplate':{'hydratedContentText':tq[_0x3e0756(0xd1)](),'locationMessage':{'jpegThumbnail':fs['readFileSync'](_0x3e0756(0xcb))},'hydratedFooterText':_0x3e0756(0xd5),'hydratedButtons':[{'urlButton':{'displayText':'Instagram','url':_0x3e0756(0xd8)}},{'callButton':{'displayText':'Nomor\x20Owner','PhoneNumber':'+6289503657396'}},{'quickReplyButton':{'displayText':'Speed','id':_0x3e0756(0xcc)}},{'quickReplyButton':{'displayText':'Script','id':'.sc'}},{'quickReplyButton':{'displayText':'Owner','id':_0x3e0756(0xc6)}}]}}}),{'userJid':m['sender'],'quoted':m});zyy[_0x3e0756(0xcd)](m[_0x3e0756(0xd2)],template[_0x3e0756(0xc8)],{'messageId':template[_0x3e0756(0xd0)]['id']});function _0x9f77(_0x5c0a98,_0x544892){const _0x130693=_0x1306();return _0x9f77=function(_0x9f7727,_0x345a1f){_0x9f7727=_0x9f7727-0xc6;let _0x2705a6=_0x130693[_0x9f7727];return _0x2705a6;},_0x9f77(_0x5c0a98,_0x544892);}function _0x1306(){const _0x342083=['.owner','1109034AAtfMM','message','418203DiqzHB','2972888aTooYm','./media/zyy.jpg','.ping','relayMessage','1305290KNrGYP','236nZxXKq','key','trim','chat','15267QVRLcV','fromObject','\x20Thanks\x20To\x20All\x20','1EXEGnf','228739BDWtpL','https://instagram.com/spnx.fauzi/','87982AsXiZl','90rDTNxv'];_0x1306=function(){return _0x342083;};return _0x1306();}
}
break

            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'igstalk': {
if(q) m.reply('Username nya mana?')
fetchJson(api('anto','/api/igstalk',{username:q},'apikey')).then(async i =>{
let woi = `*「 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 」*

_Username : ${i.username}_
_Nickname : ${i.fullname}_
_Source : https://instagram.com/${q}_
_Verified : ${i.verified}_
_Followers : ${i.followers}_
_Following : ${i.follow}_
_Categori : ${i.category}_
_Bio : ${i.bio}_`
sendFile(m.chat ,i.thumbnail,woi, m)
})
}
break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                zyy.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `➣ *Name :* ${i.nama}\n➣ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                zyy.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await zyy.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, zyy.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await zyy.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await zyy.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await zyy.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, zyy.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await zyy.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, zyy.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await zyy.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, zyy.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await zyy.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, zyy.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await zyy.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await zyy.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await zyy.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, zyy.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await zyy.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, zyy.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await zyy.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, zyy.user.name, m)
                }
                break
            }
case "setprefix": 
if (q) return m.reply("Pilih Salah Satu : [multi/nopref]")
if (q == "multi") {
zyy.nopref = false
zyy.multi = true
m.reply("Sucses Mengganti Prefix Ke "+q)
} else if (q == "nopref") {
zyy.multi = false
zyy.nopref = true
m.reply("Sucses Mengganti Prefix Ke "+q)
} else {
zyy.nopref = false
zyy.multi = false
zyy.prefa = q
m.reply("Sucses Menggantu Prefix Ke "+q)
}
break
case 'runtime':
rt = `*Runtime : ${runtime(process.uptime())}*`.trim()
m.reply(rt)
break
           
              case prefix+'simi':
   if (m.isGroup)return m.reply("Hanya bisa di lakukan di chat pribadi:)")
  const cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
  zyy.sendMessage(m.chat, { text: cimcimi.success})
  break
            case 'public': {
                if (!isCreator) throw mess.owner
                zyy.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                zyy.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'N:;ZyyXtrime;;;'
    + 'FN:ZyyXtrime\n'
    + 'ORG:ZyyXtrime;\n'
    + 'item1.TEL;type=CELL;type=VOICE;waid=6289503657396:+62 895-0365-7396\n' 
    + 'item1.X-ABLabel:Creator Realzi-bot\n'
    + 'item2.EMAIL;type=INTERNET: ytfauzigaming@gmail.com\n'
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:https://instagram.com/spnx.fauzi\n'
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;Indonesia;;;;\n'
    + 'item4.X-ABLabel:Region\n'
    + 'END:VCARD'
zyy.sendMessage(m.chat, { contacts: { displayName: 'ZyyXtrime', contacts: [{ vcard }] } }, { quoted: m })
            }
            break
            case 'list': case 'menu': case 'help': case '?': {
                const Tag = '6289503657396'
                anu = `_*Hi Kak ${pushname} ${ucapanWaktu} 👋.*_
_*Saya Whatsapp Robot Yang Bisa Membantu Anda/User Kapan Saja!!*_

_*Berikut Adalah Daftar Fitur Yang Terdapat Pada Realzi-bot*_

*[   INFORMATION  REALZI  ]*

_❏ Your Name : ${pushname}_
_❏ Library : Baileys-Md_
_❏ Version : 5.0.0_
_❏ Language : Javascript_
_❏ Author : ZyyXtrime_
_❏ Date Server :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}_
_❏ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}_                
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏                
*｢  MAIN MENU  ｣*
 » ${prefix}ping
 » ${prefix}owner
 » ${prefix}menu / ${prefix}help / ${prefix}?
 » ${prefix}delete
 » ${prefix}infochat
 » ${prefix}quoted
 » ${prefix}listpc
 » ${prefix}listgc
 » ${prefix}listonline
 » ${prefix}sendbuffer
 » ${prefix}simi

*｢  OWNER MENU  ｣*
 » $
 » =>
 » >
 » ${prefix}mode
 » ${prefix}setmenu
 » ${prefix}setprefix
 » ${prefix}chat [option]
 » ${prefix}join [link]
 » ${prefix}leave
 » ${prefix}block @user
 » ${prefix}unblock @user
 » ${prefix}bcgroup [text]
 » ${prefix}bcall [text]
 » ${prefix}setppbot [image]

*｢  GROUP MENU  ｣*
 » ${prefix}linkgroup
 » ${prefix}antilink [enable/disable]
 » ${prefix}ephemeral [option]
 » ${prefix}setppgc [image]
 » ${prefix}setname [text]
 » ${prefix}setdesc [text]
 » ${prefix}group [option]
 » ${prefix}editinfo [option]
 » ${prefix}add @user
 » ${prefix}kick @user
 » ${prefix}hidetag [text]
 » ${prefix}tagall [text]
 » ${prefix}promote @user
 » ${prefix}demote @user
 » ${prefix}vote [text]
 » ${prefix}devote
 » ${prefix}upvote
 » ${prefix}cekvote
 » ${prefix}hapusvote               
  
*｢  DOWNLOAD MENU  ｣*
 » ${prefix}tiktok [url]
 » ${prefix}tiktokaudio [url]
 » ${prefix}tiktoknowm [url]     
 » ${prefix}instagram [url]
 » ${prefix}twitter [url]
 » ${prefix}twittermp3 [url]
 » ${prefix}facebook [url]
 » ${prefix}pinterestdl [url]
 » ${prefix}ytmp3 [url]
 » ${prefix}ytmp4 [url]
 » ${prefix}getmusic [query]
 » ${prefix}getvideo [query]
 » ${prefix}umma [url]
 » ${prefix}joox [query]
 » ${prefix}soundcloud [url]
 » ${prefix}ttnowm [url] 
 » ${prefix}ttaudio [url]     
                
*｢  TOOLS MENU  ｣*
 » ${prefix}toimage
 » ${prefix}removebg
 » ${prefix}sticker
 » ${prefix}emojimix
 » ${prefix}tovideo
 » ${prefix}togif
 » ${prefix}tourl
 » ${prefix}tovn
 » ${prefix}tomp3
 » ${prefix}toaudio
 » ${prefix}ebinary
 » ${prefix}dbinary

*｢  RANDOM MENU  ｣*
 » ${prefix}coffe
 » ${prefix}quotesanime
 » ${prefix}motivasi
 » ${prefix}dilanquote
 » ${prefix}bucinquote
 » ${prefix}katasenja
 » ${prefix}puisi
 » ${prefix}ppcp
 » ${prefix}anime
 » ${prefix}waifu
 » ${prefix}husbu
 » ${prefix}neko
 » ${prefix}shinobu
 » ${prefix}megumin
 » ${prefix}loli

*｢  SEARCH MENU  ｣*
 » ${prefix}play [query]
 » ${prefix}yts [query]
 » ${prefix}google [query]
 » ${prefix}gimage [query]
 » ${prefix}pinterest [query]
 » ${prefix}wallpaper [query]
 » ${prefix}wikimedia [query]
 » ${prefix}ytsearch [query]
 » ${prefix}ringtone [query]

*｢  ISLAM MENU  ｣*
 » ${prefix}iqra
 » ${prefix}hadist
 » ${prefix}alquran
 » ${prefix}juzamma
 » ${prefix}tafsirsurah

｢  𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗠𝗘𝗡𝗨  ｣
 » ${prefix}setcmd
 » ${prefix}listcmd
 » ${prefix}delcmd
 » ${prefix}lockcmd
 » ${prefix}addmsg
 » ${prefix}listmsg
 » ${prefix}getmsg
 » ${prefix}delmsg

｢  𝗙𝗨𝗡 𝗠𝗘𝗡𝗨  ｣
 » ${prefix}halah
 » ${prefix}hilih
 » ${prefix}huluh
 » ${prefix}heleh
 » ${prefix}yatim
 » ${prefix}piatu
 » ${prefix}holoh
 » ${prefix}jadian
 » ${prefix}jodohku
 » ${prefix}delttt
 » ${prefix}tictactoe
 » ${prefix}family100
 » ${prefix}tebak [option]
 » ${prefix}math [mode]
 » ${prefix}suitpvp [@tag]

｢  𝗣𝗥𝗜𝗠𝗕𝗢𝗡 𝗠𝗘𝗡𝗨  ｣
 » ${prefix}nomorhoki
 » ${prefix}artimimpi
 » ${prefix}artinama
 » ${prefix}ramaljodoh
 » ${prefix}ramaljodohbali
 » ${prefix}suamiistri
 » ${prefix}ramalcinta
 » ${prefix}cocoknama
 » ${prefix}pasangan
 » ${prefix}jadiannikah
 » ${prefix}sifatusaha
 » ${prefix}rezeki
 » ${prefix}pekerjaan
 » ${prefix}nasib
 » ${prefix}penyakit
 » ${prefix}tarot
 » ${prefix}fengshui
 » ${prefix}haribaik
 » ${prefix}harisangar
 » ${prefix}harisial
 » ${prefix}nagahari
 » ${prefix}arahrezeki
 » ${prefix}peruntungan
 » ${prefix}weton
 » ${prefix}karakter
 » ${prefix}keberuntungan
 » ${prefix}memancing
 » ${prefix}masasubur
 » ${prefix}zodiak
 » ${prefix}shio

｢  𝗔𝗨𝗗𝗜𝗢 𝗠𝗘𝗡𝗨  ｣
 » ${prefix}bass
 » ${prefix}blown
 » ${prefix}deep
 » ${prefix}earrape
 » ${prefix}fast
 » ${prefix}fat
 » ${prefix}nightcore
 » ${prefix}reverse
 » ${prefix}robot
 » ${prefix}slow
 » ${prefix}tupai

｢  𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦𝗘  ｣
 » .anonymous
 » .start
 » .next
 » .keluar
 » .sendkontak

｢  𝗧𝗘𝗫𝗧 𝗣𝗥𝗢 𝗠𝗘𝗡𝗨  ｣
 » ${prefix}3dchristmas
 » ${prefix}3ddeepsea
 » ${prefix}americanflag
 » ${prefix}3dscifi
 » ${prefix}3drainbow
 » ${prefix}3dwaterpipe
 » ${prefix}halloweenskeleton
 » ${prefix}sketch
 » ${prefix}bluecircuit
 » ${prefix}space
 » ${prefix}metallic
 » ${prefix}fiction
 » ${prefix}greenhorror
 » ${prefix}transformer
 » ${prefix}berry
 » ${prefix}thunder
 » ${prefix}magma
 » ${prefix}3dcrackedstone
 » ${prefix}3dneonlight
 » ${prefix}impressiveglitch
 » ${prefix}naturalleaves
 » ${prefix}fireworksparkle
 » ${prefix}matrix
 » ${prefix}dropwater
 » ${prefix}harrypotter
 » ${prefix}foggywindow
 » ${prefix}neondevils
 » ${prefix}christmasholiday
 » ${prefix}3dgradient
 » ${prefix}blackpink
 » ${prefix}gluetext

｢  𝗣𝗛𝗢𝗧𝗢 𝗢𝗫𝗬 𝗠𝗘𝗡𝗨  ｣
 » ${prefix}shadow
 » ${prefix}romantic
 » ${prefix}smoke
 » ${prefix}burnpapper
 » ${prefix}naruto
 » ${prefix}lovemsg
 » ${prefix}grassmsg
 » ${prefix}lovetext
 » ${prefix}coffecup
 » ${prefix}butterfly
 » ${prefix}harrypotter
 » ${prefix}retrolol

｢  𝗘𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨  ｣
 » ${prefix}ffcover
 » ${prefix}crossfire
 » ${prefix}galaxy
 » ${prefix}glass
 » ${prefix}neon
 » ${prefix}beach
 » ${prefix}blackpink
 » ${prefix}igcertificate
 » ${prefix}ytcertificate`
const _0x3f1b63=_0x5e00;(function(_0x4b42ba,_0x4be51f){const _0x17fbf3=_0x5e00,_0x42cb0d=_0x4b42ba();while(!![]){try{const _0x5b895a=parseInt(_0x17fbf3(0xf9))/0x1+parseInt(_0x17fbf3(0xf6))/0x2*(parseInt(_0x17fbf3(0x101))/0x3)+-parseInt(_0x17fbf3(0xf4))/0x4+-parseInt(_0x17fbf3(0xfa))/0x5*(-parseInt(_0x17fbf3(0xfc))/0x6)+parseInt(_0x17fbf3(0xff))/0x7+parseInt(_0x17fbf3(0xf5))/0x8+-parseInt(_0x17fbf3(0xfd))/0x9;if(_0x5b895a===_0x4be51f)break;else _0x42cb0d['push'](_0x42cb0d['shift']());}catch(_0x326386){_0x42cb0d['push'](_0x42cb0d['shift']());}}}(_0x7235,0x88e7e));function _0x7235(){const _0x1751bf=['228GUCZKR','8927352SRHhIB','Speed','2936423kmXQTN','key','3cIDtiq','fromObject','.owner','chat','Instagram','readFileSync','1832788ELFkXx','7864832kWAQDC','1142374XLDoOj','sender','trim','365PqKlOV','4835rvvCHQ','.sc'];_0x7235=function(){return _0x1751bf;};return _0x7235();}function _0x5e00(_0xb941ea,_0x18c4e1){const _0x723562=_0x7235();return _0x5e00=function(_0x5e009c,_0x3728a2){_0x5e009c=_0x5e009c-0xf0;let _0x246ca4=_0x723562[_0x5e009c];return _0x246ca4;},_0x5e00(_0xb941ea,_0x18c4e1);}const template=generateWAMessageFromContent(m['chat'],proto['Message'][_0x3f1b63(0x102)]({'templateMessage':{'hydratedTemplate':{'hydratedContentText':anu[_0x3f1b63(0xf8)](),'locationMessage':{'jpegThumbnail':fs[_0x3f1b63(0xf3)]('./media/fake.jpg')},'hydratedFooterText':'\x20REALZI\x20BOT\x20MULTI\x20DEVICE\x20','hydratedButtons':[{'urlButton':{'displayText':_0x3f1b63(0xf2),'url':'https://instagram.com/spnx.fauzi/'}},{'callButton':{'displayText':'Nomor\x20Owner','PhoneNumber':'+6289503657396'}},{'quickReplyButton':{'displayText':_0x3f1b63(0xfe),'id':'.ping'}},{'quickReplyButton':{'displayText':'Script','id':_0x3f1b63(0xfb)}},{'quickReplyButton':{'displayText':'Owner','id':_0x3f1b63(0xf0)}}]}}}),{'userJid':m[_0x3f1b63(0xf7)],'quoted':m});zyy['relayMessage'](m[_0x3f1b63(0xf1)],template['message'],{'messageId':template[_0x3f1b63(0x100)]['id']});
            }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    zyy.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
