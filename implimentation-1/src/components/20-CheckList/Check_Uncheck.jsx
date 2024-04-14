/** "Develop a React checklist component that allows users to select multiple options. Utilize React state to manage the checked status of each option. Implement an onChange event handler to update the state dynamically when a user checks or unchecks an option. Display the checklist with clear labels and provide real-time feedback by rendering the selected options below the checklist. The component should be modular, well-organized, and responsive." */

import React, { useState } from "react";

const Check_Uncheck = ({ options }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };
  return (
    <div className="checklist-container">
    <div className="checklist">
      {options.map((option, index) => (
        <label key={index} className="checklist-item">
          <input
            type="checkbox"
            name={option}
            checked={checkedItems[option] || false}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
    <div className="selected-options">
      <h2>Selected Options</h2>
      <ul>
        {options.map((option, index) => (
          checkedItems[option] && <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default Check_Uncheck;
