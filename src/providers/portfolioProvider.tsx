import React from "react";
import { PortfolioContext } from "../contexts";
import { useMyInfoService } from "../services";

export default function PortfolioProvider({children}: React.PropsWithChildren): JSX.Element {
    const me = useMyInfoService().getMyInfo().Name;
    return <PortfolioContext.Provider value={me}>{children}</PortfolioContext.Provider>
}