// third
import inquirer from 'inquirer'
import yeoman from 'yeoman-environment'
// project
import { PROJECT_TEMPLATE_CHOICE, TELEPORT_CHOICE } from '../assets/create.js'

export const create = async () => {
  // 选项
  const createOptions = await inquirer.prompt([TELEPORT_CHOICE, PROJECT_TEMPLATE_CHOICE])

  // 创建yeoman运行时
  const env = yeoman.createEnv()
  // 运行时：下载以来
  const isInstalled = await env.installLocalGenerators({
    'generator-fantu': ''
  })

  console.log('isInstalled====', isInstalled)
  console.log('clis ===== ', env.getGeneratorNames())
  console.log('res=====', env.run('fantu'))
  console.log('createOptions===', createOptions)
}
