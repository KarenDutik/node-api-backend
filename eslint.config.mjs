import pluginJs from "@eslint/js";
import globals from "globals";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "nodejs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
