"use client";
import { JSX } from "react";
import Omarchy from "./Omarchy.mdx";
import BlogContainer from "@/components/blogContainer";

export default function Post(): JSX.Element {
    return (
        <BlogContainer>
            <Omarchy />
        </BlogContainer>
    );
}
