import { useContext } from 'react';
import BrandColors from './brandcolors.component';
import { TextTitle } from './labels';
import { PortfolioContext } from '../contexts';

const HeaderComponent = () => {
  const { Name, Description } = useContext(PortfolioContext);

  return (
    <div className="overflow-y-hidden relative">
      <div className="flex flex-col gap-8 md:gap-16 bg-white p-5 md:p-20 ">
        <TextTitle className={'text-center'}>
          <TextTitle.Gradient>{Name}</TextTitle.Gradient>
        </TextTitle>
        <p className="p-5 text-2xl md:text-4xl text-justify font-[SourceCodePro] text-gray-500 break-words">
          {Description}
        </p>
      </div>
      <BrandColors />
    </div>
  );
};

export default HeaderComponent;
