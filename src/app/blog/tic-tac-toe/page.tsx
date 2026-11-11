"use client";
import type { JSX } from "react";
import Content from "./content.mdx";
import BlogContainer from "@/components/blogContainer";
import TicTacToe from "./TicTacToe";

export default function Post(): JSX.Element {
    return (
        <BlogContainer>
            <Content components={{ TicTacToe }} />
        </BlogContainer>
    );
}
