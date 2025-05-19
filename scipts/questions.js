const { input, select } = require('@inquirer/prompts');
const { v4: uuidv4 } = require('uuid');

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

// QUESTIONS
async function questions() {
  let returnString = '';
  let endLoop = false;

  while (endLoop === false) {
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

    details.salary = await input({
      name: 'salary',
      message: 'Salary',
    });

    details.jobPosting = await input({
      name: 'jobPosting',
      message: 'Job Posting',
    });

    details.date = await input({
      name: 'date',
      message: 'Application Date',
    });

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

    // details.notes = await input({
    //   message: 'Notes',
    // });

    details.id = uuidv4();

    returnString = formatReturnString(details);

    console.log(
      '-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -',
    );
    console.log(returnString);
    console.log(
      '-  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -',
    );

    endLoop = await select({
      message: 'Correct Data?',
      choices: [
        {
          name: 'Yes',
          value: true,
        },
        {
          name: 'No',
          value: false,
          default: false,
        },
      ],
    });
  }

  return returnString;
}

function formatReturnString(object) {
  let returnString = '';
  let newApplication = Object.keys(object);

  newApplication.forEach((element) => {
    let e = object[element].includes(',')
      ? `"${object[element]}"`
      : object[element];

    returnString += e.trim() + ',';
  });

  return returnString;
}

module.exports = questions;

