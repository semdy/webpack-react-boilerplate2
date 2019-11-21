module.exports = {
  parser: 'babel-eslint',
  extends: ['react-app', 'airbnb', 'prettier', 'plugin:compat/recommended'],
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {},
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/jsx-wrap-multilines': 0,
    'react/state-in-constructor': 0,
    'react/no-array-index-key': 0,
    'react/require-default-props': 0,
    'react/prefer-stateless-function': 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'react/static-property-placement': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': [2, { ignore: ['^@/', '^umi/'] }],
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: ['**/tests/**.js', '/mock/**.js', '**/**.test.js'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'compat/compat': 0,
    'linebreak-style': 0,
    'consistent-return': 0,
    'no-shadow': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'no-nested-ternary': 0,
    'no-use-before-define': 0,
    'global-require': 0,
    'prefer-spread': 0,
    'prefer-object-spread': 0,
    'comma-dangle': [2, 'never'],
    'quotes': [1, 'single'],
    'semi': [2, 'never']
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url'],
  },
}
