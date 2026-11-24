import eslint from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import {defineConfig} from 'eslint/config';
import tseslint from 'typescript-eslint';

export const qwezeyEslintConfig = defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {languageOptions: {parserOptions: {projectService: true}}},
  {
    linterOptions: {noInlineConfig: true},
    rules: {
      'no-warning-comments': ['warn', {terms: ['todo'], location: 'start'}],
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/consistent-type-assertions': [
        'warn',
        {assertionStyle: 'never'},
      ],
    },
  },
  eslintPluginPrettier,
);
