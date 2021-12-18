module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base', 'prettier', 'plugin:storybook/recommended'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
  },
};
