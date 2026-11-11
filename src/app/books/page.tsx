"use client";

import type { JSX } from "react";
import { useState } from "react";
import Header from "@/components/header";
import styles from "./page.module.css";
import { booksByYear, type ContentType, type LibraryItem } from "./data";

const contentTypeFilters: { type: ContentType; label: string }[] = [
    { type: "book", label: "Books" },
    { type: "article", label: "Articles" },
    { type: "podcast", label: "Podcasts" },
];

function getContentType(book: LibraryItem): ContentType {
    return book.contentType ?? "book";
}

export default function Books(): JSX.Element {
    const [activeContentType, setActiveContentType] = useState<ContentType | null>(null);

    const filteredBooksByYear = booksByYear
        .map(({ year, books }) => ({
            year,
            books: activeContentType === null ? books : books.filter((book) => getContentType(book) === activeContentType),
        }))
        .filter(({ books }) => books.length > 0);

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.container}>
                <h1 className={styles.title}>books, good articles, interesting podcasts</h1>
                <p className={styles.description}>a collection of books i&apos;ve read, articles and podcasts that i&apos;ve found interesting.</p>
                <aside className={styles.filterGroup}>
                    <h2 className={styles.filterTitle}>filter by tags</h2>
                    <div className={styles.filters} aria-label="Filter by tag">
                        {contentTypeFilters.map(({ type, label }) => (
                            <button
                                key={type}
                                type="button"
                                className={`${styles.filterButton} ${activeContentType === type ? styles.activeFilter : ""}`}
                                aria-pressed={activeContentType === type}
                                onClick={() => setActiveContentType(activeContentType === type ? null : type)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </aside>
                {filteredBooksByYear.map(({ year, books }) => (
                    <section key={year} className={styles.yearSection}>
                        <h2 className={styles.year}>{year}</h2>
                        <ul className={styles.bookList}>
                            {books.map((book) => (
                                <li key={book.title} className={styles.bookItem}>
                                    {book.url ? (
                                        <a href={book.url} className={styles.bookLink} target="_blank" rel="noopener noreferrer">
                                            <i>{book.title}</i>
                                        </a>
                                    ) : (
                                        <span className={styles.bookTitle}>{book.title}</span>
                                    )}
                                    {book.author && <span className={styles.author}> - {book.author}</span>}
                                    {book.isbn && <div className={styles.isbn}>ISBN: {book.isbn}</div>}
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </main>
        </div>
    );
}
