import React from "react";
import * as icons from "react-icons/all";

// TODO make it dynamic for all the types of icons so we can import react-icons/vsc
const BlackSquareSymbol = ({ name, extendStyle }) => {
    return (
        <div className={`bg-black text-white self-center p-2 ${extendStyle}`}>
            {icons[name] && React.createElement(icons[name])}
        </div>
    );
};

export default BlackSquareSymbol;
