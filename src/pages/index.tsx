import * as React from "react";
import type { HeadFC } from "gatsby";
import "../styles/global.css";
import ContactGrid from "../components/ContactGridComponent";
import TextOnBg from "../components/TextOnBgComponent";
import ExperienceEtnry from "../components/CVEntryComponent/ExperienceEntryComponent";
import EducationEntry from "../components/CVEntryComponent/EducationEntryComponent";
import { names } from "../data/personal";
import { subheading } from "../data/misc";
import { education, experiences } from "../data/cvEntries";

const IndexPage = () => {
    return (
        <main>
            <div className="flex flex-row justify-between pb-2">
                <div className="shrink-0">
                    <div className="grid grid-rows-2 gap-3">
                        {Object.values(names).map((name) => {
                            return (
                                <div className="flex">
                                    <TextOnBg addClass="text-5xl font-extrabold px-3">
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
            <div>
                <TextOnBg addClass="text-3xl font-extrabold capitalize px-2">
                    {Object.keys({ education })}
                </TextOnBg>
                {Object.values(education).map((entry) => {
                    return <EducationEntry entry={entry} />;
                })}
            </div>
            <div>
                <TextOnBg addClass="text-3xl font-extrabold capitalize px-2">
                    {Object.keys({ experiences })}
                </TextOnBg>
                {Object.values(experiences).map((entry) => {
                    return <ExperienceEtnry entry={entry} />;
                })}
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
            <script
                src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"
                type="text/javascript"
            ></script>
        </>
    );
};
