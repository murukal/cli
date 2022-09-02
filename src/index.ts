#!/usr/bin/env node
import { Command } from 'commander'
import { create } from './libs/create'

const program = new Command()

program.command('init').action(() => {
  create()
})

program.parse()
