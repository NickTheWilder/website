import { createElement, type ComponentProps } from "react";
import { renderToReadableStream } from "react-dom/server.edge";
import { blogPosts } from "../../../blog/data";
import { escapeHtml } from "../../html";
import { expertHref } from "../../links";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.route.slice("/blog/".length) }));
}

function expertLink({ href, children, ...props }: ComponentProps<"a">) {
    return createElement("a", { ...props, href: href ? expertHref(href) : href }, children);
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }): Promise<Response> {
    const { slug } = await params;
    const post = blogPosts.find((post) => post.route === `/blog/${slug}`);
    if (!post) return new Response("Not found", { status: 404 });

    const { default: Content } = await import(`../../../blog/${slug}/content.mdx`);
    const stream = await renderToReadableStream(
        createElement(Content, {
            components: {
                a: expertLink,
                TicTacToe: () => createElement("a", { href: post.route }, "Play Tic Tac Toe in easy mode"),
            },
        })
    );
    await stream.allReady;
    const article = (await new Response(stream).text()).replace(/ style="[^"]*"/g, "");

    return new Response(
        `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(post.title)} — Nick Wilder</title>
</head>
<body>
<a href="/expert">../</a>
<hr>
<main>${article}</main>
<hr>
<a href="/expert">../</a>
</body>
</html>`,
        { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
}
