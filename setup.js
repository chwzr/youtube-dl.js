const ytdl = require("./index.js");

ytdl.downloadBinary()
  .then(time => {
    console.log(`youtube-dl binary download finished (${time}s)`);
  });