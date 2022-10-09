import React from "react";
import Markdown from "../MarkdownComponent";

const EducationEntry = ({ entry }) => {
  return (
    <div className="grid grid-cols-7 gap-x-4 py-2">
      <div className="col-span-1">
        <Markdown className="bg-black text-white right-0" source={entry.date} />
      </div>
      <div className="col-span-6">
        <Markdown source={entry.lineOne} />
        <Markdown source={entry.lineTwo} />
      </div>
    </div>
  );
};

export default EducationEntry;
