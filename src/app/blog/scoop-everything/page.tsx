"use client";
import { JSX } from "react";
import BlogContainer from "@/components/blogContainer";
import ScoopEverything from "./ScoopEverything.mdx";

export default function Post(): JSX.Element {
    return (
        <BlogContainer>
            <ScoopEverything />
        </BlogContainer>
    );
}
