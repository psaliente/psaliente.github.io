import {
  angularSVG,
  bootstrapSVG,
  csharpSVG,
  cssSVG,
  dotnetSVG,
  html5SVG,
  jsSVG,
  koSVG,
  nodeSVG,
  reactNativeSVG,
  reactSVG,
  sqlSVG,
  tailwindSVG,
  tsSVG
} from '../assets/images';

export const SECTIONS = {
  PROJECTS: {
    TITLE: 'Projects.',
    SUBTITLE: 'I got involved'
  },
  PROGLANGS: {
    TITLE: 'Languages.',
    SUBTITLE: "I don't speak, but I write in these",
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
    SUBTITLE: 'integrating and keeping up with the popular ones',
    ITEMS: [
      {
        IMG_SRC: dotnetSVG,
        IMG_ALT: 'dot net logo',
        URL: 'https://dotnet.microsoft.com/en-us/'
      },
      {
        IMG_SRC: angularSVG,
        IMG_ALT: 'angular logo',
        URL: 'https://angular.dev/'
      },
      {
        IMG_SRC: bootstrapSVG,
        IMG_ALT: 'bootstrap logo',
        URL: 'https://getbootstrap.com/'
      },
      {
        IMG_SRC: koSVG,
        IMG_ALT: 'knockout JS logo',
        URL: 'https://knockoutjs.com/'
      },
      {
        IMG_SRC: nodeSVG,
        IMG_ALT: 'node JS logo',
        URL: 'https://nodejs.org/en'
      },
      {
        IMG_SRC: reactSVG,
        IMG_ALT: 'react JS logo',
        URL: 'https://react.dev/'
      },
      {
        IMG_SRC: reactNativeSVG,
        IMG_ALT: 'react-native logo',
        URL: 'https://reactnative.dev/'
      },
      {
        IMG_SRC: tailwindSVG,
        IMG_ALT: 'tailwind CSS logo',
        URL: 'https://tailwindcss.com/'
      }
    ]
  },
  PROGTOOLS: {
    TITLE: 'Tools and Platforms.',
    SUBTITLE: 'utilized and work with',
    ITEMS: []
  }
};
