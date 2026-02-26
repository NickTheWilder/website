"use client";
import type { JSX } from "react";
import BlogContainer from "@/components/blogContainer";
import Content from "./content.mdx";

export default function Post(): JSX.Element {
    return (
        <BlogContainer>
            <Content />
        </BlogContainer>
    );
}
