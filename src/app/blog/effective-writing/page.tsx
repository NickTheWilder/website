"use client";
import { JSX } from "react";
import EffectiveWriting from "./EffectiveWriting.mdx";
import BlogContainer from "@/components/blogContainer";

export default function Post(): JSX.Element {
    return (
        <BlogContainer>
            <EffectiveWriting />
        </BlogContainer>
    );
}
