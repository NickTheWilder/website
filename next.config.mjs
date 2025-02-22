import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: ["nickthewilder.online"], // note: removed https:// as domains should be without protocol
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
