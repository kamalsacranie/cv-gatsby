import * as React from "react";
import type { HeadFC } from "gatsby";
import "../styles/global.css";
import ContactGrid from "../components/ContactGridComponent";
import CVEntry from "../components/CVEntryComponent/CVEntryComponent";
import { names } from "../data/personal";
import { subheading } from "../data/misc";
import { experience } from "../data/cvEntries";

const IndexPage = () => {
    return (
        <main>
            <div className="flex flex-row justify-between">
                <div className="shrink-0">
                    {/* make into a component */}
                    <div className="grid grid-rows-2 gap-3">
                        {Object.values(names).map((name) => {
                            return (
                                <div className="text-white text-5xl font-extrabold">
                                    <span className="bg-black px-3">{name}</span>
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
                <CVEntry entry={experience.experience_1} />
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
