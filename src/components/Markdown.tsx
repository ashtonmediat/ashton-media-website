import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: false });

/** Renders trusted, first-party Markdown (site content only). */
export function Markdown({ source, className }: { source: string; className?: string }) {
  const html = marked.parse(source, { async: false }) as string;
  return <div className={className ?? "prose-ashton"} dangerouslySetInnerHTML={{ __html: html }} />;
}
