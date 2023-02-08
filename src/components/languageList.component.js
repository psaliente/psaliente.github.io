import React from "react";

function LanguageList({ Languages }) {
  return Languages.map((l) => (
    <span class="badge bg-primary rounded-pill m-1">{l}</span>
  ));
}

export default LanguageList;
