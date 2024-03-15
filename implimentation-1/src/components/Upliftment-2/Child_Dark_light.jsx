import React from "react";

const Child_Dark_light = ({ theme, checkToggleTheme }) => {
  return (
    <div>
      <button onClick={checkToggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Child_Dark_light;
