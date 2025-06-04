const { input, select } = require('@inquirer/prompts');

async function updateRecord() {
  const id = await input({
    name: 'id',
    message: 'Enter in the ID you want to update',
  });

  console.log(`You selected to update ${id}.`);

  const correct = await select({
    message: 'Is that correct',
    choices: [
      {
        name: 'Correct Record',
        value: true,
      },
      {
        name: 'Select Again',
        value: false,
      },
    ],
  });

  return correct === true ? id : '';
}

module.exports = updateRecord;

