import * as React from "react";

interface TextOnBgProps {
    children: React.ReactNode;
    textColor?: string;
    bgColor?: string;
    addClass?: string;
}

const TextOnBg = ({
    children,
    textColor = "white",
    bgColor = "black",
    addClass = "",
}: TextOnBgProps) => {
    return (
        <span className={`bg-${bgColor} text-${textColor} ${addClass}`}>
            {children}
        </span>
    );
};

export default TextOnBg;
