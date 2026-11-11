export type ContentType = "book" | "article" | "podcast";

export type LibraryItem = {
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

export const booksByYear: LibraryItemsByYear[] = [
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
