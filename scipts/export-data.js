const fs = require('fs').promises;
const csv_obj = require('./csv-object');

async function write(outputLocation, data, format) {
  try {
    const DATA_AS_CSV = await csv_obj.ObjToCsv(data);

    await fs.writeFile(outputLocation, DATA_AS_CSV, format);
  } catch (error) {
    console.error(
      'There was an issue in WRITING the data to the location: ',
      outputLocation,
    );

    console.error(error);

    return; // stopping the execution of the script, with some grace, hopefully.
  }
}

module.exports = write;

