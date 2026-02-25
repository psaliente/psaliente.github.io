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
      <div className="flex flex-col gap-8 md:gap-16 bg-white dark:bg-gray-800 transition delay-300 duration-500 p-5 md:p-20 ">
        {EnableLink ? (
          <Link to="/" aria-label="home">
            {headerTitle}
          </Link>
        ) : (
          headerTitle
        )}
        {ShowDescription && (
          <p className="p-5 text-2xl md:text-4xl text-center md:text-justify font-[SourceCodePro] text-gray-500 dark:text-gray-100 transition delay-300 duration-500 wrap-break-word">
            {Description}
          </p>
        )}
      </div>
      <BrandColors />
    </div>
  );
};

export default HeaderComponent;
