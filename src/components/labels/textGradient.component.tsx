import React from "react"

type TextGradientPropsType = {
    fromColor?: string,
    viaColor?: string,
    toColor?: string
} & React.PropsWithChildren

function TextGradient({children, fromColor = 'from-blue-500', viaColor = 'via-sky-500', toColor = 'to-green-500'}: TextGradientPropsType): JSX.Element {
    return <span className={`font-[SourceCodePro] font-thin text-transparent bg-clip-text bg-gradient-to-r ${fromColor} ${viaColor} ${toColor}`}>{children}</span>
}

export default React.memo(TextGradient);