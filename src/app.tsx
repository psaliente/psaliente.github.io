import { useState } from 'react';
import { RouterComponent } from './components';
import { ProjectItemType } from './types/Project.Type';
import { ProjectItemProvider, ThemeProvider } from './providers';
import PortfolioProvider from './providers/portfolioProvider';

function App() {
  const [projectItem, setProjectItem] = useState<ProjectItemType | null>(null);
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <ProjectItemProvider projectItem={{ projectItem, setProjectItem }}>
          <RouterComponent></RouterComponent>
        </ProjectItemProvider>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;
