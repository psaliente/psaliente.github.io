import { useCommonHook } from "../hooks/common.hook";

type LanguageListPropType = {
  ProjectID: string,
  Languages: string[]
}

function LanguageList({ ProjectID, Languages }: LanguageListPropType) {
  const { mapLanguageToColor } = useCommonHook();

  return (
    <div className="flex flex-row gap-2 py-3">
      {
        Languages.map((l, i) => (
          <span key={ProjectID + "language" + i} className={"pl-3 pr-4 py-2 rounded-r-full text-white text-xs " + mapLanguageToColor(l)}>{l}</span>
        ))
      }
    </div>
  );
}

export default LanguageList;
