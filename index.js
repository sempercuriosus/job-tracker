const questions = require('./scipts/questions.js');
const get = require('./scipts/get-data.js');
const write = require('./scipts/export-data.js');
const opt = require('./config.js');

async function main() {
  const WELCOME_MESSAGE = `
+ ------------------------------------------------------------------------------------- +
|       _       _          _                _ _           _   _                         |
|      | | ___ | |__      / \\   _ __  _ __ | (_) ___ __ _| |_(_) ___  _ __              |
|   _  | |/ _ \\| '_ \\    / _ \\ | '_ \\| '_ \\| | |/ __/ _\` | __| |/ _ \\| '_ \\             |
|  | |_| | (_) | |_) |  / ___ \\| |_) | |_) | | | (_| (_| | |_| | (_) | | | |            |
|   \\___/ \\___/|_.__/  /_/   \\_\\ .__/| .__/|_|_|\\___\\__,_|\\__|_|\\___/|_| |_|            |
|                              |_|   |_|                                                |
|   _   _      _                                                                        |
|  | | | | ___| |_ __   ___ _ _                                                         |
|  | |_| |/ _ \\ | '_ \\ / _ \\ '__|                                                       |
|  |  _  |  __/ | |_) |  __/ |                                                          |
|  |_| |_|\\___|_| .__/ \\___|_|                                                          |
|               |_|                                                                     |
+ ------------------------------------------------------------------------------------- +
`;
  console.log(WELCOME_MESSAGE);

  const DATA = await get();

  const NEW_APPLICATION = await questions();

  write(DATA + opt.splitOn + NEW_APPLICATION);
}

main();

