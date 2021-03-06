module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'import/extensions': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@utils', './src/utils'],
          ['@views', './src/views'],
          ['@assets', './src/assets'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx', '.json'],
      },
    },
  },
};
