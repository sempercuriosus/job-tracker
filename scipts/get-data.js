const fs = require('fs').promises;
const opt = require('../config.js');

async function read() {
  await fs.readFile(opt.importFileLocation, opt.format);
}

module.exports = read;

