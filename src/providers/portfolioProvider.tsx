import React from 'react';
import { PortfolioContext } from '../contexts';
import { useMyInfoService } from '../services';

export default function PortfolioProvider({ children }: React.PropsWithChildren) {
  const myInfo = useMyInfoService().getMyInfo();
  return <PortfolioContext.Provider value={myInfo}>{children}</PortfolioContext.Provider>;
}
