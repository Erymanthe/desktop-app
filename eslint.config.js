import pluginVue from "eslint-plugin-vue";
import eslintPluginSecurity from "eslint-plugin-security";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginN from "eslint-plugin-n";

export default [
  ...pluginVue.configs["flat/recommended"],
  eslintPluginPrettier,
  eslintPluginN,
  eslintPluginSecurity,
  {
    files: ["*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/html-indent": ["error", 2],
      "vue/max-attributes-per-line": ["error", {
        "singleline": 3,
        "multiline": {
          "max": 1,
          "allowFirstLine": false,
        },
      }],
    },
  },
];
