// eslint-disable-next-line
module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsdoc'],
  ignorePatterns: ['**/dist/**'],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'prefer-const': 'off',
    'prefer-rest-params': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'indent': ['error', 2],
    '@typescript-eslint/indent': ['error', 2],
    'jsdoc/check-indentation': 2
  },
};