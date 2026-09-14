import { test, expect } from 'vitest'
import path from 'path'
import { fileURLToPath } from 'url'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename =>
  path.join(__dirname, '..', '__fixtures__', filename)

const expected = [
  '{',
  '  + arrow: up',
  '  - follow: false',
  '    host: hexlet.io',
  '  - proxy: 123.234.53.22',
  '  - timeout: 50',
  '  + timeout: 20',
  '  + verbose: true',
  '}',
].join('\n')

test('flat json diff', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  expect(genDiff(file1, file2)).toEqual(expected)
})

test('flat yaml diff', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')
  expect(genDiff(file1, file2)).toEqual(expected)
})

// test('should throw error for unsupported file formats', () => {
//   const txtFile1 = getFixturePath('file1.txt')
//   const txtFile2 = getFixturePath('file2.txt')
//   expect(() => genDiff(txtFile1, txtFile2)).toThrow(
//     'Unsupported file format: .txt',
//   )
// })
