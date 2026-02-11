export interface BlogPost {
    title: string;
    description?: string;
    date: string;
    route: string;
    tags: Tags[];
}

export const Tags = {
    BUSINESS: "Business",
    PROGRAMMING: "Programming",
    PSYCHOLOGY: "Psychology",
    TECHNOLOGY: "Technology",
    PERSONAL: "Personal",
} as const;

export type Tags = (typeof Tags)[keyof typeof Tags];

export interface Quote {
    quote: string;
    author: string;
}
