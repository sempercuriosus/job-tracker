const options = {
  format: 'utf8',
  devMode: false,
  importFileLocation:
    '/Users/keys/Documents/career/2025-jobs copy.csv',
  exportFileLocation:
    '/Users/keys/Documents/career/2025-jobs-main.csv',
  splitOn: '\n',
  columns: {
    1: 'Company',
    2: 'Role',
    3: 'Salary',
    4: 'Posting',
    5: 'DateApplied',
    6: 'Contact',
    7: 'Email',
    8: 'Phone',
    9: 'Notes',
    10: 'ID',
  },
};

module.exports = options;

