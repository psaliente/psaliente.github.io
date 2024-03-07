type LanguageListPropType = {
  ProjectID: string,
  Languages: string[]
}

function LanguageList({ ProjectID, Languages }: LanguageListPropType) {
  return (
    <>
      {
        Languages.map((l, i) => (
          <span key={ProjectID + "language" + i} className="badge bg-primary rounded-pill m-1">{l}</span>
        ))
      }
    </>
  );
}

export default LanguageList;
