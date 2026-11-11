import { blogPosts } from "../blog/data";
import { booksByYear } from "../books/data";
import { profileLinks } from "../../components/profileLinks";
import { escapeHtml } from "./html";
import { expertHref } from "./links";

export const dynamic = "force-static";

function linkItem(title: string, href: string): string {
    return `<li><a href="${escapeHtml(href)}">${escapeHtml(title)}</a></li>`;
}

export function GET(): Response {
    return new Response(
        `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Index of / — Nick Wilder</title>
</head>
<body>
<h1>Index of /</h1>
<hr>
<ul>
${linkItem("../ (easy mode)", "/")}
${linkItem("blog/", "#blog")}
${linkItem("books/", "#books")}
</ul>
<h2 id="blog">blog/</h2>
<ul>
${blogPosts.map((post) => linkItem(post.title, expertHref(post.route))).join("\n")}
</ul>
<h2>links/</h2>
<ul>
${Object.entries(profileLinks)
    .map(([title, href]) => linkItem(title, href))
    .join("\n")}
</ul>
<h2 id="books">books, articles, podcasts/</h2>
<ul>
${booksByYear.flatMap(({ books }) => books.map((book) => (book.url ? linkItem(book.title, expertHref(book.url)) : `<li>${escapeHtml(book.title)}</li>`))).join("\n")}
</ul>
<hr>
</body>
</html>`,
        { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
}
