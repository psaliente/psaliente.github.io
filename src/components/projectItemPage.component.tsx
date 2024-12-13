import { useContext } from "react";
import { PortfolioContext, ProjectItemContext } from "../contexts";
import useProjectThumbnail from "../hooks/useProjectThumbnail";
import { TextTitle } from "./labels";
import { BrandColors, LanguageList, RolesList } from ".";
import { Link } from "react-router-dom";

export default function ProjectItemPage(): JSX.Element {
    const { projectItem } = useContext(ProjectItemContext);
    const me = useContext(PortfolioContext);
    const projectItemType = !projectItem ? 'generic': projectItem.Type;
    const projectImage = useProjectThumbnail(projectItemType);
    const projectLanguages = !projectItem ? []: projectItem.Languages;

    return <div className="flex flex-col bg-gray-100">
        <div className="flex flex-col bg-white p-5">
            <Link to='/'>
                <TextTitle className={"text-center"}>{me}</TextTitle>
            </Link>
        </div>
        <BrandColors />
        <div className="flex flex-row flex-wrap gap-3 items-center justify-center p-8">
            <img src={projectImage} alt={projectItemType} className="w-full md:w-auto max-h-60" />
            <div className="w-full max-w-4xl pb-5 md:pb-10">
                <h1 className="text-5xl md:text-7xl text-gray-600">{projectItem?.Title}</h1>
                <LanguageList ProjectID="" Languages={projectLanguages} />
            </div>
            <div className="flex flex-col w-full p-10 items-center justify-center">
                <p className="text-2xl md:text-4xl max-w-4xl font-light break-words">{projectItem?.Description}</p>
                <RolesList Roles={projectItem?.Role} />
            </div>
        </div>
    </div>
}