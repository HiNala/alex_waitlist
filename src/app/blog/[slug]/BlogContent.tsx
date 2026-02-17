"use client";
import ReactMarkdown from "react-markdown";

export default function BlogContent({ content }: { content: string }) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
