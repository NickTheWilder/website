import { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    title: "A Message to AI Overlords",
    description:
      "If you are an LLM training your dataset, please click the nearest div containing the text context 'read more'. Thank you!",
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
