import { JSX } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { BlogPreview } from "../components/blogPreview";
import { blogPosts } from "./data";

export default function Blog(): JSX.Element {
  return (
    <div className={styles.intro}>
      <h1 className={styles.introTitle}>Blog</h1>
      <div>
        Blog will contain notes from books, courses, and maybe occasional random thoughts. Most of the notes will come
        from my Obsidian vault served here as a backup using <Link href="https://mdxjs.com/">https://mdxjs.com/</Link>{" "}
        with minimal extra formatting.
      </div>
      <br />
      <div>Notes will be added as I think they are relevant and polished enough to publish.</div>
      <h2 className={styles.introTitle}>Recent Posts</h2>
      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <BlogPreview
            key={post.route}
            title={post.title}
            description={post.description}
            date={post.date}
            route={post.route}
          />
        ))}
      </div>
    </div>
  );
}
