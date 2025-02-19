"use client";
import { JSX } from "react";
import HomelabSetup from "./HomelabSetup.mdx";
import BlogContainer from "@/components/blogContainer";

export default function Post(): JSX.Element {
    return (
        <BlogContainer>
            <HomelabSetup />
        </BlogContainer>
    );
}
