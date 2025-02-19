"use client";
import { JSX } from "react";
import ReviewGospel from "./ReviewGospel.mdx";
import BlogContainer from "@/components/blogContainer";

export default function Post(): JSX.Element {
    return (
        <BlogContainer>
            <ReviewGospel />
        </BlogContainer>
    );
}
