import type { JSX } from "react";
import Header from "@/components/header";
import styles from "./page.module.css";

type Book = {
    title: string;
    author?: string;
    url?: string;
    isbn?: string;
};

type BooksByYear = {
    year: number | string;
    books: Book[];
};

const booksByYear: BooksByYear[] = [
    {
        year: 2026,
        books: [
            { title: "How to Win Friends & Influence People", author: "Dale Carnegie" },
            {
                title: "Could, Should, Might, Don't: How We Think About The Future",
                author: "Nick Foster",
                isbn: "978-0374619350",
            },

            {
                title: "The Art of Doing Science and Engineering: Learning to Learn",
                author: "Richard W. Hamming",
            },
        ],
    },
    {
        year: 2025,
        books: [
            { title: "Slow Productivity", author: "Cal Newport", isbn: "978-0593544853" },
            { title: "Learning Patterns", author: "Lydia Hallie, Addy Osmani" },
            { title: "The Pragmatic Programmer", author: "David Thomas & Andrew Hunt" },
            { title: "Say No by Default", author: "37signals", url: "https://37signals.com/podcast/say-no-by-default/" },
            { title: "The Art of Leadership", author: "Michael Lopp" },
            { title: "The Software Developer's Career Handbook", author: "Michael Lopp" },
            { title: "The Art of Peace", author: "Morihei Ueshiba" },
            { title: "Deep Work", author: "Cal Newport", isbn: "978-0349413686" },
            { title: "Dante's Inferno", author: "Dante Alighieri" },
        ],
    },
    {
        year: "and beyond",
        books: [
            { title: "Philosophy, Social Theory, and The Thought of George Herbet Mead", author: " Mitchell Aboulafia" },
            { title: "Building a Storybrand", author: "Donald Miller" },
            { title: "simplicity: sustainable, humane, and effective software development ", author: "Dave Thomas", isbn: "979-8888651544" },
            { title: "Contract Testing in Action", author: "Marie Crus and Lewis Prescott", url: "/blog/contract-testing" },
            { title: "No Hello", author: "notjosh", url: "https://nohello.net/en/" },
            { title: "Limitless", author: "Jim Kwik" },
            { title: "Upstream", author: "Dan Heath" },
        ],
    },
];

export default function Books(): JSX.Element {
    return (
        <div style={{ display: "block" }}>
            <Header />
            <main className={styles.container}>
                <h1 className={styles.title}>books, good reads, interesting articles</h1>
                {booksByYear.map(({ year, books }) => (
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
