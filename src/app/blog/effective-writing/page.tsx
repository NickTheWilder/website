"use client";
import { JSX } from "react";
import EffectiveWriting from "@/markdown/EffectiveWriting.mdx";

export default function Post(): JSX.Element {
  return (
    <article className="mdx-content">
      <EffectiveWriting />
    </article>
  );
}
