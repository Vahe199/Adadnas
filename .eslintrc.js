module.exports = {
  root: true,
  plugins: ['react', 'react-hooks'],
  extends: ['@react-native-community'],
  settings: {
    react: { version: '16' },
    'import/core-modules': [
      '@react-navigation/core',
      '@react-navigation/native',
      '@react-navigation/routers',
      '@react-navigation/compat',
      '@react-navigation/stack',
      '@react-navigation/drawer',
      '@react-navigation/bottom-tabs',
      '@react-navigation/material-top-tabs',
      '@react-navigation/material-bottom-tabs',
    ],
  },

  env: { browser: true, node: true },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 0,
    'react-native/no-inline-styles': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    curly: ['error', 'multi-line', 'consistent'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
  },
};
