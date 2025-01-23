import { JSX } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Links from "@/components/links";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>Nick Wilder</div>
      <div className={styles.howdy}>Howdy! 🤠</div>
      <div className={styles.content}>
        I&apos;m Nick, software engineer by day, tinkering by night. Currently a
        software engineer working with&nbsp;
        <span className={styles.lang}>React</span> and{" "}
        <span className={styles.lang}>C#</span>, with a bit of experience in
        many other tech stacks and frameworks.
      </div>
      <div className={styles.content}>
        Always learning something new and trying out new technologies I find
        interesting.
      </div>
      <div className={styles.footer}>
        <div className={styles.links}>
          <div className={styles.linkTitle}>Links</div>
          <Links />
        </div>
      </div>
    </div>
  );
}
