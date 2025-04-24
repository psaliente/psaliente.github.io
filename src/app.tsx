import { useState } from 'react';
import { RouterComponent } from './components';
import { ProjectType } from './types/Project.Type';
import { ProjectItemProvider, ThemeProvider } from './providers';
import PortfolioProvider from './providers/portfolioProvider';

function App() {
  const [projectItem, setProjectItem] = useState<ProjectType | null>(null);
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
