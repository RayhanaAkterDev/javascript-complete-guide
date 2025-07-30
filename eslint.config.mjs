// eslint.config.mjs

import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: { js },
    rules: {
      ...js.configs.recommended.rules,

      // ✅ Disabled rules for learning clarity
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-constant-condition': 'off',
      'no-redeclare': 'off',
      'use-isnan': 'off',
      'no-constant-binary-expression': 'off',

      // ✅ Enforce 4 spaces per indentation level
      indent: ['error', 4],
    },
  },
]);
