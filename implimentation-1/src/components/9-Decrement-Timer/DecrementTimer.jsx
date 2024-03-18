/** Create a functional component that utilizes the useEffect hook to implement a countdown timer. The component should display a countdown starting from a specified number of seconds which has to be mentioned by the user in the form of input. Use the useEffect hook to decrement the timer and update the display every second. When the countdown reaches zero, display a message indicating that the timer has ended. */

import React, { useEffect, useState } from "react";

const DecrementTimer = () => {
  const [decCounter, setDecCounter] = useState(0);

  useEffect(() => {
    const TimerId = setInterval(() => {
      if (decCounter > 0) {
        setDecCounter((prev) => prev - 1);
      } else {
        clearInterval(TimerId);
      }
    }, 1000);
    return () => {
      clearInterval(TimerId);
    };
  }, [decCounter]);

  const handleCount = (e) => {
    setDecCounter(Number(e.target.value));
  };
  return (
    <div>
      <h2>{decCounter > 0 ? decCounter : "Timer Ended!"}</h2>
      <input
        type="text"
        placeholder="enter Number Here"
        onChange={handleCount}
      />
    </div>
  );
};

export default DecrementTimer;

// import React, { useEffect, useState } from "react";

// const DecrementTimer = () => {
//   const [sec, setSec] = useState(0);

//   useEffect(() => {
//     const secId = setInterval(() => {
//       if (sec > 0) {
//         setSec((prev) => prev - 1);
//       } else {
//         clearInterval(secId);
//       }
//     }, 1000);
//     return () => {
//       clearInterval(secId);
//     };
//   }, [sec]);

//   const handleChange = (e) => {
//     setSec(Number(e.target.value));
//   };

//   return (
//     <div>
//       <input type="text" value={sec} onChange={handleChange} />
//       <h2>{sec > 0 ? sec : "Timer Ended!"}</h2>
//     </div>
//   );
// };

// export default DecrementTimer;

// import React, { useEffect, useState } from "react";

// const DecrementTimer = () => {
//   const [sec, setSec] = useState(0);

// useEffect(() => {
//   const secId = setInterval(() => {
//     if (sec > 0) {
//       setSec((prevSec) => prevSec - 1);
//     } else {
//       clearInterval(secId);
//     }
//   }, 1000);
//   return () => {
//     clearInterval(secId);
//   };
// });

//   const handleChange = (e) => {
//     setSec(parseInt(e.target.value));
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter Number Here"
//         value={sec}
//         onChange={handleChange}
//       />
//       {sec > 0 ? <h2>{sec}</h2> : <h2>Timer Ended!</h2>}
//     </div>
//   );
// };

// export default DecrementTimer;
