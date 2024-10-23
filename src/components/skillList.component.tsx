import { SkillType } from "../types/Skill.Type";
import useStyle from "../styles/skills.style";
import { useRef, useState } from "react";

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
  const [inView, setInView] = useState(false);
  const thisRef = useRef<HTMLDivElement>(null);
  const observer = new IntersectionObserver(([entry]) => {
    const { isIntersecting } = entry;
    !inView && isIntersecting && setInView(isIntersecting);
  }, { rootMargin: "0px 0px -10px 0px" });

  if(thisRef.current) observer.observe(thisRef.current);

  return (
    <div className="container" style={styles.SkillsContainer}>
      <h2 className="display-5">Skills</h2>
      <div className={"row" + (inView ? " animate": " opacity-0")} style={styles.SkillsPanel}  ref={thisRef}>
        {skills.map((s, i) => (
          <SkillListItem key={"skill"+i} Name={s.Name} Proficiency={s.Proficiency} />
        ))}
      </div>
    </div>
  );
}

export default SkillList;
