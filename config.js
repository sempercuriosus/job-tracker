const options = {
  format: 'utf8',
  devMode: false,
  backup: {
    writeBackupFile: true,
    backupFileLocation:
      '/Users/keys/Documents/career/1111-jobs-bak.csv',
  },
  importFileLocation:
    '/Users/keys/Documents/career/1-test-data.csv',
  exportFileLocation:
    '/Users/keys/Documents/career/1-test-data.csv',
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

