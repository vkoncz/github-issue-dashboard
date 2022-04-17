// @ts-check

/**@type {import('prettier').Options} */
const prettierConfig = {
  endOfLine: 'lf',
  arrowParens: 'avoid',
  trailingComma: 'all',
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
};

/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  extends: ['universe/web', 'react-app', 'react-app/jest', 'plugin:react/jsx-runtime'],
  rules: {
    'prettier/prettier': ['warn', prettierConfig],
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
  },
};

module.exports = eslintConfig;
