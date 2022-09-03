var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// third
import inquirer from 'inquirer';
// project
import { PROJECT_TEMPLATE_CHOICE, TELEPORT_CHOICE, PACKAGE_NAME_INPUT } from '../assets/create.js';
export const create = () => __awaiter(void 0, void 0, void 0, function* () {
    const createOptions = yield inquirer.prompt([TELEPORT_CHOICE, PROJECT_TEMPLATE_CHOICE, PACKAGE_NAME_INPUT]);
    console.log('createOptions===', createOptions);
});
