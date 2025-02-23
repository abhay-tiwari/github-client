import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import parser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser,
      globals: {
        ...globals.browser,
        ...globals.node,
        test: "readonly",
        expect: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  prettier,
];
