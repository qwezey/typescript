# QweZey's TypeScript Configuration

This project provides an opinionated and strict ESLint, Prettier, and TypeScript configuration. It's designed for the Node.js 24 and comes with a simple setup command to get you started quickly.

## Features

- **Strict TypeScript Configuration**: Enforces modern and strict TypeScript rules for better code quality and fewer runtime errors.
- **Prettier Code Formatting**: Includes a Prettier configuration to ensure consistent code style across your project.
- **Comprehensive ESLint Rules**: Comes with a thorough ESLint configuration that integrates with TypeScript and Prettier to catch common issues and enforce best practices.
- **Easy Initialization**: A single command sets up your project with all the necessary configurations and dependencies.

## Getting Started

To set up your TypeScript project with this configuration, run the following command in your terminal:

```bash
npx -y @qwezey/typescript@latest init
```

This command will perform the following actions:

1.  Create a `package.json` file with `"type": "module"`.
2.  Create an `eslint.config.ts` file that extends the shared ESLint configuration.
3.  Create a `prettier.config.ts` file that extends the shared Prettier configuration.
4.  Create a `tsconfig.json` file that extends the shared TypeScript configuration.
5.  Install `@qwezey/typescript` as a dev dependency.
