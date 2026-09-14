import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import parse from './parsers.js'
import formatStylish from './formatters/stylish.js'

const buildAbsolutePath = filepath => path.resolve(process.cwd(), filepath)

const readFile = filepath => {
  const absolutePath = buildAbsolutePath(filepath)
  return fs.readFileSync(absolutePath, 'utf-8')
}

const buildDiff = (data1, data2) => {
  const keys1 = Object.keys(data1)
  const keys2 = Object.keys(data2)
  const allKeys = _.sortBy(_.union(keys1, keys2))

  return allKeys.map(key => {
    if (_.has(data1, key) && !_.has(data2, key)) {
      return { key, type: 'deleted', value: data1[key] }
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return { key, type: 'added', value: data2[key] }
    }
    if (data1[key] !== data2[key]) {
      return { key, type: 'changed', value1: data1[key], value2: data2[key] }
    }
    return { key, type: 'unchanged', value: data1[key] }
  })
}

const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const fileContent1 = readFile(filePath1)
  const fileContent2 = readFile(filePath2)

  const data1 = parse(fileContent1, path.extname(filePath1))
  const data2 = parse(fileContent2, path.extname(filePath2))

  const diff = buildDiff(data1, data2)

  if (formatName === 'stylish') {
    return formatStylish(diff)
  }

  throw new Error(`Unknown format: ${formatName}`)
}

export default genDiff
