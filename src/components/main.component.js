import React from "react";

function MainPage({ component }) {
  const ActiveComponent = component;
  return (
    <>
      <ActiveComponent></ActiveComponent>
    </>
  );
}

export default MainPage;
