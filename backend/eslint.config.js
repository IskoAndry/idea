import { defineFlatConfig } from 'eslint-define-config'
import tseslint from 'typescript-eslint'

export default defineFlatConfig([
  {
    ignores: ['dist/**']
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
])