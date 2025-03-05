import { JSX } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { BlogPreview } from "../components/blogPreview";
import { blogPosts, quotes } from "./data";
import Header from "@/components/header";

export default function Blog(): JSX.Element {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div style={{ display: "block" }}>
            <Header />
            <div className={styles.intro}>
                <h1 className={styles.introTitle}>Blog</h1>
                <p>
                    Blog will contain notes from books, courses, and maybe occasional random thoughts. Most of the notes will come from my Obsidian vault served here as a backup using{" "}
                    <Link className={styles.link} href="https://mdxjs.com/">
                        https://mdxjs.com/
                    </Link>{" "}
                    with minimal extra formatting.
                </p>
                <br />
                <p>Notes will be added as I think they are relevant and polished enough to publish.</p>
                <h2 className={styles.introTitle}>Recent Posts</h2>
                <div className={styles.blogGrid}>
                    {blogPosts.map((post) => (
                        <BlogPreview key={post.route} title={post.title} description={post.description} date={post.date} route={post.route} />
                    ))}
                    <div className={styles.quoteContainer}>
                        <div className={styles.quote}>{randomQuote.quote}</div>
                        <div className={styles.author}>{randomQuote.author}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
