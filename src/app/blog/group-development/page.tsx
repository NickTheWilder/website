"use client";
import { JSX } from "react";
import GroupDevelopment from "./GroupDevelopment.mdx";

export default function Post(): JSX.Element {
  return (
    <article className="mdx-content">
      <GroupDevelopment />
    </article>
  );
}
