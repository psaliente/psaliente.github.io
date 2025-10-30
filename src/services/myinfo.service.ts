import { MyInfoType } from '../types/MyInfo.type';

export const useMyInfoService = () => {
  function getMyInfo(): MyInfoType {
    return {
      Name: '<Peter John C. Saliente/>',
      Description:
        'Hello and welcome to my growing online portfolio! Here, you’ll find a curated list of projects I’ve been involved in throughout my software development and engineering career. My journey in the IT industry began back in 2011, and three years later, I delved into the exciting world of software development.'
    };
  }

  return {
    getMyInfo
  };
};
