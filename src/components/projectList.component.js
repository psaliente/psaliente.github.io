import React from "react";
import LanguageList from "./languageList.component";

function ProjectListItem(props) {
  let { Title, Description, Languages } = props;
  return (
    <div class="col-md-5 col-sm-12 p-3">
      <div>
        <h3 class="display-6">{Title}</h3>
        <p class="lead">{Description}</p>
        <LanguageList Languages={Languages} />
      </div>
    </div>
  );
}

function ProjectList(props) {
  let { projects } = props;
  return (
    <div class="container">
      <h2 class="display-5 text-center">Projects</h2>
      <div class="row gap-5">
        {projects.map((p) => (
          <ProjectListItem
            Title={p.Title}
            Description={p.Description}
            Languages={p.Languages}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
