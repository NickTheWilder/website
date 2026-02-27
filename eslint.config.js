import nextConfig from "eslint-config-next";
import { defineConfig } from "eslint/config";

export default defineConfig([
    ...nextConfig,
    {
        ignores: ["eslint.config.mjs", "pages/_document.js"],
    },
]);
