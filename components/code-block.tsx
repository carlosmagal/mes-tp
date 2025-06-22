"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  node: any;
  inline: boolean;
  className: string;
  children: any;
}

export function CodeBlock({
  node,
  inline,
  className,
  children,
  ...props
}: CodeBlockProps) {
  // Extract language from className (format: "language-javascript")
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "text";

  if (language !== "text") {
    return (
      <div className="not-prose flex flex-col">
        <SyntaxHighlighter
          style={oneDark}
          language={language}
          PreTag="div"
          className="text-sm max-w-2xl overflow-x-auto border border-zinc-200 dark:border-zinc-700 rounded-xl"
          customStyle={{
            margin: 0,
            padding: "1rem",
            backgroundColor: "transparent",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
          codeTagProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    );
  } else {
    return (
      <code
        className={`${className} text-sm bg-zinc-100 dark:bg-zinc-800 py-0.5 px-1 rounded-md`}
        {...props}
      >
        {children}
      </code>
    );
  }
}
