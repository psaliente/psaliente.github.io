import { Link } from 'react-router-dom';
import ReactGA from 'react-ga4';

export default function FooterComponent() {
  const onGithubClick = () => {
    ReactGA.event({
      category: 'event',
      action: 'click github profile'
    });
  };

  const onLinkedInClick = () => {
    ReactGA.event({
      category: 'event',
      action: 'click linkedin profile'
    });
  };

  return (
    <div className="shrink-0 flex flex-col p-6 pt-20 gap-2 text-center transition delay-300 duration-500 dark:text-white">
      <div className="flex flex-row flex-wrap gap-3 w-full items-center justify-center">
        <a href="https://github.com/psaliente" onClick={onGithubClick}>
          My Github Profile
        </a>
        <a href="https://www.linkedin.com/in/peter-saliente-2a4aa942/" onClick={onLinkedInClick}>
          My LinkedIn Profile
        </a>
        <a href="mailto:pjc.saliente@gmail.com">My Contact Email</a>
        <Link to="/tools">My Custom Tools</Link>
      </div>
      <hr className="w-2/3 self-center border-gray-500" />
      <span>Peter John C. Saliente - 2021</span>
    </div>
  );
}
