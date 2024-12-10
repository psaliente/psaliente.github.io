import { useEffect, useState } from "react";
import { 
    appIconConsole, 
    appIconCrossPlatform, 
    appIconDesktop, 
    appIconGeneric, 
    appIconMobile, 
    appIconWeb
} from "../assets/images";
import { ProjectType } from "../types/Project.Type";


function useProjectThumbnail(type?: ProjectType['Type']) {
    const [svgSrc, setSvgSrc] = useState('');

    useEffect(() => {
        switch(type) {
            case 'console': setSvgSrc(appIconConsole); break;
            case 'cross-platform': setSvgSrc(appIconCrossPlatform); break;
            case 'desktop': setSvgSrc(appIconDesktop); break;
            case 'mobile': setSvgSrc(appIconMobile); break;
            case 'web': setSvgSrc(appIconWeb); break;
            case 'generic':
            default: setSvgSrc(appIconGeneric);
        }
    }, [type]);

    return svgSrc;
}

export default useProjectThumbnail;