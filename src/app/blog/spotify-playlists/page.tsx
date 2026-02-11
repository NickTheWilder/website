"use client";
import type { JSX } from "react";
import Content from "./SpotifyPlaylists.mdx";
import BlogContainer from "@/components/blogContainer";

export default function Post(): JSX.Element {
    return (
        <BlogContainer>
            <Content />
        </BlogContainer>
    );
}
