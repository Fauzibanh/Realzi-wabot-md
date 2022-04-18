const axios = require("axios").default;
const cheerio = require("cheerio");

async function gore() {
  return new Promise((resolve, reject) => {
axios.get("https://seegore.com/gore/").then(anu => {
  $ = cheerio.load(anu.data);
  let ini = [];
  $("figure.media").each(function(a,b) {
    ini.push($(this).find("a").attr("href"))
  })
  random = ini[Math.floor(Math.random() * ini.length)]
  axios.get(random).then(result => {
    $$ = cheerio.load(result.data)
    hasilnya = $$("source[type='video/mp4']").attr("src")
    resolve(hasilnya)
  })
})
})
}
module.exports = { gore }