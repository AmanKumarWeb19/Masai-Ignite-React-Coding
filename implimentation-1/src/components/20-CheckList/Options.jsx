import React from "react";
import Check_Uncheck from "./Check_Uncheck";

const Options = () => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  return (
    <div>
      <h1>CHECKLIST :-</h1>
      <Check_Uncheck options={options} />
    </div>
  );
};

export default Options;
