// import React from "react";

// const Child_Dark_light = ({ theme, checkToggleTheme }) => {
//   return (
//     <div>
//       <button onClick={checkToggleTheme}>Toggle Theme</button>
//     </div>
//   );
// };

// export default Child_Dark_light;

// import React from "react";

// const Child_Dark_light = ({ themeChange }) => {
//   return (
//     <div>
//       <button onClick={themeChange}>Toggle Theme</button>
//     </div>
//   );
// };

// export default Child_Dark_light;

import React from "react";

const Child_Dark_light = ({ theme, setTheme }) => {
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Theme</button>
    </div>
  );
};

export default Child_Dark_light;
