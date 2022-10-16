import React from "react";
import Markdown from "../MarkdownComponent";

interface ExperienceEntryProps {
    entry: {
        brief: {
            title: string;
            date: string;
            description: string;
        };
        main: {
            body: string;
            place: string;
            skills: string;
        };
    };
}

// Can make this better by generating the number of divs present in the data to create columns
/* ${Object.values(entry).length} */
const ExperienceEtnry = ({ entry }: ExperienceEntryProps) => {
    return (
        <div className="grid grid-cols-7 gap-x-4 py-2">
            <div className="col-span-2">
                <Markdown
                    className="underline decoration-dotted"
                    source={entry.brief.title}
                />
                <Markdown source={entry.brief.description} />
            </div>
            <div className="col-span-5">
                <div className="flex place-content-end justify-items-end">
                    <Markdown source={entry.brief.date} />
                </div>
                <Markdown source={entry.main.body} />
                <Markdown source={entry.main.place} />
                <div className="flex">
                    <code className="inline">Skills:&nbsp;</code>
                    <Markdown className="inline" source={entry.main.skills} />
                </div>
            </div>
        </div>
    );
};

export default ExperienceEtnry;
