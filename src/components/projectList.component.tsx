import { Link } from "react-router-dom";
import LanguageList from "./languageList.component";
import { ProjectType } from "../types/Project.Type";
import useStyle from "../styles/projectListItem.style";

type ProjectListItemPropType = {
  Title: string,
  Description: string,
  Languages: string[],
  Roles: string[],
  ProjectLink?: string
}
type ProjectListPropType = {
  projects: ProjectType[]
}

function ProjectListItem({
  Title,
  Description,
  Languages,
  Roles,
  ProjectLink,
}: ProjectListItemPropType) {
  const style = useStyle();

  return (
    <div className="col-md-5 col-sm-12 p-3" style={style.Panel}>
      <div>
        {ProjectLink ? (
          <Link to={ProjectLink} className="text-decoration-none">
            <h3 className="display-6">{Title}</h3>
          </Link>
        ) : (
          <h3 className="display-6">{Title}</h3>
        )}
        <p className="lead">{Description}</p>
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

function ProjectList({ projects }: ProjectListPropType) {
  return (
    <div className="container">
      <h2 className="display-5 text-center">Projects</h2>
      <div className="row gap-5">
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
