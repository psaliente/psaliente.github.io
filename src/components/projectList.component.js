import React from "react";
import { Link } from "react-router-dom";
import LanguageList from "./languageList.component";

function ProjectListItem({
  Title,
  Description,
  Languages,
  Roles,
  ProjectLink,
}) {
  return (
    <div class="col-md-5 col-sm-12 p-3">
      <div>
        {ProjectLink ? (
          <Link to={ProjectLink} className="text-decoration-none">
            <h3 class="display-6">{Title}</h3>
          </Link>
        ) : (
          <h3 class="display-6">{Title}</h3>
        )}
        <p class="lead">{Description}</p>
        {Roles && Roles.length > 0 && (
          <>
            <strong>Roles and Responsibilities:</strong>
            <ul>
              {Roles.map((r) => (
                <li>{r}</li>
              ))}
            </ul>
          </>
        )}
        <LanguageList Languages={Languages} />
      </div>
    </div>
  );
}

function ProjectList({ projects }) {
  return (
    <div class="container">
      <h2 class="display-5 text-center">Projects</h2>
      <div class="row gap-5">
        {projects.map((p) => (
          <ProjectListItem
            Title={p.Title}
            Description={p.Description}
            Roles={p.Role}
            Languages={p.Languages}
            ProjectLink={p.Link}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
