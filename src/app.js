import React, { useState } from "react";
import MyProjects from "./assets/projects.json";
import MySkills from "./assets/skills.json";

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
      <div class="container">
        <h2 class="display-5 text-center">Projects</h2>
        <div class="row gap-5">
          {Projects.map((p) => (
            <div class="col-md-5 col-sm-12 p-3">
              <div>
                <h3 class="display-6">{p.Title}</h3>
                <p class="lead">{p.Description}</p>
                {p.Languages.map((l) => (
                  <span class="badge bg-primary rounded-pill m-1">{l}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div class="container">
        <h2 class="display-5 text-center">Skills</h2>
        <div class="row">
          {Skills.map((s) => (
            <div class="col-sm-12">
              <div class="row">
                <div class="col-sm-4 text-end">
                  <span>{s.Name}</span>
                </div>
                <div class="col-sm-4">
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="10"
                    value={s.Proficiency}
                    disabled
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
