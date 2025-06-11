const opt = require('./config.js');
const read = require('./scipts/get-data.js');
const write = require('./scipts/export-data.js');
const questions = require('./scipts/questions.js');
const menuOptions = require('./scipts/questions-menu.js');
const updateRecord = require('./scipts/questions-update.js');
const filterObj = require('./scipts/filter-object.js');

async function main() {
  const WELCOME_MESSAGE = `
  + - - - - - - - - - - - - - - - +
  |     Job Application Helper    |
  + - - - - - - - - - - - - - - - +
  `;

  const DEV_MESSAGE =
    '\n\n*** DEV MODE is enabled *** File output and backup are DISABLED in this mode. \n';

  opt.devMode === true
    ? console.log(WELCOME_MESSAGE, DEV_MESSAGE)
    : console.log(WELCOME_MESSAGE);

  const DATA = await read(opt.importFileLocation, opt.format);

  if (
    opt.devMode === false &&
    opt.backup.writeBackupFile === true
  ) {
    console.info('Backup Started');

    await write(opt.backup.backupFileLocation, DATA, opt.format);
    console.info('Backup Complete');
  }

  const FILTERED = filterObj(DATA.data);

  let continueRun = true;

  while (continueRun === true) {
    const OPTION_SELECTED = await menuOptions();

    if (OPTION_SELECTED === 'add') {
      const DATA_NEW = await questions();

      if (!DATA_NEW) {
        console.error('NO NEW DATA');

        return;
      }

      DATA.data.push(...DATA_NEW);

      if (opt.devMode === false) {
        await write(opt.exportFileLocation, DATA, opt.format);
      } else {
        console.log(
          'DEV MODE ENABLED',
          'Data is logged to the console: ',
          DATA_NEW,
        );
      }
    } else if (OPTION_SELECTED === 'list') {
      console.table(FILTERED);
    }
    // else if (OPTION_SELECTED === 'update') {
    //   console.table(FILTERED);

    //   const ID = await updateRecord();
    //   console.log(ID);

    //   if (ID) {
    //     const DATA_NEW = await questions();
    //   }
    // }
    else if (OPTION_SELECTED === 'exit-script') {
      continueRun = false;

      return;
    } else {
      console.error('Invalid Option');
      continueRun = false;

      return;
    }
  }

  console.log('Script Complete.');
}

main();

