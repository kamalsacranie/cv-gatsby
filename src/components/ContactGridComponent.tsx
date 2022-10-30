import React from "react";
import { contactDetails } from "../data/personal";
import BlackSquareSymbol from "./BlackSquareSymbolComponent";
import Markdown from "./MarkdownComponent";

const ContactGrid = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-2 text-sm">
                {Object.values(contactDetails).map(({ data, icon }) => {
                    return (
                        <div className="flex align-middle">
                            <BlackSquareSymbol name={icon} extendStyle="mr-1" />
                            <Markdown className="self-center" source={data} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContactGrid;
