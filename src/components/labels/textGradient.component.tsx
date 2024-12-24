import React from "react"

type TextGradientPropsType = {
    fromColor?: string,
    viaColor?: string,
    toColor?: string
} & React.PropsWithChildren

function TextGradient({children, fromColor = 'from-sky-500', viaColor = 'via-cyan-500', toColor = 'to-lime-500'}: TextGradientPropsType) {
    return <span className={`font-[SourceCodePro] font-thin text-transparent bg-clip-text bg-gradient-to-r ${fromColor} from-10% ${viaColor} via-60% ${toColor} to-90%`}>{children}</span>
}

export default React.memo(TextGradient);