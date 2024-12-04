import { SkillType } from "../types/Skill.Type";
import ScrollAnimation from "react-animate-on-scroll";
import { TextTitle } from "./labels";
import { Card } from "./containers";
import React from "react";
import { SkillListItem } from ".";

type SkillListPropType = {
  skills: SkillType[]
}

function SkillList({ skills }: SkillListPropType) {
  return (
    <div className="flex flex-col gap-4 p-10 overflow-y-hidden" >
      <TextTitle>Skills</TextTitle>
      <ScrollAnimation animateIn="fadeInUp">
        <Card className="flex flex-col gap-2 p-8">
          {skills.map((s, i) => (
            <SkillListItem key={"skill"+i} Name={s.Name} Proficiency={s.Proficiency} />
          ))}
        </Card>
      </ScrollAnimation>
    </div>
  );
}

export default React.memo(SkillList);
