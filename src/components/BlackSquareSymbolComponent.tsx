import React, { PropsWithChildren } from "react";
import * as icons from "react-icons/vsc";

// TODO make it dynamic for all the types of icons so we can import react-icons/vsc
const BlackSquareSymbol = ({ name }: PropsWithChildren<String>) => {
    return (
        <div className="bg-black text-white self-center p-3">
            {React.createElement(icons[name])}
        </div>
    );
};

export default BlackSquareSymbol;
