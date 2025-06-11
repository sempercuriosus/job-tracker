const { input, select } = require('@inquirer/prompts');
const { v4: uuidv4 } = require('uuid');
const getTheDate = require('./date.js');

const CURRENT_DATE = getTheDate();

const DETAILS_TEMPLATE = {
  Company: '',
  Role: '',
  Salary: 0,
  JobPosting: '',
  Date: '',
  ContactName: '',
  ContactPhone: '',
  ContactEmail: '',
  Id: '',
};

// QUESTIONS
async function questions() {
  try {
    let newData = [];
    let addAnotherOne = true;

    while (addAnotherOne === true) {
      let infoCorrect = false;

      while (infoCorrect === false) {
        console.log('');
        console.log('');
        console.log('Enter The Company Information:');
        console.log('------------------------------');

        const company = await input({
          name: 'company',
          message: 'Company Name',
        });

        const role = await select({
          message: 'Role',
          choices: [
            {
              name: 'Full-Stack Dev',
              value: 'Full-Stack Developer',
            },
            {
              name: 'Backend Dev',
              value: 'Backend Developer',
            },
            {
              name: 'Frontend Dev',
              value: 'Frontend Developer',
            },
            {
              name: 'Dev',
              value: 'Developer',
            },
          ],
        });

        const salary = await input({
          name: 'jobPosting',
          message: 'Job Posting',
        });

        salary.replaceAll(',', '');

        const jobPosting = await input({
          name: 'salary',
          message: 'Salary',
        });

        const date = CURRENT_DATE;

        const contactName = await input({
          name: 'contactName',
          message: 'Contact Full Name',
        });

        const contactPhone = await input({
          name: 'contactPhone',
          message: 'Contact Phone',
        });

        const contactEmail = await input({
          name: 'contactEmail',
          message: 'Contact Email',
        });

        const id = uuidv4();

        const NEW_DATA = {
          ...DETAILS_TEMPLATE,
          company,
          role,
          salary,
          jobPosting,
          date,
          contactName,
          contactPhone,
          contactEmail,
          id,
        };

        if (!newData) {
          throw 'New job information was missing';
        }

        console.log('-  -  -  -  -  -  -  -  -  -');
        console.log(NEW_DATA);
        console.log('-  -  -  -  -  -  -  -  -  -');

        infoCorrect = await select({
          message: 'Correct Data?',
          choices: [
            {
              name: 'Yes',
              value: true,
            },
            {
              name: 'No',
              value: false,
            },
          ],
        });

        if (infoCorrect === true) {
          newData.push(NEW_DATA);
        }
      }

      addAnotherOne = await select({
        name: 'additionalRecords',
        message: 'Add Another Application?',
        choices: [
          {
            name: 'Yes',
            value: true,
          },
          {
            name: 'No',
            value: false,
          },
        ],
      });
    }

    return newData;
  } catch (error) {
    console.error(error);
  }
}

module.exports = questions;

