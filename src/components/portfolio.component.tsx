import React from "react";
import MyProjects from "../assets/projects.json";
import MySkills from "../assets/skills.json";
import ProjectList from "./projectList.component";
import SkillList from "./skillList.component";
import { ProjectType } from "../types/Project.Type";
import { SkillType } from "../types/Skill.Type";

function PortfolioPage() {
  const Me = "Peter John C. Saliente";
  const Description =
    "Hi, welcome to my online portfolio where you can see the list of projects that I have participated throughout the span my software development and engineering career. I had been in the IT Industry since 2011 and then went on to do software development three years later.";
  const Projects: ProjectType[] = MyProjects;
  const Skills: SkillType[] = MySkills;

  return (
    <div>
      <h1 className="display-4 text-center">{Me}</h1>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p className="lead">{Description}</p>
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

export default PortfolioPage;
