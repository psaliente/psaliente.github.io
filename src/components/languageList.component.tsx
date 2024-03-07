import React from "react";

type LanguageListPropType = {
  Languages: string[]
}

function LanguageList({ Languages }: LanguageListPropType) {
  return (
    <>
      {
        Languages.map((l) => (
          <span className="badge bg-primary rounded-pill m-1">{l}</span>
        ))
      }
    </>
  );
}

export default LanguageList;
