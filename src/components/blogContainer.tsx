import { JSX, ReactNode } from "react";
import Header from "./header";
import "../markdown-styles/github-dark.css";

interface BlogProps {
  children: ReactNode;
}

export default function BlogContainer(props: BlogProps): JSX.Element {
  return (
    <div style={{ display: "block" }}>
      <div style={{ width: "100%", display: "block", marginTop: "15px" }}>
        <Header />
      </div>
      <article className="mdx-content">{props.children}</article>
    </div>
  );
}
