import { SkillType } from "../types/Skill.Type";
import useStyle from "../styles/skills.style";
import ScrollAnimation from "react-animate-on-scroll";

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
  const styles = useStyle();

  return (
    <div className="container" style={styles.SkillsContainer}>
      <h2 className="display-5">Skills</h2>
      <ScrollAnimation animateIn="fadeInUp">
        <div className={"row"} style={styles.SkillsPanel}>
          {skills.map((s, i) => (
            <SkillListItem key={"skill"+i} Name={s.Name} Proficiency={s.Proficiency} />
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default SkillList;
