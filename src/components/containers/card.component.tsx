import React from "react"

type CardPropsType = {
    className?: string
} & React.PropsWithChildren

function Card({className, children}: CardPropsType) {
    return <div className={"z-10 rounded-3xl shadow-lg hover:shadow-xl " + className}>{children}</div>
}

export default React.memo(Card);