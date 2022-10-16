import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// Interface to specify optional className
interface MarkdownProps {
    source: string;
    className?: string;
}

const Markdown = ({ source, className }: MarkdownProps) => {
    className = className ? className : "";
    return (
        <div className={className}>
            <ReactMarkdown
                remarkPlugins={[gfm]}
        /* rehypePlugins={[rehypeRaw]} */ children={source}
            />
        </div>
    );
};

export default Markdown;
