import { blogPosts } from "../blog/data";

export function expertHref(href: string): string {
    if (href.startsWith("#")) return href;
    const url = new URL(href, "https://nickthewilder.com");
    if (url.origin !== "https://nickthewilder.com") return href;

    const path = url.pathname.replace(/\/$/, "") || "/";
    if (path === "/") return "/expert";
    if (path === "/blog") return "/expert#blog";
    if (path === "/books") return "/expert#books";
    if (blogPosts.some((post) => post.route === path)) return "/expert" + path + url.search + url.hash;
    return href;
}
