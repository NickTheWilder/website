import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "nickthewilder.com",
            },
        ],
    },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: ["remark-gfm", "remark-breaks"],
        rehypePlugins: ["rehype-highlight"],
    },
});

export default withMDX(nextConfig);
