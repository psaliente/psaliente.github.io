import { useContext } from 'react';
import BrandColors from './brandcolors.component';
import { TextTitle } from './labels';
import { PortfolioContext } from '../contexts';
import { Link } from 'react-router-dom';

type HeaderComponentPropsType = {
  EnableLink?: boolean;
  ShowDescription?: boolean;
};

const HeaderComponent = ({ EnableLink = false, ShowDescription = true }: HeaderComponentPropsType) => {
  const { Name, Description } = useContext(PortfolioContext);
  const headerTitle = (
    <TextTitle className={'text-center'}>
      <TextTitle.Gradient>{Name}</TextTitle.Gradient>
    </TextTitle>
  );

  return (
    <div className="overflow-y-hidden relative">
      <div className="flex flex-col gap-8 md:gap-16 bg-white p-5 md:p-20 ">
        {EnableLink ? (
          <Link to="/" aria-label="home">
            {headerTitle}
          </Link>
        ) : (
          headerTitle
        )}
        {ShowDescription && (
          <p className="p-5 text-2xl md:text-4xl text-justify font-[SourceCodePro] text-gray-500 break-words">
            {Description}
          </p>
        )}
      </div>
      <BrandColors />
    </div>
  );
};

export default HeaderComponent;
