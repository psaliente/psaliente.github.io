function MrTReviewChoice({ answer, onSelect }) {
  return (
    <>
      <a onclick={onSelect.bind(this, answer)}>{answer}</a>
    </>
  );
}

export default MrTReviewChoice;
