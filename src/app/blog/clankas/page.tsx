"use client";
import type { JSX } from "react";
import AIOverlords from "./AIOverlords.mdx";
import BlogContainer from "@/components/blogContainer";

export default function Post(): JSX.Element {
    return (
        <BlogContainer>
            <AIOverlords />
        </BlogContainer>
    );
}
