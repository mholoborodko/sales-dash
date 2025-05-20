module.exports = {
  ignorePatterns: ['node_modules/', 'out/'],
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
      settings: {
        'import/resolver': {
          typescript: { alwaysTryTypes: true, project: './tsconfig.json' },
        },
      },
      plugins: [
        'prettier',
        '@typescript-eslint',
        'react',
        'react-hooks',
        'import',
        'tailwindcss',
        'unused-imports',
        'jsx-a11y',
      ],
      rules: {
        'prettier/prettier': ['error', { singleQuote: true, semi: true }],
        eqeqeq: 'error',
        'prefer-const': 'error',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'no-console': 'error',
        '@typescript-eslint/no-explicit-any': 'error',

        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
            ],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
        'import/no-unresolved': 'error',
        'import/no-duplicates': 'error',
        'import/first': 'error',

        'react/jsx-sort-props': [
          'error',
          {
            callbacksLast: true,
            shorthandFirst: true,
            ignoreCase: true,
            reservedFirst: true,
          },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-boolean-value': 'error',
        'react/self-closing-comp': 'error',

        'tailwindcss/no-custom-classname': 'off',

        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/anchor-is-valid': 'error',
        'jsx-a11y/no-autofocus': 'warn',
        'jsx-a11y/label-has-associated-control': 'error',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',

        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
  ],
};
