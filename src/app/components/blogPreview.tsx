import Link from "next/link";
import type { JSX } from "react";
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
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.description}>{props.description}</p>
            <Link className={styles.link} href={props.route}>
                Read more -&gt;
            </Link>
        </div>
    );
}
