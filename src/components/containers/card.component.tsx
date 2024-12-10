import React from "react"

type CardPropsType = {
    className?: string
} & React.PropsWithChildren

function Card({className, children}: CardPropsType): JSX.Element {
    return <div className={"z-10 bg-white rounded-3xl shadow-lg hover:shadow-xl " + className}>{children}</div>
}

export default React.memo(Card);