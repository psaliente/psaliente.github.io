import React from "react";
import TextGradient from "./textGradient.component";

type TextTitlePropsType = {
    className?: string
} & React.PropsWithChildren

function TextTitle({className, children}: TextTitlePropsType) {
    return <h1 className={className + " p-2 text-5xl md:text-7xl z-10"}>
        { children }
    </h1>
}

TextTitle.Gradient = TextGradient

export default TextTitle;