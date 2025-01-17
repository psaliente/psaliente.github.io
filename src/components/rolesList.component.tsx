import React from 'react';

type RolesListPropType = {
  Roles: string[] | undefined;
};

function RolesList({ Roles }: RolesListPropType) {
  if (!Roles || Roles.length === 0) return <></>;

  return (
    <div className="m-6 max-w-4xl">
      <strong className="font-[SourceCodePro] text-xl md:text-3xl text-gray-600">Roles and Responsibilities:</strong>
      <ul className="list-disc list-inside">
        {Roles.map((r, i) => (
          <li key={'role' + i} className="font-[SourceCodePro] text-lg md:text-2xl text-gray-700">
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(RolesList);
