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
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'eslint-plugin-html',
    'ulbi-tv-plugin',
    'unused-imports',
    'eslint-plugin-import',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-use-before-define': 'off',
    'react/jsx-indent': [2, 2],
    'unused-imports/no-unused-imports': 'error',
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
      ignoreAttribute: [
        'as',
        'data-testid',
        'to',
        'target',
        'justify',
        'align',
        'direction',
        'gap',
        'role',
        'border',
      ],
    }],
    'max-len': ['warn', {
      ignoreComments: true,
      code: 150,
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
    'implicit-arrow-linebreak': 'warn',
    'ulbi-tv-plugin/path-checker': ['error', { alias: '@' }],
    'ulbi-tv-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: ['**/*.test.*', '**/*.storeis.*', '**/StoreDecorator.tsx'],
      }],
    'ulbi-tv-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
  },
  globals: {
    IS_DEV: true,
    React: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [{
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off',
    },
  }],
};
