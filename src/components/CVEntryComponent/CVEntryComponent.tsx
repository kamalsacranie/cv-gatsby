import React from "react";
import Markdown from "./MarkdownComponent";

// Can make this better by generating the number of divs present in the data to create columns
const CVEntry = ({ entry }) => {
    return (
        <div>
            <div>
                {Object.values(entry.brief).map((value) => {
                    return <Markdown source={value} />;
                })}
            </div>
            <div>
                {Object.values(entry.main).map((value) => {
                    return <Markdown source={value} />;
                })}
            </div>
        </div>
    );
};

export default CVEntry;
