
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
  
  - ${data.renderLicenseBadge}
  - This application is covered under the ${data.license} license.

  ## Contributing 

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions
  
  - GitHub Username: [${data.username}](https://github.com/Erik-Aku)

  - You can contact me at: ${data.email}

`;
}

module.exports = generateMarkdown;
