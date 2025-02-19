import Link from "next/link";
import { JSX } from "react";
import styles from "./header.module.css";
import Links from "./links";

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <Link className={styles.name} href="/">
                Home
            </Link>
            <Links />
        </header>
    );
}
