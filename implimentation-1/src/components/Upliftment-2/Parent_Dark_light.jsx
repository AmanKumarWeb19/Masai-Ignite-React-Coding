/**Create a parent component and a child component. The parent component should include a state variable called "theme" initialized to "light". The child component should display a button labeled "Toggle Theme". On clicking the button, the theme should toggle between "light" and "dark". Implement the necessary state upliftment mechanism using props and callbacks to ensure that the child component can update the theme state in the parent component. */

// import React, { useState } from "react";
// import Child_Dark_light from "./Child_Dark_light";

// const Parent_Dark_light = () => {
//   const [theme, setTheme] = useState("light");

//   const checkToggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <div>
//       <h1>Theme: {theme}</h1>
//       <Child_Dark_light theme={theme} checkToggleTheme ={checkToggleTheme} />
//     </div>
//   );
// };

// export default Parent_Dark_light;

import React, { useState } from "react";
import Child_Dark_light from "./Child_Dark_light";

const Parent_Dark_light = () => {
  const [theme, setTheme] = useState("light");

  const themeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <h1>{theme}</h1>
      <Child_Dark_light themeChange={themeChange} />
    </div>
  );
};

export default Parent_Dark_light;
