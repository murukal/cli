"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const create = () => {
    inquirer_1.default
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
        }
        else {
            // Something else went wrong
        }
    });
};
exports.create = create;
