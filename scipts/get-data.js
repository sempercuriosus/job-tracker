const fs = require('fs').promises;
const csv_obj = require('./csv-object.js');

async function read(importLocation, format) {
  try {
    const DATA = await fs.readFile(importLocation, format);

    if (!DATA) {
      throw 'DATA read was undefined or otherwise not usable.';
    }

    const DATA_AS_OBJECT = await csv_obj.CsvToObj(DATA);

    return DATA_AS_OBJECT;
  } catch (error) {
    console.error(
      'There was an issue IMPORTING the data from the location:',
      importLocation,
    );

    console.error(error);

    return; // stopping the execution of the script, with some grace, hopefully.
  }
}

module.exports = read;

