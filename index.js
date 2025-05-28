const questions = require('./scipts/questions.js');
const read = require('./scipts/get-data.js');
const write = require('./scipts/export-data.js');
const csvToObj = require('./scipts/csv-to-obj.js');
const filterObj = require('./scipts/filter-object.js');
const opt = require('./config.js');

async function main() {
  const WELCOME_MESSAGE = `
  + - - - - - - - - - - - - - - - +
  |     Job Application Helper    |
  + - - - - - - - - - - - - - - - +
  `;

  console.log(WELCOME_MESSAGE);

  if (opt.devMode === true) {
    console.log(
      '\n*** DEV MODE is enabled *** File output and backup are DISABLED in this mode. \n',
    );

    const DATA_PREV = await read(
      opt.importFileLocation,
      opt.format,
    );

    const DATA_OBJ = csvToObj(DATA_PREV);

    const FILTERED = filterObj(DATA_OBJ.data);

    console.table(FILTERED, [
      'Company',
      'Role',
      'DateApplied',
      'Id',
    ]);
  } else {
    // DEV MODE OFF
    try {
      const DATA_PREV = await read(
        opt.importFileLocation,
        opt.format,
      );

      if (!DATA_PREV) {
        throw 'DATA_PREV read was undefined or otherwise not usable.';
      }

      if (opt.backup.writeBackupFile === true) {
        write(
          opt.backup.backupFileLocation,
          DATA_PREV,
          opt.format,
        );
      }

      const DATA_NEW = await questions();

      if (!DATA_NEW) {
        throw 'NEW APPLICATION was undefined or otherwise not usable.';
      }

      write(
        opt.exportFileLocation,
        DATA_PREV + opt.splitOn + DATA_NEW,
        opt.format,
      );
    } catch (error) {
      console.error(error);
    } finally {
      console.log('Script Complete.');
    }
  }
}

main();

