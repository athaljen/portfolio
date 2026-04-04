import js from '@eslint/js'
import next from 'eslint-config-next'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'

const config = [
  {
    ignores: ['dist/*', 'node_modules/*'],
  },
  js.configs.recommended,
  ...next,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },

    languageOptions: {
      globals: {
        jest: true,
      },
    },

    rules: {
      // --- Prettier formatting ---
      'prettier/prettier': ['error', { singleQuote: true, semi: false }],

      // --- Import sorting ---
      'sort-imports': [
        'error',
        { ignoreCase: true, ignoreDeclarationSort: true },
      ],
      'import/order': [
        'error',
        {
          groups: [
            ['external', 'builtin'],
            'internal',
            ['sibling', 'parent'],
            'index',
          ],
          pathGroups: [
            {
              pattern: '@(react|next)',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@src/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['internal', 'react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // --- Best practices & readability ---
      curly: 'error',
      eqeqeq: ['error', 'always'],
      'consistent-return': 'error',
      'no-else-return': 'warn',
      'no-multi-spaces': 'error',
      'no-unneeded-ternary': 'error',
      'array-callback-return': 'error',

      // --- Variables ---
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-shadow': 'error',

      // --- Functions & async ---
      'require-await': 'error',
      'no-return-await': 'error',
      'default-param-last': 'error',

      // --- Strings ---
      'prefer-template': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-useless-concat': 'error',

      // --- Numbers & operators ---
      'no-plusplus': 'warn',
      'no-implicit-coercion': 'warn',

      // --- Debugging & safety ---
      'no-debugger': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-alert': 'warn',
      'no-throw-literal': 'error',
    },
  },
]

export default config
