# youtube-dl.js
[![Build Status](https://travis-ci.org/Delivator/youtube-dl.js.svg?branch=master)](https://travis-ci.org/Delivator/youtube-dl.js)
[![npm version](https://badge.fury.io/js/youtube-dl.js.svg)](https://www.npmjs.com/package/youtube-dl.js)

## Installation

### Requirements

FFmpeg has to be installed to PATH

To install youtube-dl.js run `npm install youtube-loader --save`

To update the youtube-dl binary, run `npm run updateytdl` or run the setup script (`node setup.js`)

## Usage

```javascript
const ytdl = require("youtube-loader");

let url = "https://youtu.be/q5weS3aY-Qc",
    filename = `${new Date().getTime()}.%(ext)s`,
    args = ["-o", filename, "-x", "--audio-format=mp3", "--restrict-filenames", "--external-downloader=ffmpeg", "--audio-quality=96k"],
    options = {status: (data) => console.log(data)};

ytdl(url, args, options)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
```

## THX

for Delivator, he wrote this, i forked it to add status callbacks ;) 