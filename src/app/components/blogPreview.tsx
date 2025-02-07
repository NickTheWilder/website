import Link from "next/link";
import { JSX } from "react";
import styles from "./blogPreview.module.css";

interface BlogProps {
  title: string;
  description: string;
  date: string;
  route: string;
}

export function BlogPreview(props: BlogProps): JSX.Element {
  return (
    <div className={styles.blogContainer}>
      <h3 className={styles.blogTitle}>{props.title}</h3>
      <p className={styles.blogDescription}>{props.description}</p>
      <div className={styles.blogFooter}>
        <time className={styles.blogDate}>{props.date}</time>
        <Link className={styles.blogLink} href={props.route}>
          Read more
        </Link>
      </div>
    </div>
  );
}
