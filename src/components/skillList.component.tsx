import { SkillType } from "../types/Skill.Type";
import ScrollAnimation from "react-animate-on-scroll";

type SkillListPropType = {
  skills: SkillType[]
}

function SkillListItem({ Name, Proficiency }: SkillType) {
  return (
    <div className="flex flex-row gap-1">
      <div className="basis-1/3 text-right">
        <span className="font-[SourceCodePro] text-gray-700 border">{Name}</span>
      </div>
      <div className="basis-1/3">
        <input
          type="range"
          className="w-full"
          min="0"
          max="10"
          value={Proficiency}
          disabled
        />
      </div>
      <div className="basis-1/3">
        <span className="font-[SourceCodePro] text-gray-700 border">{Proficiency}/10</span>
      </div>
    </div>
  );
}

function SkillList({ skills }: SkillListPropType) {
  return (
    <div className="flex flex-col gap-4 p-10" >
      <h2 className="w-full md:w-1/4 p-2 text-5xl md:text-7xl font-[SourceCodePro] font-thin text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Skills</h2>
      <ScrollAnimation animateIn="fadeInUp">
        <div className="flex flex-col gap-2 bg-white p-8 border rounded-3xl border-slate-300 shadow-xl hover:shadow-2xl">
          {skills.map((s, i) => (
            <SkillListItem key={"skill"+i} Name={s.Name} Proficiency={s.Proficiency} />
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default SkillList;
