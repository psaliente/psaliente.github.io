import React from "react";
import TextGradient from "./textGradient.component";

type TextTitlePropsType = {
    className?: string
} & React.PropsWithChildren

function TextTitle({className, children}: TextTitlePropsType): JSX.Element {
    return <h1 className={className + " p-2 text-5xl md:text-7xl z-10"}>
        <TextGradient>{ children }</TextGradient>
    </h1>
}

export default React.memo(TextTitle);