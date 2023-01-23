import * as React from "react";
import { HeadFC, withPrefix, Link } from "gatsby";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "../styles/global.css";
import ContactGrid from "../components/ContactGridComponent";
import TextOnBg from "../components/TextOnBgComponent";
import ExperienceEtnry from "../components/CVEntryComponent/ExperienceEntryComponent";
import EducationEntry from "../components/CVEntryComponent/EducationEntryComponent";
import { names } from "../data/personal";
import { subheading } from "../data/misc";
import {
    education,
    experiences,
    achievableNoteworthy,
} from "../data/cvEntries";

const IndexPage = () => {
    return (
        <main>
            <div className="flex flex-row justify-between pb-6">
                <div className="shrink-0">
                    <div className="grid grid-rows-2 gap-1">
                        {Object.values(names).map((name) => {
                            return (
                                <div className="flex">
                                    <TextOnBg addClass="text-3xl font-extrabold px-3">
                                        {name}
                                    </TextOnBg>
                                </div>
                            );
                        })}
                    </div>
                    {subheading.code ? (
                        <code>{subheading.text}</code>
                    ) : (
                        <span>{subheading.text}</span>
                    )}
                </div>
                <ContactGrid />
            </div>
            <div className="pb-6">
                <TextOnBg addClass="font-extrabold capitalize px-2 text-xl">
                    {Object.keys({ education })}
                </TextOnBg>
                {Object.values(education).map((entry) => {
                    return <EducationEntry entry={entry} />;
                })}
            </div>
            <div className="pb-6">
                <TextOnBg addClass="font-extrabold capitalize px-2 text-xl">
                    {Object.keys({ experiences })}
                </TextOnBg>
                {Object.values(experiences).map((entry) => {
                    return <ExperienceEtnry entry={entry} />;
                })}
            </div>
            <div>
                <TextOnBg addClass="font-extrabold capitalize px-2 text-xl">
                    <span>Relevant & notable</span>
                </TextOnBg>
                <ul>
                    {Object.keys(achievableNoteworthy).map((entry) => {
                        return (
                            <li>
                                <ReactMarkdown remarkPlugins={[gfm]}>
                                    {entry + ": " + achievableNoteworthy[entry].body}
                                </ReactMarkdown>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
};

export default IndexPage;

/* Page metadata */
export const Head: HeadFC = () => {
    return (
        <>
            <title>Kamal Sacranie | Résumé</title>
            {/* Cannot for the life of me figure out how to use this script form a local file */}
            <script
                src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"
                type="text/javascript"
            ></script>
        </>
    );
};
