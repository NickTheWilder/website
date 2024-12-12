"use client";
import { JSX } from "react";
import ContractTesting from "@/markdown/ContractTesting.mdx";
import "@/markdown/github-dark.css";

export default function Post(): JSX.Element {
  return (
    <article className="mdx-content">
      <ContractTesting />
    </article>
  );
}
