import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        URL: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
      },
    },
    rules: {
      indent: ["error", 2, { SwitchCase: 1 }],
      // turn off linebreak-style to avoid LF/CRLF issues on Windows environments
      "linebreak-style": "off",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-console": "off",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "error",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleQuote: false,
          semi: true,
          tabWidth: 2,
        },
      ],
    },
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { prettier: prettierPlugin },
  },
];
