import inquirer from 'inquirer'

export const create = () => {
  inquirer
    .prompt([
      {
        message: '1'
      }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    })
}
