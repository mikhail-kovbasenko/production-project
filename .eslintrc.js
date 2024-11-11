module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  rules: {
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
    }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'linebreak-style': 0,
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['warn', {
      devDependencies: true,
    }],
    'react/function-component-definition': 'off',
    'i18next/no-literal-string': ['warn', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to'],
    }],
    'max-len': ['warn', {
      ignoreComments: true,
      code: 100,
    }],
    'react/destructuring-assignment': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-fragments': 'off',
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
  },
  globals: {
    IS_DEV: true,
    React: true,
    __API__: true,
  },
  overrides: [{
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off',
    },
  }],
};
