const fs = require('fs').promises;
const opt = require('../config.js');

async function read() {
  try {
    return await fs.readFile(opt.importFileLocation, opt.format);
  } catch (error) {
    console.error(
      'There was an issue IMPORTING the data from the location:',
      opt.importFileLocation,
    );

    if (opt.devMode === true) console.error(error);

    return; // stopping the execution of the script, with some grace, hopefully.
  }
}

module.exports = read;

