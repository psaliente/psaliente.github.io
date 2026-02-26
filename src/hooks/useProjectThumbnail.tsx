import { useEffect, useState } from 'react';
import {
  appIconConsole,
  appIconCrossPlatform,
  appIconDesktop,
  appIconGeneric,
  appIconMobile,
  appIconWeb
} from '../assets/images';
import { ProjectItemType } from '../types/Project.Type';

function useProjectThumbnail(type?: ProjectItemType['Type']) {
  const [svgSrc, setSvgSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    switch (type) {
      case 'console':
        setSvgSrc(appIconConsole);
        break;
      case 'cross-platform':
        setSvgSrc(appIconCrossPlatform);
        break;
      case 'desktop':
        setSvgSrc(appIconDesktop);
        break;
      case 'mobile':
        setSvgSrc(appIconMobile);
        break;
      case 'web':
        setSvgSrc(appIconWeb);
        break;
      case 'generic':
      default:
        setSvgSrc(appIconGeneric);
    }
  }, [type]);

  return svgSrc;
}

export default useProjectThumbnail;
