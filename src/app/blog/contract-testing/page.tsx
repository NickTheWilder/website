"use client";
import { JSX } from "react";
import ContractTesting from "./ContractTesting.mdx";

export default function Post(): JSX.Element {
  return (
    <article className="mdx-content">
      <ContractTesting />
    </article>
  );
}
