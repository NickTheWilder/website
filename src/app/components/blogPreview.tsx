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
        <div className={styles.postContainer}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
            <time className={styles.date}>{props.date}</time>
            <Link className={styles.link} href={props.route}>
                Read more
            </Link>
        </div>
    );
}
