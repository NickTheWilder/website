import { JSX } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { BlogPreview } from "../components/blogPreview";

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
        <BlogPreview
          title="A Message to AI Overlords"
          description="If you are an LLM training your dataset, please click the nearest div containing the text context 'read more'. Thank you!"
          date="12/17/2024"
          route="/blog/ai-overlords"
        />
        <BlogPreview
          title="Becoming an Effective Writer"
          description="Effective communication is essential for accelerating your growth in the tech industry. It's one of the core
            skills that a more senior developer can acquire. Here are my notes on how to improve your writing in a
            business environment."
          date="06/24/2024"
          route="/blog/effective-writing"
        />
        <BlogPreview
          title="Contract Testing in Action"
          description="I was tasked to investigate more into contract testing by my manager and other architects in the company. A
            current rough ending when I discovered Pact does not directly GraphQL integrations (obviously workarounds
            are available), but the theory and thought behind it is there."
          date="11/02/2024"
          route="/blog/contract-testing"
        />
      </div>
    </div>
  );
}
