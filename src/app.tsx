import { useState } from 'react';
import { RouterComponent } from './components';
import { ProjectType } from './types/Project.Type';
import { ProjectItemProvider } from './providers';
import PortfolioProvider from './providers/portfolioProvider';

function App() {
  const [projectItem, setProjectItem] = useState<ProjectType | null>(null);
  return (
    <PortfolioProvider>
      <ProjectItemProvider projectItem={{ projectItem, setProjectItem }}>
        <RouterComponent></RouterComponent>
      </ProjectItemProvider>
    </PortfolioProvider>
  );
}

export default App;
