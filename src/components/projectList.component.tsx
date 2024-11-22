import { Link } from "react-router-dom";
import LanguageList from "./languageList.component";
import { ProjectType } from "../types/Project.Type";
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
  return (
    <ScrollAnimation animateIn={ProjectID % 2 == 0 ? "fadeInLeft" : "fadeInRight"}>
      <div className="flex flex-col gap-3 bg-white px-7 pb-5 pt-8 border rounded-xl border-slate-300 shadow-xl hover:shadow-2xl">
          {ProjectLink ? (
            <Link to={ProjectLink} className="">
              <h3 className="text-5xl font-[SourceCodePro] text-blue-500">{Title}</h3>
            </Link>
          ) : (
            <h3 className="text-5xl font-[SourceCodePro]">{Title}</h3>
          )}
          <p className="text-xl text-justify font-[SourceCodePro] text-gray-700">{Description}</p>
          {Roles && Roles.length > 0 && (
            <>
              <strong className="font-[SourceCodePro] text-gray-900">Roles and Responsibilities:</strong>
              <ul className="list-disc list-inside">
                {Roles.map((r, i) => (
                  <li key={"" + ProjectID+"role"+i} className="font-[SourceCodePro] text-gray-700">{r}</li>
                ))}
              </ul>
            </>
          )}
          <LanguageList ProjectID={"" + ProjectID} Languages={Languages} />
      </div>
    </ScrollAnimation>
  );
}

function ProjectList({ projects }: ProjectListPropType) {
  return (
    <div className="flex flex-col gap-4 p-10">
      <h2 className="w-full md:w-1/4 p-2 text-7xl font-[SourceCodePro] font-thin text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Projects</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
