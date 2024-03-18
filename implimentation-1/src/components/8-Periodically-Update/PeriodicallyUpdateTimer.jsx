/** Implement a functional component that periodically updates the UI with the current time. Use the useEffect hook to set up an interval that updates the time every second. However, when the component is about to unmount, ensure that the interval is cleared to avoid any memory leaks or unnecessary computations. */

import React, { useEffect, useState } from "react";

const PeriodicallyUpdateTimer = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const TimerId = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => {
      clearInterval(TimerId);
    };
  });

  return (
    <div>
      <h2>Time:-{timer.toLocaleTimeString()}</h2>
    </div>
  );
};

export default PeriodicallyUpdateTimer;

// import React, { useEffect, useState } from "react";

// const PeriodicallyUpdateTimer = () => {
//   const [timer, setTimer] = useState(new Date());

//   useEffect(() => {
//     let TimerId = setInterval(() => {
//       setTimer(new Date());
//     }, 1000);
//     return () => {
//       clearInterval(TimerId);
//     };
//   }, []);

//   return (
//     <div>
//       <h2>Time:- {timer.toLocaleTimeString()}</h2>
//     </div>
//   );
// };

// export default PeriodicallyUpdateTimer;

// import React, { useEffect, useState } from "react";

// const PeriodicallyUpdateTimer = () => {
//   const [timer, setTimer] = useState(new Date());

//   useEffect(() => {
//     const TimerId = setInterval(() => {
//       setTimer(new Date());
//     }, 1000);
//     return () => {
//       clearInterval(TimerId);
//     };
//   });
//   return (
//     <div>
//       <h1>Periodic Timer:- {timer.toLocaleTimeString()}</h1>
//     </div>
//   );
// };

// export default PeriodicallyUpdateTimer;
