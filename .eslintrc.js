module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  rules: {
    semi: 0,
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'ignore' }],
    'react-hooks/exhaustive-deps': 'warn',
    'eol-last': 1,
    'no-catch-shadow': 0,
    'no-unused-vars': 'error',
  },
}
