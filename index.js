const opt = require('./config.js');
const read = require('./scipts/get-data.js');
const write = require('./scipts/export-data.js');
const questions = require('./scipts/questions.js');
const menuOptions = require('./scipts/questions-menu.js');
const csvToObj = require('./scipts/csv-to-obj.js');
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

  const OPTION_SELECTED = await menuOptions();

  const DATA = await read(opt.importFileLocation, opt.format);

  if (
    opt.devMode === false &&
    opt.backup.writeBackupFile === true
  ) {
    console.info('Backup Started');

    await write(opt.backup.backupFileLocation, DATA, opt.format);
    console.info('Backup Complete');
  }

  const DATA_AS_OBJECT = await csvToObj(DATA);

  if (OPTION_SELECTED === 'add') {
    const DATA_NEW = await questions();

    await write(
      opt.exportFileLocation,
      DATA + opt.splitOn + DATA_NEW,
      opt.format,
    );
  } else if (OPTION_SELECTED === 'list') {
    const FILTERED = filterObj(DATA_AS_OBJECT.data);

    console.table(FILTERED);
  } else if (OPTION_SELECTED === 'update') {
    //
    //
    //
  } else {
    console.error('Invalid Option');
    return;
  }

  console.log('Script Complete.');
}

main();

