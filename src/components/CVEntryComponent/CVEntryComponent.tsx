import React from "react";
import Markdown from "../MarkdownComponent";

// Can make this better by generating the number of divs present in the data to create columns
/* ${Object.values(entry).length} */
const CVEntry = ({ entry }) => {
    return (
        <div className="grid grid-cols-7 py-2">
            <div className="col-span-2">
                <Markdown source={entry.brief.date} />
                <Markdown source={entry.brief.description} />
            </div>
            <div className="col-span-5">
                {/* {Object.values(entry.main).map((value) => { */}
                {/*     return <Markdown source={value} />; */}
                {/* })} */}
                <div className="flex flex-row place-content-end">
                    <Markdown
                        className="bg-black text-white right-0"
                        source={entry.main.title}
                    />
                </div>
                <Markdown source={entry.main.body} />
                <Markdown source={entry.main.place} />
                <Markdown source={entry.main.skills} />
            </div>
        </div>
    );
};

export default CVEntry;
