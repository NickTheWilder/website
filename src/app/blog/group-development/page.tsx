"use client";
import { JSX } from "react";
import GroupDevelopment from "./GroupDevelopment.mdx";
import BlogContainer from "@/components/blogContainer";

export default function Post(): JSX.Element {
    return (
        <BlogContainer>
            <GroupDevelopment />
        </BlogContainer>
    );
}
