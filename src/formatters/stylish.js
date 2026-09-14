const formatStylish = diff => {
  const lines = diff.map(node => {
    const { key, type, value, value1, value2 } = node

    if (type === 'deleted') {
      return `  - ${key}: ${value}`
    }
    if (type === 'added') {
      return `  + ${key}: ${value}`
    }
    if (type === 'changed') {
      return `  - ${key}: ${value1}\n  + ${key}: ${value2}`
    }
    // unchanged
    return `    ${key}: ${value}`
  })

  return `{\n${lines.join('\n')}\n}`
}

export default formatStylish
