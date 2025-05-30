function FormatLine(objToFormat) {
  let lines = '';

  Object.keys(objToFormat).forEach((el) => {
    let line = objToFormat[el].includes(',')
      ? `"${objToFormat[el]}"`
      : objToFormat[el];

    lines += line.trim() + ',';
  });

  return lines;
}

module.exports = FormatLine;
