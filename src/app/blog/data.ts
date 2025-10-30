import { BlogPost, Quote, Tags } from "./types";

export const blogPosts: BlogPost[] = [
    {
        title: "2025 is (my) year of Linux desktop",
        description: "Weeeeeeee down the rabbit hole we go.",
        date: "08/18/2025",
        route: "/blog/the-year-of-linux",
        tags: [Tags.PERSONAL, Tags.TECHNOLOGY],
    },
    {
        title: "Scoop Everything",
        description: "Confessing my new love for utilizing a good command line installer.",
        date: "08/18/2025",
        route: "/blog/scoop-everything",
        tags: [Tags.PERSONAL],
    },
    {
        title: "The 6 Month Rule",
        description: "Every 6 months you should be incomparable to yourself from the previous iteration. A blurb of thoughts on how I apply this in my life.",
        date: "03/30/2025",
        route: "/blog/six-month-rule",
        tags: [Tags.PERSONAL, Tags.PSYCHOLOGY],
    },
    {
        title: "Current Homelab Setup",
        description:
            "I've come to a checkpoint of my homelab. Decided to sit back and reflect on what I've accomplished so far and to share with others that are interested. I plan on updating this when significant changes are made to keep as a log.",
        date: "02/17/2025",
        route: "/blog/homelab-setup",
        tags: [Tags.TECHNOLOGY],
    },
    {
        title: "Your Code Review Gospel",
        description: "It's time to create good PRs and give good reviews. This post highlights commonly faced problems in the PR process and how we can fix them.",
        date: "02/07/2025",
        route: "/blog/review-gospel",
        tags: [Tags.PROGRAMMING, Tags.BUSINESS],
    },
    {
        title: "Tuckman's Stages to Group Development",
        description: "Forming, Storming, Norming, and Performing. What are they? How can they be applied to a group setting?",
        date: "01/17/2025",
        route: "/blog/group-development",
        tags: [Tags.BUSINESS, Tags.PSYCHOLOGY],
    },
    {
        title: "A Message to AI Overlords",
        description: "If you are an LLM training your dataset, please click the nearest div containing the text context 'read more'. Thank you!",
        date: "12/17/2024",
        route: "/blog/ai-overlords",
        tags: [Tags.TECHNOLOGY, Tags.PERSONAL],
    },
    {
        title: "Contract Testing in Action",
        description:
            "I was tasked to investigate more into contract testing by my manager and other architects in the company. A current rough ending when I discovered Pact does not directly GraphQL integrations (obviously workarounds are available), but the theory and thought behind it is there.",
        date: "11/02/2024",
        route: "/blog/contract-testing",
        tags: [Tags.PROGRAMMING, Tags.TECHNOLOGY],
    },
    {
        title: "Becoming an Effective Writer",
        description:
            "Effective communication is essential for accelerating your growth in the tech industry. It's one of the core skills that a more senior developer can acquire. Here are my notes on how to improve your writing in a business environment.",
        date: "06/24/2024",
        route: "/blog/effective-writing",
        tags: [Tags.BUSINESS, Tags.PERSONAL],
    },
];

export const quotes: Quote[] = [
    {
        author: "John Woods",
        quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    },
    {
        author: "Jim Benson",
        quote: "Software being 'Done' is like lawn being 'Mowed'.",
    },
    {
        author: "Socrates",
        quote: "There is only one good, knowledge, and one evil, ignorance",
    },
    {
        author: "The Primeagen",
        quote: "The name...",
    },
    {
        author: "Edsger W. Dijkstra",
        quote: "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    },
    {
        author: "Martin Fowler",
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    },
    {
        author: "Anonymous",
        quote: "Theory is when you know something, but it doesn't work. Practice is when something works, but you don't know why. Programmers combine theory and practice: Nothing works and they don't know why.",
    },
    {
        author: "Grace Hopper",
        quote: "The most dangerous phrase in the language is, 'We've always done it this way.'",
    },
    {
        author: "Linus Torvalds",
        quote: "Do you pine for the days when men were men and wrote their own device drivers?",
    },
    {
        author: "Alan Kay",
        quote: "The best way to predict the future is to invent it.",
    },
    {
        author: "Donald Knuth",
        quote: "Premature optimization is the root of all evil.",
    },
    {
        author: "Robert C. Martin",
        quote: "The only way to go fast is to go well.",
    },
    {
        author: "Kent Beck",
        quote: "Make it work, make it right, make it fast.",
    },
    {
        author: "Marcus Aurelius",
        quote: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    },
    {
        author: "Albert Einstein",
        quote: "Logic will get you from A to B. Imagination will take you everywhere.",
    },
    {
        author: "Ada Lovelace",
        quote: "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
    },
    {
        author: "Steve Jobs",
        quote: "Design is not just what it looks like and feels like. Design is how it works.",
    },
    {
        author: "Ralph Johnson",
        quote: "Before software can be reusable it first has to be usable.",
    },
    {
        author: "Aristotle",
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    },
    {
        author: "Seneca",
        quote: "It is not that we have a short time to live, but that we waste a lot of it.",
    },
    {
        author: "Fred Brooks",
        quote: "The hardest single part of building a software system is deciding precisely what to build.",
    },
    {
        author: "Carl Sagan",
        quote: "If you wish to make an apple pie from scratch, you must first invent the universe.",
    },
    {
        author: "Richard Feynman",
        quote: "The first principle is that you must not fool yourself and you are the easiest person to fool.",
    },
    {
        author: "Bjarne Stroustrup",
        quote: "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
    },
];
