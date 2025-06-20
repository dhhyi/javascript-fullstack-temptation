import js from "@eslint/js";
import globals from "globals";
import ts from "typescript-eslint";

export default ts.config(ts.configs.base, {
  files: ["**/*.{js,mjs,cjs}"],
  languageOptions: {
    globals: globals.browser,
    parserOptions: {
      project: "./tsconfig.json",
    },
  },
  plugins: { js },
  rules: {
    eqeqeq: "error",
    "no-implicit-coercion": "error",
    "prefer-template": "error",
    "no-use-before-define": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-useless-concat": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
  },
});
