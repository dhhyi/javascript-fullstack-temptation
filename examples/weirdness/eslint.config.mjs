import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    plugins: { js, "@typescript-eslint": ts },
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
  },
]);
