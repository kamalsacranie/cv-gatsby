import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Markdown = ({ source }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[gfm]}
      /* rehypePlugins={[rehypeRaw]} */ children={source}
        />
    );
};

export default Markdown;
