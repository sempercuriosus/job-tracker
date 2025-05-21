const questions = require('./scipts/questions.js');
const read = require('./scipts/get-data.js');
const write = require('./scipts/export-data.js');
const opt = require('./config.js');

async function main() {
  const WELCOME_MESSAGE = `
  + - - - - - - - - - - - - - - - +
  |     Job Application Helper    |
  + - - - - - - - - - - - - - - - +
  `;

  console.log(WELCOME_MESSAGE);

  try {
    const DATA = await read(opt.importFileLocation, opt.format);

    if (!DATA) {
      throw 'DATA read was undefined or otherwise not usable.';
    }

    const WRITE_BACKUP_FILE = opt.backup.writeBackupFile;

    if (WRITE_BACKUP_FILE === true) {
      //
      write(opt.backup.backupFileLocation, DATA, opt.format);
    }

    const NEW_JOBS = await questions();

    if (!NEW_JOBS) {
      throw 'NEW APPLICATION was undefined or otherwise not usable.';
    }

    write(
      opt.exportFileLocation,
      DATA + opt.splitOn + NEW_JOBS,
      opt.format,
    );
  } catch (error) {
    console.log();

    if (opt.devMode === true) console.error(error);
  } finally {
    console.log('Script Done.');
  }
}

main();

