"use client";
import { JSX } from "react";
import ContractTesting from "./ContractTesting.mdx";
import "../../../styles/github-dark.css";

export default function Post(): JSX.Element {
  return (
    <article className="mdx-content">
      <ContractTesting />
    </article>
  );
}
