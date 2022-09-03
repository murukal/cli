// third
import inquirer from 'inquirer'
// project
import {
  PROJECT_TEMPLATE_CHOICE,
  TELEPORT_CHOICE,
  PACKAGE_NAME_INPUT,
  PACKAGE_DESCRIPTION_INPUT
} from '../assets/create.js'

export const create = async () => {
  const createOptions = await inquirer.prompt([
    TELEPORT_CHOICE,
    PROJECT_TEMPLATE_CHOICE,
    PACKAGE_NAME_INPUT,
    PACKAGE_DESCRIPTION_INPUT
  ])
  console.log('createOptions===', createOptions)
}
