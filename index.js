//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Utils/GenerateMarkdown")

//Array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the description of the project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the installation requirements?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What are the usage details?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What details does the user need to know about contributing?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What commands should be run to run tests?',
    name: 'test',
  },
  {
    type: 'list',
    message: 'What kind of license does your project require?',
    name: 'license',
    choices: ['GPL','MIT', 'BSD'],
  },
  {
  type: 'input',
  message: 'What is your contact information?',
  name: 'contact',
  }
];

//Write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, generateMarkdown(data))
}

//Initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) =>
      writeToFile("generatedReadMe.md", response)
    );
}

//Call to initialize app
init();