import { CSSProperties } from "react"

type HeaderStyleProp = {
    Header: CSSProperties,
    Title: CSSProperties,
    Description: CSSProperties
}

const useStyle = (): HeaderStyleProp => {
    return {
        Header: {
            boxShadow: "0px 5px 5px #88888888",
            background: "radial-gradient(ellipse at top, #fff6 40%, #ccc 90%)",
            // backgroundColor: "#fff4",
            display: 'flex',
            flexDirection: 'column',
            gap: 60,
            padding: 40,
            paddingTop: 60,
            paddingBottom: 60,
            zIndex: 10
        },
        Title: {
            fontFamily: 'SourceCodePro',
            fontWeight: '100',
            color: '#338',
        },
        Description: {
            fontSize: '2em',
            fontFamily: 'SourceCodePro',
            fontWeight: 'normal',
            color: '#344',
        }
    }
}

export default useStyle