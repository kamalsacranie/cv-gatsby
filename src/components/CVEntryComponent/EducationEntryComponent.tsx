import React from "react";
import Markdown from "../MarkdownComponent";

const EducationEntry = ({ entry }) => {
    return (
        <div className="py-2">
            <div className="flex justify-between">
                <Markdown
                    className="underline decoration-dotted"
                    source={entry.lineOne}
                />
                <Markdown source={entry.date} />
            </div>
            <Markdown source={entry.lineTwo} />
        </div>
    );
};

export default EducationEntry;
