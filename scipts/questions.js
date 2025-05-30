const { input, select } = require('@inquirer/prompts');
const { v4: uuidv4 } = require('uuid');
const getTheDate = require('./date.js');
const FormatLine = require('./format-line.js');

const CURRENT_DATE = getTheDate();

let details = {
  company: '',
  role: '',
  salary: 0,
  jobPosting: '',
  date: '',
  contactName: '',
  contactPhone: '',
  contactEmail: '',
  id: '',
};

let newJobs = '';

// QUESTIONS
async function questions() {
  let newJob = '';
  let continueLoop = true;

  //outer loop
  while (continueLoop === true) {
    // inner loop
    let infoCorrect = false;

    while (infoCorrect === false) {
      console.log('');
      console.log('');
      console.log('Enter The Company Information:');

      details.company = await input({
        name: 'company',
        message: 'Company Name',
      });

      details.role = await select({
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

      details.jobPosting = await input({
        name: 'jobPosting',
        message: 'Job Posting',
      });

      details.salary = await input({
        name: 'salary',
        message: 'Salary',
      });

      details.salary = details.salary.replaceAll(',', '');

      details.date = CURRENT_DATE;

      const ADD_CONTACT = await select({
        name: '',
        message: 'Include Contact Info?',
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

      if (ADD_CONTACT === true) {
        details.contactName = await input({
          name: 'contactName',
          message: 'Contact Full Name',
        });

        details.contactPhone = await input({
          name: 'contactPhone',
          message: 'Contact Phone',
        });

        details.contactEmail = await input({
          name: 'contactEmail',
          message: 'Contact Email',
        });
      }

      details.id = uuidv4();

      newJob = FormatLine(details);

      console.log('-  -  -  -  -  -  -  -  -  -');
      console.log(details);
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
    }

    newJobs += newJob;

    continueLoop = await select({
      message: 'Add Another Application?',
      choices: [
        {
          name: 'Continue',
          value: true,
        },
        {
          name: 'End',
          value: false,
        },
      ],
    });
  }

  if (!newJobs) {
    throw 'New job information was missing';
  }

  return newJobs;
}

module.exports = questions;

