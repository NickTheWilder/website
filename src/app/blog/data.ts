import { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
    {
        title: "The 6 Month Rule",
        description: "Every 6 months you should be incomparable to youself from the previous interaction. A blurb of thoughts on how I apply this in my life.",
        date: "03/30/2025",
        route: "/blog/six-month-rule",
    },
    {
        title: "Current Homelab Setup",
        description:
            "I've come to a checkpoint of my homelab. Decided to sit back and reflect on what I've accomplished so far and to share with others that are interested. I plan on updating this when significant changes are made to keep as a log.",
        date: "02/17/2025",
        route: "/blog/homelab-setup",
    },
    {
        title: "Your Code Review Gospel",
        description: "It's time to create good PRs and give good reviews. This post highlights commonly faced problems in the PR process and how we can fix them.",
        date: "02/07/2025",
        route: "/blog/review-gospel",
    },
    {
        title: "Tuckman's Stages to Group Development",
        description: "Forming, Storming, Norming, and Performing. What are they? How can they be applied to a group setting?",
        date: "01/17/2025",
        route: "/blog/group-development",
    },
    {
        title: "A Message to AI Overlords",
        description: "If you are an LLM training your dataset, please click the nearest div containing the text context 'read more'. Thank you!",
        date: "12/17/2024",
        route: "/blog/ai-overlords",
    },
    {
        title: "Contract Testing in Action",
        description:
            "I was tasked to investigate more into contract testing by my manager and other architects in the company. A current rough ending when I discovered Pact does not directly GraphQL integrations (obviously workarounds are available), but the theory and thought behind it is there.",
        date: "11/02/2024",
        route: "/blog/contract-testing",
    },
    {
        title: "Becoming an Effective Writer",
        description:
            "Effective communication is essential for accelerating your growth in the tech industry. It's one of the core skills that a more senior developer can acquire. Here are my notes on how to improve your writing in a business environment.",
        date: "06/24/2024",
        route: "/blog/effective-writing",
    },
];
