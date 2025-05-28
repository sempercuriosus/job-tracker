// will make this more dynamic on the column selection.

function FilterObject(toFilter) {
  return Object.keys(toFilter).map((key) => {
    return {
      Company: toFilter[key].Company,
      Role: toFilter[key].Role,
      DateApplied: toFilter[key].DateApplied || '',
      Id: toFilter[key].Id || '',
    };
  });
}

module.exports = FilterObject;

