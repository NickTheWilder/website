import type { Metadata } from "next";
import { blogPosts } from "./data";

const DEFAULT_DESCRIPTION = "A blog post by Nick Wilder.";

function asPlainText(value: string): string {
    return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export function createBlogMetadata(route: string): Metadata {
    const post = blogPosts.find((candidate) => candidate.route === route);

    if (!post) {
        throw new Error(`No blog post metadata found for ${route}`);
    }

    const description = post.description ? asPlainText(post.description) : DEFAULT_DESCRIPTION;
    const imageSearchParams = new URLSearchParams({ title: post.title });

    if (post.description) {
        imageSearchParams.set("subtitle", asPlainText(post.description));
    }

    const imageUrl = `/api/og?${imageSearchParams.toString()}`;
    const [month, day, year] = post.date.split("/");
    const publishedTime = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day))).toISOString();

    return {
        title: post.title,
        description,
        alternates: {
            canonical: post.route,
        },
        openGraph: {
            type: "article",
            url: post.route,
            siteName: "Nick Wilder",
            title: post.title,
            description,
            publishedTime,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${post.title} — ${description}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description,
            images: [imageUrl],
        },
    };
}
