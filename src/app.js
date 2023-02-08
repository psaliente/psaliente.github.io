import React, { useState } from "react";
import MyProjects from "./assets/projects.json";
import MySkills from "./assets/skills.json";
import ProjectList from "./components/projectList.component";
import SkillList from "./components/skillList.component";

function App() {
  const [Me, setMe] = useState("Peter John C. Saliente");
  const [Description, setDescription] = useState(
    "Hi, welcome to my online portfolio where you can see the list of projects that I have participated throughout the span my software development and engineering career. I had been in the IT Industry since 2011 and then went on to do software development three years later."
  );
  const [Projects, setProjects] = useState(MyProjects);
  const [Skills, setSkills] = useState(MySkills);

  return (
    <div>
      <h1 class="display-4 text-center">{Me}</h1>
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <p class="lead">{Description}</p>
          </div>
        </div>
      </div>
      <br />
      <ProjectList projects={Projects} />
      <br />
      <SkillList skills={Skills} />
    </div>
  );
}

export default App;
