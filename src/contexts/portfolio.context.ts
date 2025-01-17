import { createContext } from 'react';
import { MyInfoType } from '../types/MyInfo.type';

export const PortfolioContext = createContext<MyInfoType>({ Name: 'Home', Description: 'This is an online portfolio' });
