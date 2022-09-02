#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const create_1 = require("./libs/create");
const program = new commander_1.Command();
program.command('create').action(() => (0, create_1.create)());
program.parse();
