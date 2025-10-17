#!/usr/bin/env node

import {exec} from '@actions/exec';
import {program} from 'commander';
import {writeFile} from 'fs/promises';

const packageJson = `{
  "type": "module"
}
`;

const eslintConfig = `import {qwezeyEslintConfig} from '@qwezey/typescript/eslint';

export default qwezeyEslintConfig;
`;

const prettierConfig = `import {qwezeyPrettierConfig} from '@qwezey/typescript/prettier';

export default qwezeyPrettierConfig;
`;

const typescriptConfig = `{"extends": "@qwezey/typescript"}
`;

program
  .command('init')
  .description(
    "Initialize a new project with QweZey's TypeScript configuration",
  )
  .action(async () => {
    await writeFile('package.json', packageJson, 'utf-8');
    await writeFile('eslint.config.ts', eslintConfig, 'utf-8');
    await writeFile('prettier.config.ts', prettierConfig, 'utf-8');
    await writeFile('tsconfig.json', typescriptConfig, 'utf-8');
    await exec('npm i -D @qwezey/typescript');
  });

await program.parseAsync();
