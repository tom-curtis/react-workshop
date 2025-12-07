import { defineConfig, globalIgnores } from 'eslint/config'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import unusedImports from 'eslint-plugin-unused-imports'
import importPlugin from 'eslint-plugin-import'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import prettierConfig from './prettier.config.js'

export default defineConfig([
    globalIgnores([
        '.now/*',
        '**/*.css',
        '**/.changeset',
        '**/dist',
        'esm/*',
        'public/*',
        'tests/*',
        'scripts/*',
        '**/*.config.js',
        '**/.DS_Store',
        '**/node_modules',
        '**/coverage',
        '**/build',
        '!**/.commitlintrc.cjs',
        '!**/.lintstagedrc.cjs',
        '!**/jest.config.js',
        '!**/plopfile.js',
        '!**/react-shim.js',
        '!**/tsup.config.ts',
    ]),

    {
        files: ['**/*.{ts,tsx,js,jsx}'],

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: ['./tsconfig.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },

        plugins: {
            react,
            'react-hooks': reactHooks,
            'unused-imports': unusedImports,
            import: importPlugin,
            '@typescript-eslint': typescriptEslint,
            'jsx-a11y': jsxA11Y,
            prettier: prettierPlugin,
        },

        settings: {
            react: { version: 'detect' },
            'import/resolver': {
                node: {
                    paths: [path.resolve(import.meta.dirname, 'src')],
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
                },
                typescript: {
                    project: './tsconfig.json',
                },
            },
        },

        rules: {
            ...prettierPlugin.configs.recommended.rules,

            'prettier/prettier': ['error', prettierConfig],

            'no-console': 'warn',
            'no-debugger': 'error',
            'no-alert': 'error',
            eqeqeq: ['error', 'always'],
            curly: ['error', 'all'],
            'prefer-const': 'warn',
            'object-shorthand': 'warn',
            'arrow-body-style': ['warn', 'as-needed'],
            'no-multi-spaces': 'warn',

            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    js: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never',
                },
            ],
            'import/order': [
                'warn',
                {
                    groups: [
                        'type',
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    pathGroups: [{ pattern: '~/**', group: 'external', position: 'after' }],
                    'newlines-between': 'always',
                },
            ],
            'import/no-unresolved': 'error',
            'import/no-duplicates': 'error',
            'import/newline-after-import': 'warn',
            'import/no-cycle': 'warn',

            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/self-closing-comp': 'warn',
            'react/jsx-sort-props': [
                'warn',
                {
                    callbacksLast: true,
                    shorthandFirst: true,
                    noSortAlphabetically: false,
                    reservedFirst: true,
                },
            ],
            'react/jsx-no-duplicate-props': 'error',
            'react/jsx-no-useless-fragment': 'warn',
            'react/no-danger': 'warn',

            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { args: 'after-used', argsIgnorePattern: '^_', ignoreRestSiblings: true },
            ],
            '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-floating-promises': 'error',

            'jsx-a11y/click-events-have-key-events': 'warn',
            'jsx-a11y/interactive-supports-focus': 'warn',

            'unused-imports/no-unused-imports': 'warn',
        },
    },
])
