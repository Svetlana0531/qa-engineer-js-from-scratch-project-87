import fs from 'fs';
import path from 'path';

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

  console.log('Data 1:', data1);
  console.log('Data 2:', data2);

  return '';
};

export default genDiff;
