import { ProjectItemContext } from "../contexts";
import { ProjectItemContextPropType } from "../contexts/projectItem.context";

type ProjectItemProviderPropsType = {
    projectItem: ProjectItemContextPropType
} & React.PropsWithChildren

export default function ProjectItemProvider({projectItem, children}: ProjectItemProviderPropsType): JSX.Element {
    return <ProjectItemContext.Provider value={projectItem}>{children}</ProjectItemContext.Provider>    
}