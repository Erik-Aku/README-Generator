const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//Questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Write a description of your project.",
  },

  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },

  {
    type: "input",
    name: "usage",
    message: "What is this project used for?",
  },

  {
    type: "list",
    name: "license",
    message: "Choose a license for this project:",
    choices: [
      "Apache",
      "GNU GPLv3.0",
      "MIT",
      "BSD 2-Clause",
      "BSD 3 -Clause",
      "Boost Software License 1.0",
      "Creative Commons Zerov1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero GPLv2.0",
      "GNU Lesser GPLv2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },

  {
    type: "input",
    name: "contributing",
    message: "How can users contribute to your project?",
  },

  {
    type: "input",
    name: "tests",
    message: "Are there any tests for this project? If so, what are the instructions to run them?",
  },

  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },

  {
    type: "input",
    name: "email",
    message: "Please enter your email address",
  }

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
    err ? console.log(err) : console.log('Successfully created README!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>
    writeToFile("./final/README.md", data)
    );
}

// Function call to initialize app
init();
