#!/usr/bin/env node
import { Command } from 'commander'

const program = new Command()

program.command('init').action(() => {})

program.parse()
