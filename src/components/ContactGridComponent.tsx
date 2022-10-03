import React from "react";
import { contact_details } from "../data/personal";
import BlackSquareSymbol from "./BlackSquareSymbolComponent";

const ContactGrid = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-2">
                {Object.values(contact_details).map(({ data, icon }) => {
                    return (
                        <div className="flex">
                            <BlackSquareSymbol name={icon} />
                            {data}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContactGrid;
