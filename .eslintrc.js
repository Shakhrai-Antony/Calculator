module.exports = {
  env: {
    browser: true,
    es2021: true,
    cypress: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    react: {
      version: 'detect',
    },
  },
};
