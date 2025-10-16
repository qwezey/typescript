import type {Config} from 'prettier';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import {defineConfig} from 'eslint/config';

export const qwezeyEslintConfig = defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {languageOptions: {parserOptions: {projectService: true}}},
  {
    rules: {
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
