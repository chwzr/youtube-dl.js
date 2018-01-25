const fs = require("fs");
const got = require("got");

if (!fs.existsSync("./bin")) fs.mkdirSync("./bin");

exports.downloadBinary = function() {
  const startTime = new Date().getTime();
  const isWin = /^win/.test(process.platform);
  let url, filePath;
  if (isWin) {
    url = "https://yt-dl.org/downloads/latest/youtube-dl.exe";
    filePath = "./bin/youtube-dl.exe";
  } else {
    url = "https://yt-dl.org/downloads/latest/youtube-dl";
    filePath = "./bin/youtube-dl";
  }
  got(url, {followRedirect: true, encoding: null})
    .then(resp => {
      fs.writeFileSync(filePath, resp.body);
      console.log(`youtube-dl binary download finished! (${(new Date().getTime() - startTime)/1000}s)`);
    })
    .catch(err => {
      console.error(err);
    });
}
