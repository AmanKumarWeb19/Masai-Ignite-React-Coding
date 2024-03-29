// Create a functional component that implements a toggle button using the useState hook. The button should toggle between "On" and "Off" when clicked, and the initial state should be "Off". Additionally, style the button to visually represent its current state.

import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleChange = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      <button
        className={isToggle ? "toggle-on" : "toggle-off"}
        onClick={handleChange}
      >
        {isToggle ? "On" : "Off"}
      </button>
    </div>
  );
};

export default ToggleButton;

// import React, { useState } from "react";
// import "./ToggleButton.css";

// const ToggleButton = () => {
//   const [isToggle, setIsToggle] = useState(false);

//   const checkToggle = () => {
//     setIsToggle(!isToggle);
//   };

//   return (
//     <div className="toggle-button">
//       <p className="text">
//         Create a functional component that implements a toggle button using the
//         useState hook. The button should toggle between "On" and "Off" when
//         clicked, and the initial state should be "Off". Additionally, style the
//         button to visually represent its current state.
//       </p>
//       <button
//         className={isToggle ? "toggle-button-on" : "toggle-button-off"}
//         onClick={checkToggle}
//       >
//         {isToggle ? "On" : "Off"}
//       </button>{" "}
//       <span>⬅ Please Click and Check. </span>
//     </div>
//   );
// };

// export default ToggleButton;

// import React, { useState } from "react";
// import "./ToggleButton.css";

// const ToggleButton = () => {
//   const [toggle, setToggle] = useState(false);

//   const handleClick = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <div>
//       <button
//         className={toggle ? "toggle-on" : "toggle-off"}
//         onClick={handleClick}
//       >
//         {toggle ? "ON" : "OFF"}
//       </button>
//     </div>
//   );
// };

// export default ToggleButton;
