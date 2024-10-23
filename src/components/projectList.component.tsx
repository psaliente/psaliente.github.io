import { Link } from "react-router-dom";
import LanguageList from "./languageList.component";
import { ProjectType } from "../types/Project.Type";
import useStyle from "../styles/projectListItem.style";
import useProjectListStyle from "../styles/projectList.style";
import { useRef, useState } from "react";

type ProjectListItemPropType = {
  ProjectID: string,
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
  const [inView, setInView] = useState(false);
  const thisRef = useRef<HTMLDivElement>(null);
  const observer = new IntersectionObserver(([entry]) => {
    const { isIntersecting } = entry;
    !inView && isIntersecting && setInView(isIntersecting);
  }, { rootMargin: "0px 0px -10px 0px" });

  if(thisRef.current) observer.observe(thisRef.current);

  return (
    <div className={"col-md-5 col-sm-12 p-3" + (inView ? " animate": " ")} style={style.Panel} ref={thisRef}>
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
              {Roles.map((r, i) => (
                <li key={ProjectID+"role"+i}>{r}</li>
              ))}
            </ul>
          </>
        )}
        <LanguageList ProjectID={ProjectID} Languages={Languages} />
      </div>
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
            ProjectID={"projectItem" + i}
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
