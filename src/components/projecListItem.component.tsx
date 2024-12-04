import React from "react";
import { useCommonHook } from "../hooks/common.hook";
import ScrollAnimation from "react-animate-on-scroll";
import { Card } from "./containers";
import { Link } from "react-router-dom";
import { LanguageList, RolesList } from ".";

type ProjectListItemPropType = {
    ProjectID: number,
    Title: string,
    Description: string,
    Languages: string[],
    Roles: string[],
    ProjectLink?: string
}

  
function ProjectListItem({
    ProjectID,
    Title,
    Description,
    Languages,
    Roles,
    ProjectLink,
  }: ProjectListItemPropType) {
    const { isEven } = useCommonHook();
  
    return (
      <ScrollAnimation animateIn={isEven(ProjectID) ? "fadeInLeft" : "fadeInRight"} duration={2} animateOnce={true}>
        <Card className="flex flex-col gap-5 px-7 pb-5 pt-8">
            {ProjectLink ? (
              <Link to={ProjectLink} className="">
                <h3 className="text-3xl md:text-5xl font-[SourceCodePro] text-blue-500">{Title}</h3>
              </Link>
            ) : (
              <h3 className="text-3xl md:text-5xl font-[SourceCodePro]">{Title}</h3>
            )}
            <p className="text-lg md:text-xl text-justify font-[SourceCodePro] text-gray-700">{Description}</p>
            <RolesList Roles={Roles} />
            <LanguageList ProjectID={"" + ProjectID} Languages={Languages} />
        </Card>
      </ScrollAnimation>
    );
}

export default React.memo(ProjectListItem);