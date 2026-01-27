import nextConfig from "eslint-config-next";

export default [
    ...nextConfig,
    {
        ignores: ["eslint.config.mjs", "pages/_document.js"],
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        rules: {
            "@typescript-eslint/no-unused-vars": "error",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/consistent-type-imports": "warn",
        },
    },
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        rules: {
            "react/self-closing-comp": "warn",
            "react/hook-use-state": "warn",
        },
    },
];
