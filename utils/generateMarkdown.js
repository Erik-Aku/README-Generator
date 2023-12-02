// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//Generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.title}
  
  ${data.renderLicenseBadge}

  ## Description

  ${data.description}

  ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  This application is covered under the ${data.license} license

  ## Contributing 

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions
  
  - GitHub Username: ${data.username}

  - You can contact me at: ${data.email}

`;
}

module.exports = generateMarkdown;
