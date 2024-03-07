import { SkillType } from "../types/Skill.Type";

type SkillListPropType = {
  skills: SkillType[]
}

function SkillListItem({ Name, Proficiency }: SkillType) {
  return (
    <div className="col-sm-12">
      <div className="row">
        <div className="col-sm-4 text-end">
          <span>{Name}</span>
        </div>
        <div className="col-sm-4">
          <input
            type="range"
            className="form-range"
            min="0"
            max="10"
            value={Proficiency}
            disabled
          />
        </div>
      </div>
    </div>
  );
}

function SkillList({ skills }: SkillListPropType) {
  return (
    <div className="container">
      <h2 className="display-5 text-center">Skills</h2>
      <div className="row">
        {skills.map((s) => (
          <SkillListItem Name={s.Name} Proficiency={s.Proficiency} />
        ))}
      </div>
    </div>
  );
}

export default SkillList;
