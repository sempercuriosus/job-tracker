const questions = require('./scipts/questions.js');
const get = require('./scipts/get-data.js');
const write = require('./scipts/export-data.js');
const opt = require('./config.js');

async function main() {
  const WELCOME_MESSAGE = `Welcome to the app`;
  console.log(WELCOME_MESSAGE);

  const DATA = await get();

  const NEW_APPLICATION = await questions();

  write(DATA + opt.splitOn + NEW_APPLICATION);
}

main();

