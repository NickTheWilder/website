import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

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
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
});

export default withMDX(nextConfig);
