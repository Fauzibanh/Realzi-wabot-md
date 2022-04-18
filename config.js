const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	anto: 'https://hardianto.xyz',
    zenz: 'https://zenzapis.xyz',
}


// Apikey Website Api
global.APIKeys = {
        'https://hardianto.xyz': 'hardianto',
        'https://zenzapis.xyz': '7d1e10e532', //Untuk Mendapatkan Apikey Silahkan Register Di : https://zenzapi.xyz
        
}


// Other
global.Prefix = 'Multi'
global.modelMenu = 'locButton'
global.owner = ['6289503657396']
global.premium = ['6289503657396']
global.meki = '6289503657396'
global.ownerNumber = '6289503657396'
global.packname = 'ZyyXtrime'
global.author = 'REALZI - BOT'
global.sessionName = 'Fauzi'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.Mode = 'Public'
global.mess = {
    success: 'SUKSES!!.',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    done: 'Done',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)', 
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12'
}
global.limitawal = {
    premium: "Infinity",
    free: 1000
}
global.thumb = fs.readFileSync('./media/zyy.jpg')
global.pathImg = fs.readFileSync('./media/gambar.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
