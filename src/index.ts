import type {Config} from 'prettier';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import {defineConfig} from 'eslint/config';

export const qwezeyEslintConfig = defineConfig(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {languageOptions: {parserOptions: {projectService: true}}},
  {
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      'no-warning-comments': ['warn', {terms: ['todo'], location: 'start'}],
    },
  },
  eslintPluginPrettier,
);

export const qwezeyPrettierConfig: Config = {
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  objectWrap: 'collapse',
};
