type MrTPrepareListItemPropType = {
  Title: string,
  Description: string
}

function MrTPrepareListItem({ Title, Description }: MrTPrepareListItemPropType) {
  return (
    <>
      <h3>{Title}</h3>
      <p>{Description}</p>
    </>
  );
}

function MrTPrepareList() {
  return <></>;
}

export default MrTPrepareList;
