import React from "react";
import Markdown from "../MarkdownComponent";
import TextOnBg from "../TextOnBgComponent";

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
        <TextOnBg addClass="flex px-2">
          <Markdown
            className="bg-black text-white right-0"
            source={entry.brief.title}
          />
        </TextOnBg>
        <Markdown source={entry.brief.date} />
        <Markdown source={entry.brief.description} />
      </div>
      <div className="col-span-5">
        <Markdown source={entry.main.body} />
        <Markdown source={entry.main.place} />
        <Markdown source={entry.main.skills} />
      </div>
    </div>
  );
};

export default ExperienceEtnry;
