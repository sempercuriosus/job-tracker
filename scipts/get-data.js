const fs = require('fs').promises;

async function read(importLocation, format) {
  try {
    const DATA = await fs.readFile(importLocation, format);

    if (!DATA) {
      throw 'DATA_PREV read was undefined or otherwise not usable.';
    }

    return DATA;
  } catch (error) {
    console.error(
      'There was an issue IMPORTING the data from the location:',
      importLocation,
    );

    return; // stopping the execution of the script, with some grace, hopefully.
  }
}

module.exports = read;

