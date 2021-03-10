module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "react-app",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "@typescript-eslint/require-await": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            vars: "all",
            args: "all",
            ignoreRestSiblings: false,
            argsIgnorePattern: "^_",
            caughtErrors: "all",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/no-use-before-define": [
          "error",
          { functions: false, classes: true, variables: false, typedefs: true },
        ],
        "@typescript-eslint/no-useless-constructor": "warn",
        "@typescript-eslint/unbound-method": 0,
        "@typescript-eslint/strict-boolean-expressions": [
          "error",
          {
            allowString: false,
            allowNumber: false,
            allowNullableObject: false,
          },
        ],
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/prefer-nullish-coalescing": [
          "error",
          {
            ignoreConditionalTests: false,
            ignoreMixedLogicalExpressions: false,
          },
        ],
        "@typescript-eslint/no-unsafe-assignment": 0,
      },
    },
    {
      files: ["**/*.stories.ts", "**/*.stories.tsx"],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-unsafe-member-access": 0,
        "import/no-anonymous-default-export": 0,
      },
    },
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
