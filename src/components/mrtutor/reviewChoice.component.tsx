import { MouseEventHandler } from "react";

type MrTReviewChoicePropType = {
  answer: string,
  onSelect: (a: string) => MouseEventHandler<HTMLAnchorElement>
}

function MrTReviewChoice({ answer, onSelect }: MrTReviewChoicePropType) {
  return (
    <>
      <a onClick={onSelect(answer)}>{answer}</a>
    </>
  );
}

export default MrTReviewChoice;
