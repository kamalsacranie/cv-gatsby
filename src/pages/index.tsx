import * as React from "react";
import type { HeadFC } from "gatsby";
import "../styles/global.css";
import { names } from "../data/personal";
import { subheading } from "../data/misc";
import ContactGrid from "../components/ContactGridComponent";

const IndexPage = () => {
    return (
        <main>
            <div>
                {/* make into a component */}
                <div className="grid grid-rows-2">
                    {Object.values(names).map((name) => {
                        return (
                            <div className="text-white text-3xl font-extrabold">
                                <span className="bg-black px-2">{name}</span>
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
