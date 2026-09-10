#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js'; // Импортируем нашу функцию по относительному пути

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  // Передаем аргументы во внутреннюю логику
  .action((filepath1, filepath2) => {
    genDiff(filepath1, filepath2);
  });

program.parse(process.argv);
