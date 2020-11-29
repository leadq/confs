module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    hwindow: true,
    document: true,
    window: true,
    hepsiBus: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prefer-stateless-function': ['off'],
    'react/:no-array-index-key': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/destructuring-assignment': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'class-methods-use-this': ['off'],
    'no-useless-constructor': ['off'],
    'import/no-unresolved': ['off'],
    'comma-dangle': ['off'],
    'import/first': ['off'],
    'react/jsx-indent': [2, 2, { checkAttributes: false }],
    'max-len': ['error', { code: 160, tabWidth: 2, ignoreComments: true }],
    'arrow-parens': ['off'],
    'no-else-return': [1, { allowElseIf: true }],
    'react/no-array-index-key': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-no-target-blank': ['off'],
    semi: ['off']
  }
}
