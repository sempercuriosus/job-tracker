// will make this more dynamic on the column selection.
const opt = require('../config');

function FilterObject(toFilter) {
  try {
    if (!toFilter) {
      throw 'There is no incoming data to filter...';
    }

    const FILTERED = Object.keys(toFilter).map((key) => {
      return {
        Company:
          toFilter[key].Company.length > opt.columnWidth
            ? toFilter[key].Company.slice(0, opt.columnWidth) +
              '...'
            : toFilter[key].Company,
        Role: toFilter[key].Role,
        DateApplied: toFilter[key].DateApplied || '',
        Id: toFilter[key].Id || '',
      };
    });

    return FILTERED;
  } catch (error) {
    console.error(error);
  }
}

module.exports = FilterObject;

