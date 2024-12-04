import React from "react"

type RolesListPropType = {
    Roles: string[] | undefined
}

function RolesList({Roles}: RolesListPropType): JSX.Element {
    if (!!Roles === false || Roles.length === 0) return <></>;

    return <>
    <strong className="font-[SourceCodePro] text-gray-900">Roles and Responsibilities:</strong>
    <ul className="list-disc list-inside">
      {Roles.map((r, i) => (
        <li key={"role"+i} className="font-[SourceCodePro] text-gray-700">{r}</li>
      ))}
    </ul>
  </>
}

export default React.memo(RolesList);