/**
 * 传送门 选择题
 */
export const TELEPORT_CHOICE = {
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
};
/**
 * 前端项目 选择题
 */
export const PROJECT_TEMPLATE_CHOICE = {
    type: 'list',
    name: 'projectTemplate',
    message: '项目模板',
    choices: (answers) => {
        console.log(answers);
        return [
            {
                value: 'react-mui',
                name: 'react + material-ui'
            },
            {
                value: 'react-antd',
                name: 'react + ant-design'
            }
        ];
    }
};
/**
 * package 名称
 */
export const PACKAGE_NAME_INPUT = {
    type: 'input',
    name: 'packageName',
    message: '包名',
    suffix: '仅含小写字母和-',
    validate: (input) => /[(a-z)|/-]+/.test(input)
};
