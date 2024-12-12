import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // TODO: ??? why no worky
    // wrapper: ({ children }) => <article className="mdx-content">{children}</article>,
    ...components,
  };
}
