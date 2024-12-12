import { JSX } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Blog(): JSX.Element {
  return (
    <div className={styles.intro}>
      <h1 className={styles.introTitle}>Blog</h1>
      <div>
        Blog will contain notes from books, courses, and maybe occasional random thoughts. Most of the notes will come
        from my Obsidian vault served here as a backup using{" "}
        <Link href="https://markdowntohtml.com/">markdowntohtml.com</Link> with minimal extra formatting.
      </div>
      <br />
      <div>Notes will be added as I think they are relevant and polished enough to publish.</div>
      <h3>Table of Contents</h3>
      <ul>
        <li>
          <Link href="/blog/effective-writing">Becoming an Effective Writer - 06/24/2024</Link>
        </li>
        <li>
          <Link href="/blog/contract-testing">Contract Testing in Action - 11/02/2024</Link>
        </li>
        <li>
          <Link href="#">Powershell Scripting and Toolmaking - Also maybe soon?</Link>
        </li>
      </ul>
    </div>
  );
}
