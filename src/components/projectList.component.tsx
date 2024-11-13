import { Link } from "react-router-dom";
import LanguageList from "./languageList.component";
import { ProjectType } from "../types/Project.Type";
import useStyle from "../styles/projectListItem.style";
import useProjectListStyle from "../styles/projectList.style";
import ScrollAnimation from "react-animate-on-scroll";

type ProjectListItemPropType = {
  ProjectID: number,
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
  ProjectID,
  Title,
  Description,
  Languages,
  Roles,
  ProjectLink,
}: ProjectListItemPropType) {
  const style = useStyle();

  return (
      <div className={"col-md-5 col-sm-12 p-3"}>
        <ScrollAnimation animateIn={ProjectID % 2 == 0 ? "fadeInLeft" : "fadeInRight"}>
          <div style={style.Panel}>
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
                    {Roles.map((r, i) => (
                      <li key={"" + ProjectID+"role"+i}>{r}</li>
                    ))}
                  </ul>
                </>
              )}
              <LanguageList ProjectID={"" + ProjectID} Languages={Languages} />
          </div>
        </ScrollAnimation>
      </div>
  );
}

function ProjectList({ projects }: ProjectListPropType) {
  const styles = useProjectListStyle();

  return (
    <div className="container" style={styles.ListContainer}>
      <h2 className="display-5">Projects</h2>
      <div className="row gap-5 projectItems">
        {projects.map((p, i) => (
          <ProjectListItem
            key={"projectItem" + i}
            ProjectID={i}
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
