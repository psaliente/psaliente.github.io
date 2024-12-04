import React from "react";
import { SkillType } from "../types/Skill.Type";


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

export default React.memo(SkillListItem);