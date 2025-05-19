const fs = require('fs').promises;
const opt = require('../config.js');

async function write(data) {
  // add
  // if the export file location is not set to use the import one
  await fs.writeFile(opt.exportFileLocation, data, opt.format);
}

module.exports = write;

