import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  webpack: (config) => {
    config.snapshot = {
      ...(config.snapshot || {}),
      managedPaths: [/^(.+?[**\\**/]node_modules[**\\**/])(?!@img[**\\**/])/],
    };
    return config;
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // Netlify
  images: {
    domains: ["https://nickthewilder.online"],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
    jsx: true,
  },
});

export default withMDX(nextConfig);
