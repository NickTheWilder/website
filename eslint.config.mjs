import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import tsParser from "@typescript-eslint/parser";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
  includeIgnoreFile(gitignorePath),
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      react,
      "jsx-a11y": jsxA11Y,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    ignores: ["eslint.config.mjs", "./pages/_document.js"],

    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      "jsx-a11y/anchor-is-valid": "error",
    },
  },
];
