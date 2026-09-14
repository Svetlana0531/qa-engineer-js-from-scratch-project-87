import formatStylish from './stylish.js'
import formatPlain from './plain.js'
import formatJson from './json.js'

const chooseFormatter = (diff, formatName) => {
  if (formatName === 'stylish') {
    return formatStylish(diff)
  }
  if (formatName === 'plain') {
    return formatPlain(diff)
  }
  if (formatName === 'json') {
    return formatJson(diff)
  }
  throw new Error(`Unknown format: ${formatName}`)
}

export default chooseFormatter
