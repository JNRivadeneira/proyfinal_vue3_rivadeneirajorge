import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    languageOptions: { 
      globals: globals.browser
    },
    files: ["src/**/*.js"],
    ignores: ["**/*.config.js", "!**/eslint.config.js"],
    rules: {
      semi: "error"
    } 
  },
];
