import React from "react";
import Markdown from "../MarkdownComponent";

const EducationEntry = ({ entry }) => {
    return (
        <div className="py-2">
            <div className="flex justify-between">
                <Markdown source={entry.lineOne} />
                <Markdown className="bg-black text-white right-0" source={entry.date} />
            </div>
            <Markdown source={entry.lineTwo} />
        </div>
    );
};

export default EducationEntry;
