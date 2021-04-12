// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Utils/GenerateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the description?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Input installation requirements',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Input usage details',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'test',
  },
  {
    type: 'list',
    message: 'What kind of license does your project require?',
    name: 'license',
    choices: ['GPL', 'APACHE', 'MIT', 'BSD'],
  },
  {
  type: 'input',
  message: 'contact information for users to ask questions',
  name: 'contact',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) =>
      writeToFile("generatedReadMe.md", response)
    );
}

// Function call to initialize app
init();