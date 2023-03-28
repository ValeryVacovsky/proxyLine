module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    semi: 0,
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'ignore' }],
    'react-hooks/exhaustive-deps': 'warn',
    'eol-last': 1,
    'no-catch-shadow': 0,
    'no-unused-vars': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0],
  },
}
