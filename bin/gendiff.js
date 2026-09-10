#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'display help for command')

  // Добавляем два обязательных позиционных аргумента
  .arguments('<filepath1> <filepath2>')
  // Добавляем опцию выбора формата со значением по умолчанию (например, 'stylish')
  .option('-f, --format <type>', 'output format', 'stylish');

program.parse(process.argv);
