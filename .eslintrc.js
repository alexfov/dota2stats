module.exports = {
  root: true,
  extends: ["eslint:recommended", "react-app", 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', "react", 'react-hooks', 'prettier'],
  rules: {
    "prettier/prettier": "error",
    'no-unused-vars': [1, { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    curly: 0,
    'no-bitwise': 0,
    'no-shadow': ['warn', { allow: ['done', 'resolve', 'cb'] }],
  },
};
