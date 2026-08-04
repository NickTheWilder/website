"use client";

import type { JSX } from "react";
import { useState } from "react";
import Header from "@/components/header";
import styles from "./page.module.css";

type ContentType = "book" | "article" | "podcast";

type LibraryItem = {
    title: string;
    author?: string;
    url?: string;
    isbn?: string;
    contentType?: ContentType;
};

type LibraryItemsByYear = {
    year: number | string;
    books: LibraryItem[];
};

const contentTypeFilters: { type: ContentType; label: string }[] = [
    { type: "book", label: "Books" },
    { type: "article", label: "Articles" },
    { type: "podcast", label: "Podcasts" },
];

const booksByYear: LibraryItemsByYear[] = [
    {
        year: 2026,
        books: [
            { title: "DHH: How to Build a Profitable Company Without Losing Control", author: "David Senra", url: "https://youtu.be/76rR68ktQvo?is=ZDNyiNOmu3N0uz3e", contentType: "podcast" },
            { title: "Dark Age", author: "Pierce Brown", url: "https://www.goodreads.com/book/show/29226553-dark-age" },
            { title: "Iron Gold", author: "Pierce Brown", url: "https://www.goodreads.com/book/show/33257757-iron-gold" },
            { title: "Theology and Sanity", author: "Frank Sheed", isbn: "978-0898704709", url: "https://www.goodreads.com/book/show/666640.Theology_and_Sanity" },
            { title: "Digital Minimalism", author: "Cal Newport", isbn: "978-0525536512", url: "https://www.goodreads.com/book/show/40672036-digital-minimalism" },
            { title: "Hello, Production!", author: "Brett Rowberry", url: "https://brettrowberry.com/hello-production", contentType: "article" },
            { title: "Morning Star", author: "Pierce Brown", url: "https://www.goodreads.com/book/show/18966806-morning-star", isbn: "978-0345539847" },
            { title: "The Grug Brained Developer", url: "https://grugbrain.dev/", contentType: "article" },
            { title: "Golden Son", author: "Pierce Brown", url: "https://www.goodreads.com/book/show/18966819-golden-son", isbn: "978-0345539823" },
            { title: "I was laid off by Atlassian", author: "Vasilios Syrakis", url: "https://www.youtube.com/watch?v=55pTFVoclvE", contentType: "podcast" },
            { title: "Red Rising", author: "Pierce Brown", url: "https://www.goodreads.com/book/show/15839976-red-rising", isbn: "978-0345539786" },
            { title: "How to Win Friends & Influence People", author: "Dale Carnegie", url: "https://www.goodreads.com/book/show/4865.How_to_Win_Friends_Influence_People" },
            { title: "Magnifica Humanitas", author: "Pope Leo XIV", url: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html" },
            {
                title: "Could, Should, Might, Don't: How We Think About The Future",
                author: "Nick Foster",
                isbn: "978-0374619350",
                url: "https://www.goodreads.com/book/show/217387801-could-should-might-don-t",
            },
            { title: "How IT Managers Fail Software Projects", author: "Robert N. Charette", url: "https://spectrum.ieee.org/it-management-software-failures", contentType: "article" },

            {
                title: "The Art of Doing Science and Engineering: Learning to Learn",
                author: "Richard W. Hamming",
            },
            { title: "A.I. Should Elevate Your Thinking, Not Replace It", author: "Koshy John", url: "https://www.koshyjohn.com/blog/ai-should-elevate-your-thinking-not-replace-it/", contentType: "article" },
        ],
    },
    {
        year: 2025,
        books: [
            { title: "Backing up Spotify", author: "annas archive", url: "https://annas-archive.li/blog/backing-up-spotify.html", contentType: "article" },
            { title: "Slow Productivity", author: "Cal Newport", isbn: "978-0593544853", url: "https://www.goodreads.com/book/show/197773418-slow-productivity" },
            { title: "Learning Patterns", author: "Lydia Hallie, Addy Osmani" },
            { title: "The Pragmatic Programmer", author: "David Thomas & Andrew Hunt" },
            { title: "Say No by Default", author: "37signals", url: "https://37signals.com/podcast/say-no-by-default/", contentType: "podcast" },
            { title: "The Art of Leadership", author: "Michael Lopp", url: "https://www.goodreads.com/book/show/50083106-the-art-of-leadership" },
            { title: "The Software Developer's Career Handbook", author: "Michael Lopp" },
            { title: "The Art of Peace", author: "Morihei Ueshiba" },
            { title: "Deep Work", author: "Cal Newport", isbn: "978-1455586691", url: "https://www.goodreads.com/book/show/25744928-deep-work" },
            { title: "Dante's Inferno", author: "Dante Alighieri" },
            { title: "Tidy First?: A Personal Exercise in Empirical Software Design", author: "Kent Beck", url: "https://www.goodreads.com/book/show/171691901-tidy-first", isbn: "978-1098151249" },
        ],
    },
    {
        year: "and beyond",
        books: [
            { title: "Philosophy, Social Theory, and The Thought of George Herbet Mead", author: " Mitchell Aboulafia" },
            { title: "Building a Storybrand", author: "Donald Miller" },
            { title: "simplicity: sustainable, humane, and effective software development", author: "Dave Thomas", isbn: "979-8888651544", url: "https://www.goodreads.com/book/show/229268652-simplicity" },
            { title: "Contract Testing in Action", author: "Marie Crus and Lewis Prescott", url: "/blog/contract-testing" },
            { title: "No Hello", author: "@notjosh", url: "https://nohello.net/en/", contentType: "article" },
            { title: "Limitless", author: "Jim Kwik" },
            { title: "Upstream", author: "Dan Heath" },
        ],
    },
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
