const { select } = require('@inquirer/prompts');

async function MenuQuestions() {
  //
  return await select({
    message: 'Select Menu Option',
    choices: [
      {
        name: 'Add Application',
        value: 'add',
      },
      {
        name: 'List Previous Applications',
        value: 'list',
      },
      {
        name: 'Update Previous Applications',
        value: 'update',
      },
      {
        name: 'Exit',
        value: 'exit-script',
      },
    ],
  });
}

module.exports = MenuQuestions;

