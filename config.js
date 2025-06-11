const options = {
  format: 'utf8',
  devMode: false,
  backup: {
    writeBackupFile: true,
    backupFileLocation:
      '/Users/keys/Documents/career/applications/2025-jobs-bak.csv',
  },
  importFileLocation:
    '/Users/keys/Documents/career/applications/2025-jobs-main.csv',
  exportFileLocation:
    '/Users/keys/Documents/career/applications/2025-jobs-main.csv',
  splitOn: '\n',
  columnWidth: 25,
  columns: [
    'Company',
    'Role',
    'Salary',
    'Posting',
    'DateApplied',
    'Contact',
    'Email',
    'Phone',
    'Id',
  ],
};

module.exports = options;

