import { Link } from 'react-router-dom';
import { FooterComponent, HeaderComponent } from '../..';
import { useToolsService } from '../../../services';
import { NightModeToggle } from '../../buttons';
import { Section } from '../../containers';

const ToolsPage = () => {
  const { getToolList } = useToolsService();
  const tools = getToolList();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50 min-h-screen flex flex-col">
      <HeaderComponent ShowDescription={false} EnableLink={true} />
      <NightModeToggle />
      <Section className="flex flex-col flex-auto gap-4 py-10 px-4 fhd:px-10">
        <Section.Title>
          <Section.Title.Gradient>My Custom-Made Tools</Section.Title.Gradient>
        </Section.Title>
        <Section.Content>
          These are the collection of tools that I personally crafted. (This page is still a work-in-progress, design
          and layout may change in the future.)
        </Section.Content>
        <Section.Content>
          <ul>
            {tools.map((t) => (
              <li key={t.Title}>
                <Link to={t.Link}>{t.Title}</Link>
              </li>
            ))}
          </ul>
        </Section.Content>
      </Section>
      <FooterComponent />
    </div>
  );
};

export default ToolsPage;
