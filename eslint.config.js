import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

export default defineConfig([
  js.configs.recommended,

  stylistic.configs.recommended,

  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      '@stylistic/indent': ['error', 2],

      '@stylistic/arrow-parens': ['error', 'as-needed'],
    },
  },
])
