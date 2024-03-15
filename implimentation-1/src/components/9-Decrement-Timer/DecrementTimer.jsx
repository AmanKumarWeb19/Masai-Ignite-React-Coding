/** Create a functional component that utilizes the useEffect hook to implement a countdown timer. The component should display a countdown starting from a specified number of seconds which has to be mentioned by the user in the form of input. Use the useEffect hook to decrement the timer and update the display every second. When the countdown reaches zero, display a message indicating that the timer has ended. */

import React, { useEffect, useState } from "react";

const DecrementTimer = () => {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const secId = setInterval(() => {
      if (sec > 0) {
        setSec((prevSec) => prevSec - 1);
      } else {
        clearInterval(secId);
      }
    }, 1000);
    return () => {
      clearInterval(secId);
    };
  });

  const handleChange = (e) => {
    setSec(parseInt(e.target.value));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Number Here"
        value={sec}
        onChange={handleChange}
      />
      {sec > 0 ? <h2>{sec}</h2> : <h2>Timer Ended!</h2>}
    </div>
  );
};

export default DecrementTimer;
