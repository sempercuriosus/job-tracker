const fs = require('fs').promises;
const opt = require('../config.js');

async function write(data) {
  try {
    return await fs.writeFile(
      opt.exportFileLocation,
      data,
      opt.format,
    );
  } catch (error) {
    console.error(
      'There was an issue in WRITING the data to the location: ',
      opt.exportFileLocation,
    );

    if (opt.devMode === true) console.error(error);

    return; // stopping the execution of the script, with some grace, hopefully.
  }
}

module.exports = write;

