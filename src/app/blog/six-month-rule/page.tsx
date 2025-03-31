"use client";
import { JSX } from "react";
import SixMonthRule from "./SixMonthRule.mdx";
import BlogContainer from "@/components/blogContainer";

export default function Post(): JSX.Element {
    return (
        <BlogContainer>
            <SixMonthRule />
        </BlogContainer>
    );
}
