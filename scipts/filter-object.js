// will make this more dynamic on the column selection.

function FilterObject(toFilter) {
  return Object.keys(toFilter).map((key) => {
    return {
      Company:
        toFilter[key].Company.length > 25
          ? toFilter[key].Company.slice(0, 25) + '...'
          : toFilter[key].Company,
      Role: toFilter[key].Role,
      DateApplied: toFilter[key].DateApplied || '',
      Salary:
        toFilter[key].Salary.length > 20
          ? toFilter[key].Salary.slice(0, 25) + '...'
          : toFilter[key].Salary || '$000',
      Id: toFilter[key].Id || '',
    };
  });
}

module.exports = FilterObject;

