const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

function renderLicenseBadge(license) {
    if (license === 'Apache') {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === 'GNU GPLv3.0') {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === 'MIT') {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === 'BSD 2-Clause') {
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    } else if (license === 'BSD 3 -Clause') {
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (license === 'Boost Software License 1.0') {
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (license === 'Creative Commons Zerov1.0 Universal') {
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    } else if (license === 'Eclipse Public License 1.0"') {
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    } else if (license === 'Mozilla Public License 2.0') {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }else {
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
  }
  


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
      "Eclipse Public License 1.0",
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
    inquirer.prompt(questions).then((data) => {
    JSON.stringify(data);
    data.renderLicenseBadge = renderLicenseBadge(data.license);
    writeToFile("./final/README.md", data);
    });
}

// Function call to initialize app
init();
