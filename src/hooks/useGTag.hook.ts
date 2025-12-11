import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export default function useGTag(pageTitle?: string) {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.hash,
      title: pageTitle
    });
  }, [pageTitle]);
}
