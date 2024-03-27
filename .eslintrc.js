module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended", // 加上这一行，解决eslint prettier 冲突问题
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // js 详细规则：http://eslint.cn/docs/rules/
    /** @js */
    quotes: [2, "double"], // 强制使用一致的单引号
    semi: [2, "always"], // 强制是否使用分号
    // "no-undef": "error", // 不能有未定义的变量
    "no-var": "error", // 要求使用 let 或 const 而不是 var

    // ts 详细规则：https://typescript-eslint.io/rules/
    /** @typescript */
    // "@typescript-eslint/no-unused-vars": "error", // 定义变量没有使用

    /** @react */
    "react-refresh/only-export-components": "off",
  },
};
