import React from "react"

type CardPropsType = {
    className?: string
} & React.PropsWithChildren

function Card({className, children}: CardPropsType): JSX.Element {
    return <div className={"bg-white rounded-3xl border border-slate-300 shadow-xl hover:shadow-2xl " + className}>{children}</div>
}

export default React.memo(Card);