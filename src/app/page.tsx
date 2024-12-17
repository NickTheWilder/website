import { JSX } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>Nick Wilder</div>
      <div className={styles.howdy}>Howdy! 🤠</div>
      <div className={styles.content}>
        I&apos;m Nick, software engineer by day, tinkering by night. Currently a software engineer working with&nbsp;
        <span className={styles.lang}>React</span> and <span className={styles.lang}>C#</span>, with a bit of experience
        in many other tech stacks and frameworks.
      </div>
      <div className={styles.content}>
        Always learning something new and trying out new technologies I find interesting.
      </div>
      <div className={styles.footer}>
        <div className={styles.links}>
          <div className={styles.linkTitle}>Links</div>
          <Link className={styles.link} href="/blog">
            <span className={styles.blo}>Blo</span>
            <span className={styles.g}>g</span>
          </Link>
          <Link className={`${styles.link} ${styles.github}`} href="https://github.com/NickTheWilder">
            GitHub
          </Link>
          <Link className={styles.link} href="https://open.spotify.com/user/12166567543?si=5bf12dc3c6394190">
            <span className={styles.s}>S</span>p<span className={styles.otif}>otif</span>
            <span className={styles.y}>y</span>
          </Link>
          <Link className={`${styles.link} ${styles.linkedIn}`} href="https://www.linkedin.com/in/nick-wilder/">
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
