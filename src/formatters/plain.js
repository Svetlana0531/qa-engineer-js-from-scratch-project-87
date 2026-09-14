const stringify = value => {
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return String(value)
}

const formatPlain = diff => {
  const lines = diff
    .filter(node => node.type !== 'unchanged')
    .map(node => {
      const { key, type, value, value1, value2 } = node

      if (type === 'added') {
        return `Property '${key}' was added with value: ${stringify(value)}`
      }
      if (type === 'deleted') {
        return `Property '${key}' was removed`
      }
      return `Property '${key}' was updated. From ${stringify(value1)} to ${stringify(value2)}`
    })

  return lines.join('\n')
}

export default formatPlain
