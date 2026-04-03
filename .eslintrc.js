// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "import"],
  ignorePatterns: ["/dist/*"],
  env: {
    jest: true,
  },
  rules: {
    // --- Prettier formatting ---
    "prettier/prettier": "error",

    // --- Import sorting ---
    "sort-imports": [
      "error",
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          ["external", "builtin"],
          "internal",
          ["sibling", "parent"],
          "index",
        ],
        pathGroups: [
          {
            pattern: "@(react|next)",
            group: "external",
            position: "before",
          },
          {
            pattern: "@src/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal", "react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],

    // --- Best practices & readability ---
    curly: "error",
    eqeqeq: ["error", "always"],
    "consistent-return": "error",
    "no-else-return": "warn",
    "no-multi-spaces": "error",
    "no-unneeded-ternary": "error",
    "array-callback-return": "error",

    // --- Variables ---
    "prefer-const": "error",
    "no-var": "error",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-shadow": "error",

    // --- Functions & async ---
    "require-await": "error",
    "no-return-await": "error",
    "default-param-last": "error",

    // --- Strings ---
    "prefer-template": "error",
    quotes: ["error", "single", { avoidEscape: true }],
    "no-useless-concat": "error",

    // --- Numbers & operators ---
    "no-plusplus": "warn",
    "no-implicit-coercion": "warn",

    // --- Debugging & safety ---
    "no-debugger": "error",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-alert": "warn",
    "no-throw-literal": "error",
  },
};
