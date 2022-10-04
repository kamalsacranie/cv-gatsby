import React from "react";
import { contactDetails } from "../data/personal";
import BlackSquareSymbol from "./BlackSquareSymbolComponent";

const ContactGrid = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        {Object.values(contactDetails).map(({ data, icon }) => {
          return (
            <div className="flex align-middle">
              <BlackSquareSymbol name={icon} extendStyle="mr-1" />
              <span className="self-center">{data}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactGrid;
