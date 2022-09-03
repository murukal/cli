// third
import type { InputQuestion, ListQuestion } from 'inquirer'
// project
import type { CreateOptions } from '../typings/create.js'

/**
 * 传送门 选择题
 */
export const TELEPORT_CHOICE: ListQuestion<CreateOptions> = {
  type: 'list',
  message: '传送门',
  name: 'teleport',
  choices: [
    {
      value: 'front-end',
      name: '前端'
    },
    {
      value: 'back-end',
      name: '后端'
    }
  ]
}

/**
 * 前端项目 选择题
 */
export const PROJECT_TEMPLATE_CHOICE: ListQuestion<Pick<CreateOptions, 'teleport'>> = {
  type: 'list',
  name: 'projectTemplate',
  message: '项目模板',
  choices: (answers) => {
    return [
      {
        value: 'react-mui',
        name: 'react + material-ui'
      },
      {
        value: 'react-antd',
        name: 'react + ant-design'
      }
    ]
  }
}

/**
 * package 名称
 */
export const PACKAGE_NAME_INPUT: InputQuestion = {
  type: 'input',
  name: 'packageName',
  message: 'package名称',
  validate: (input: string) => /[(a-z)|/-]+/.test(input)
}

/**
 * package 描述
 */
export const PACKAGE_DESCRIPTION_INPUT = {
  type: 'input',
  name: 'packageDescription',
  message: 'package描述'
}
