"use client";
import type { JSX } from "react";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { BlogPreview } from "../components/blogPreview";
import { blogPosts, quotes } from "./data";
import Header from "@/components/header";
import { TagsList } from "../components/tagsList";
import type { Quote, Tags } from "./types";

export default function Blog(): JSX.Element {
    const [quote, setQuote] = useState<Quote | null>(null);

    useEffect(() => {
        // Random quote selected client-side to avoid hydration mismatch
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);

    const [activeTag, setActiveTag] = useState<Tags | null>(null);

    const filteredPosts = activeTag ? blogPosts.filter((post) => post.tags.includes(activeTag)) : blogPosts;

    const handleTagClick = (tag: Tags) => {
        setActiveTag(activeTag === tag ? null : tag);
    };

    return (
        <div style={{ display: "block" }}>
            <Header />
            <div className={styles.intro}>
                <h1 className={styles.title}>Blog</h1>
                <p>
                    Blog will contain notes from books, courses, and maybe occasional random thoughts. Most of the notes will come from my Obsidian vault served here as a backup using{" "}
                    <Link className={styles.link} href="https://mdxjs.com/">
                        https://mdxjs.com/
                    </Link>{" "}
                    with minimal extra formatting.
                </p>
                <br />
                <p>Notes will be added as I think they are relevant and polished enough to publish.</p>
                <div className={styles.blogContainer}>
                    <div className={styles.blogGrid}>
                        <h2 className={styles.title}>Recent Posts</h2>
                        {filteredPosts.map((post) => (
                            <BlogPreview key={post.route} title={post.title} description={post.description} date={post.date} route={post.route} />
                        ))}
                    </div>
                    <div className={styles.sidebar}>
                        <div className={styles.tags}>
                            <h2 className={styles.title}>Filter By Tags</h2>
                            <TagsList activeTag={activeTag} onTagClick={handleTagClick} />
                        </div>
                        <div className={styles.quotes}>
                            {quote !== null && (
                                <>
                                    <i className={styles.quote}>{quote?.quote}</i>
                                    <div className={styles.author}> - {quote?.author}</div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
