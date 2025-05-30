function FormatLine(objToFormat) {
  let lines = '';

  Object.keys(objToFormat).forEach((el) => {
    let line = objToFormat[el].includes(',')
      ? `"${objToFormat[el]}"`
      : objToFormat[el];

    lines += line.trim() + ',';
  });

  const LINES = lines.slice(0, -1);

  return LINES;
}

module.exports = FormatLine;

