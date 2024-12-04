import React from "react";
import { useCommonHook } from "../hooks/common.hook";
import { TagItem } from "./labels";

type LanguageListPropType = {
  ProjectID: string,
  Languages: string[]
}

function LanguageList({ ProjectID, Languages }: LanguageListPropType) {
  const { mapLanguageToColor } = useCommonHook();

  return (
    <div className="flex flex-wrap flex-row gap-2 py-3">
      {
        Languages.map((l, i) => (
          <TagItem key={ProjectID + "language" + i} tagColor={mapLanguageToColor(l)} textColor="text-white">{l}</TagItem>
        ))
      }
    </div>
  );
}

export default React.memo(LanguageList);
