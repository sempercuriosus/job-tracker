const fs = require('fs').promises;

async function write(outputLocation, data, format) {
  try {
    return await fs.writeFile(outputLocation, data, format);
  } catch (error) {
    console.error(
      'There was an issue in WRITING the data to the location: ',
      opt.outputLocation,
    );

    if (opt.devMode === true) console.error(error);

    return; // stopping the execution of the script, with some grace, hopefully.
  }
}

module.exports = write;

