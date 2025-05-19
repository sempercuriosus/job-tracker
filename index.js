const questions = require('./scipts/questions.js');
const get = require('./scipts/get-data.js');
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
    const DATA = await get();

    if (!DATA) {
      throw 'DATA read was undefined or otherwise not usable.';
    }

    const NEW_APPLICATION = await questions();

    if (!NEW_APPLICATION) {
      throw 'NEW APPLICATION was undefined or otherwise not usable.';
    }

    write(DATA + opt.splitOn + NEW_APPLICATION);
  } catch (error) {
    console.log();

    if (opt.devMode === true) console.error(error);
  } finally {
    console.log('Script Done.');
  }
}

main();

