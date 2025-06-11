async function CsvToObj(csvData) {
  try {
    if (!csvData) {
      throw 'Incoming CSV Data is empty.';
    }

    const DATA_RAW = csvData.split('\n');
    const HEADERS = DATA_RAW[0].split(',');

    const DATA = DATA_RAW.slice(1).map((element) => {
      const EL = element.slice(0, -1).trim().split(',');

      return EL.reduce((acc, value, index) => {
        acc[HEADERS[index].trim()] = value.trim();
        return acc;
      }, {});
    });

    return { headers: HEADERS, data: DATA };
  } catch (error) {
    console.error(error);

    return;
  }
}

async function ObjToCsv(objectData) {
  //

  try {
    if (!objectData.data) {
      throw 'Incoming Object Data is empty';
    }

    let csvData = [];
    const HEADERS = objectData.headers;
    const DATA = objectData.data;

    csvData.push(HEADERS.join(','));

    Object.keys(DATA).forEach((element) => {
      const VALUES = Object.values(DATA[element]);
      const LINE = VALUES.join(',');
      csvData.push(LINE);
    });

    const CSV = csvData.join('\n'); // condense the data to a single element in the array

    return CSV;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { CsvToObj, ObjToCsv };

