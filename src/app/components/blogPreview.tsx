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
      <div className={styles.blogTitle}>{props.title}</div>
      <div className={styles.blogDescription}>{props.description}</div>
      <div className={styles.blogFooter}>
        <div className={styles.blogDate}>{props.date}</div>
        <Link className={styles.blogLink} href={props.route}>
          Read more
        </Link>
      </div>
    </div>
  );
}
