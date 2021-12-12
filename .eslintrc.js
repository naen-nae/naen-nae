module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base', 'prettier', 'plugin:storybook/recommended'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
