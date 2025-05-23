function CsvToObj(csvData) {
  //

  try {
    const HEADERS = csvData[0].split(',');

    const DATA = csvData.slice(1).map((element) => {
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

module.exports = CsvToObj;

