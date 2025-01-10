import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

const eslintConfig = [
  ...compat.extends("plugin:@next/next/recommended", "next/core-web-vitals"),
];

export default eslintConfig;
