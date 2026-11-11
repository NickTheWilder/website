import Link from "next/link";
import type { JSX } from "react";
import styles from "./links.module.css";
import { profileLinks } from "./profileLinks";

export default function Links(): JSX.Element {
    return (
        <>
            <Link className={styles.link} href="/blog">
                <span className={styles.blo}>Blo</span>
                <span className={styles.g}>g</span>
            </Link>
            <Link className={`${styles.link} ${styles.github}`} href={profileLinks.GitHub}>
                GitHub
            </Link>
            <Link className={`${styles.link} ${styles.books}`} href="/books">
                Books
            </Link>
            <Link className={styles.link} href={profileLinks.Spotify}>
                <span className={styles.s}>S</span>p<span className={styles.otif}>otif</span>
                <span className={styles.y}>y</span>
            </Link>
            <Link className={`${styles.link} ${styles.linkedIn}`} href={profileLinks.LinkedIn}>
                LinkedIn
            </Link>
        </>
    );
}
