import React from "react";
import { contact_details } from "../data/personal";
import BlackSquareSymbol from "./BlackSquareSymbolComponent";

const ContactGrid = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.values(contact_details).map(({ data, icon }) => {
                    return (
                        <div className="flex align-middle">
                            <BlackSquareSymbol name={icon} extend_style="mr-1" />
                            <span className="self-center">{data}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContactGrid;
