import React from "react";

function SkillListItem(props) {
  let { Name, Proficiency } = props;
  return (
    <div class="col-sm-12">
      <div class="row">
        <div class="col-sm-4 text-end">
          <span>{Name}</span>
        </div>
        <div class="col-sm-4">
          <input
            type="range"
            class="form-range"
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

function SkillList(props) {
  let { skills } = props;
  return (
    <div class="container">
      <h2 class="display-5 text-center">Skills</h2>
      <div class="row">
        {skills.map((s) => (
          <SkillListItem Name={s.Name} Proficiency={s.Proficiency} />
        ))}
      </div>
    </div>
  );
}

export default SkillList;
