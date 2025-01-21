import { csharpSVG, cssSVG, html5SVG, jsSVG, sqlSVG, tsSVG } from '../assets/images';

export const SECTIONS = {
  PROJECTS: {
    TITLE: 'Projects.',
    SUBTITLE: 'I got involved'
  },
  PROGLANGS: {
    TITLE: 'Languages.',
    SUBTITLE: 'I write and code in',
    ITEMS: [
      {
        IMG_SRC: csharpSVG,
        IMG_ALT: 'C sharp logo',
        URL: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
      },
      {
        IMG_SRC: cssSVG,
        IMG_ALT: 'CSS logo',
        URL: 'https://www.w3.org/Style/CSS/Overview.en.html'
      },
      {
        IMG_SRC: jsSVG,
        IMG_ALT: 'javascript logo',
        URL: 'https://www.javascript.com/'
      },
      {
        IMG_SRC: html5SVG,
        IMG_ALT: 'HTML logo',
        URL: 'https://html.com/'
      },
      {
        IMG_SRC: sqlSVG,
        IMG_ALT: 'SQL logo',
        URL: 'https://www.iso.org/standard/76583.html'
      },
      {
        IMG_SRC: tsSVG,
        IMG_ALT: 'typescript logo',
        URL: 'https://www.typescriptlang.org/'
      }
    ]
  },
  PROGLIBS: {
    TITLE: 'Libraries and Frameworks.',
    SUBTITLE: 'I ran my codes in',
    ITEMS: []
  },
  PROGTOOLS: {
    TITLE: 'Tools and Platforms.',
    SUBTITLE: 'I work with',
    ITEMS: []
  }
};
