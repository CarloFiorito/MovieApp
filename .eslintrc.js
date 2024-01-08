module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};
