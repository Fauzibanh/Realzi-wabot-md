const cheerio = require('cheerio')
const axios = require('axios')
const request = require("request")

const Gempa = () => new Promise((resolve, reject) => {
  axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').then((response) => {
  const $ = cheerio.load(response.data)

  const urlElems = $('table.table-hover.table-striped')

  for (let i = 0; i < urlElems.length; i++) {
    const urlSpan = $(urlElems[i]).find('tbody')[0]

    if (urlSpan) {
      const urlData = $(urlSpan).find('tr')[0]
      var Kapan = $(urlData).find('td')[1]
      var Letak = $(urlData).find('td')[2]
      var Magnitudo = $(urlData).find('td')[3]
      var Kedalaman = $(urlData).find('td')[4]
      var Wilayah = $(urlData).find('td')[5]
      var lintang = $(Letak).text().split(' ')[0]
      var bujur = $(Letak).text().split(' ')[2]
      var hasil = {
        waktu: $(Kapan).text(),
        lintang: lintang,
        bujur: bujur,
        magnitudo: $(Magnitudo).text(),
        kedalaman: $(Kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
        wilayah: $(Wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-','').replace(/\r/g, '').split('\n')[0],
        map: $('div.row > div > img').attr('src')
      }
      // We then print the text on to the console
      resolve(hasil);
    }
  }
  }).catch(err => reject(err))
})

const Cuaca = (kota) => {
  return new Promise((resolve, reject) => {
	var url = `http://api.openweathermap.org/data/2.5/weather?q=${kota}&units=metric&appid=132d0c03530775bbbfa9b298392866df`;
	request(url, async function (err, response, body) {
		if (err) {
			reject(err);
		} else {
			const cuaca = JSON.parse(body);
				result = {
					Nama: cuaca.name +','+ cuaca.sys.country,
					Longitude : cuaca.coord.lon,
					Latitude: cuaca.coord.lat,
					Suhu: cuaca.main.temp+" C",
					Angin: cuaca.wind.speed+" m/s",
					Kelembaban: cuaca.main.humidity+"%",
					Cuaca: cuaca.weather[0].main,
					Keterangan: cuaca.weather[0].description,
					Udara: cuaca.main.pressure+" HPa"
				}
			resolve(result);
		}
	});
  })
}

module.exports = { Gempa, Cuaca }