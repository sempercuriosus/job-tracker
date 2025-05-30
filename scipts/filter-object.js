// will make this more dynamic on the column selection.
const opt = require('../config');

function FilterObject(toFilter) {
  return Object.keys(toFilter).map((key) => {
    return {
      Company:
        toFilter[key].Company.length > opt.columnWidth
          ? toFilter[key].Company.slice(0, opt.columnWidth) +
            '...'
          : toFilter[key].Company,
      Role: toFilter[key].Role,
      DateApplied: toFilter[key].DateApplied || '',
      Salary:
        toFilter[key].Salary.length > opt.columnWidth
          ? toFilter[key].Salary.slice(0, opt.columnWidth) +
            '...'
          : toFilter[key].Salary || '$000',
      Id: toFilter[key].Id || '',
    };
  });
}

module.exports = FilterObject;

