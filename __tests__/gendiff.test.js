import { test, expect } from 'vitest'
import path from 'path'
import { fileURLToPath } from 'url'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename =>
  path.join(__dirname, '..', '__fixtures__', filename)

const expectedStylish = [
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

const expectedPlain = [
  'Property \'arrow\' was added with value: \'up\'',
  'Property \'follow\' was removed',
  'Property \'proxy\' was removed',
  'Property \'timeout\' was updated. From 50 to 20',
  'Property \'verbose\' was added with value: true',
].join('\n')

test('flat json diff (stylish)', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  expect(genDiff(file1, file2, 'stylish')).toEqual(expectedStylish)
})

test('flat yaml diff (stylish)', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')
  expect(genDiff(file1, file2, 'stylish')).toEqual(expectedStylish)
})

test('flat json diff (plain)', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  expect(genDiff(file1, file2, 'plain')).toEqual(expectedPlain)
})

test('flat yaml diff (plain)', () => {
  const file1 = getFixturePath('file1.yml')
  const file2 = getFixturePath('file2.yml')
  expect(genDiff(file1, file2, 'plain')).toEqual(expectedPlain)
})

test('should throw error for unsupported file formats', () => {
  const txtFile1 = getFixturePath('file1.txt')
  const txtFile2 = getFixturePath('file2.txt')
  expect(() => genDiff(txtFile1, txtFile2)).toThrow(
    'Unsupported file format: .txt',
  )
})

test('should throw error for unknown output formatter', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  expect(() => genDiff(file1, file2, 'unknown-format')).toThrow(
    'Unknown format: unknown-format',
  )
})
