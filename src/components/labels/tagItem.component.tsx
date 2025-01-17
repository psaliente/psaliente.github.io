import React from 'react';

type TagItemPropsType = {
  tagColor?: string;
  textColor?: string;
} & React.PropsWithChildren;

function TagItem({ children, tagColor = 'bg-black', textColor = 'text-white' }: TagItemPropsType) {
  return <span className={`pl-3 pr-4 py-2 rounded-r-full ${textColor} text-xs ${tagColor}`}>{children}</span>;
}

export default React.memo(TagItem);
