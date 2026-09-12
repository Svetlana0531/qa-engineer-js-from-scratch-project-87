import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const buildAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const parseFile = (filepath) => {
  const absolutePath = buildAbsolutePath(filepath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  const extension = path.extname(filepath);

  if (extension === '.json') {
    return JSON.parse(fileContent);
  }

  throw new Error(`Unsupported file format: ${extension}`);
};

const genDiff = (filePath1, filePath2) => {
  const data1 = parseFile(filePath1);
  const data2 = parseFile(filePath2);

  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = _.union(keys1, keys2);

  const sortedKeys = _.sortBy(allKeys);

  const lines = sortedKeys.map((key) => {
    if (_.has(data1, key) && !_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }

    if (!_.has(data1, key) && _.has(data2, key)) {
      return `  + ${key}: ${data2[key]}`;
    }

    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }

    return `    ${key}: ${data1[key]}`;
  });

  return `{\n${lines.join('\n')}\n}`;
};

export default genDiff;
