/** Create a functional component that utilizes the useEffect hook to implement a timer. When the component mounts, start a timer that increments every second. Display the elapsed time in the component. Use the useEffect hook to handle starting and stopping the timer when the component mounts and unmounts respectively. Additionally, include a button that, when clicked, resets the timer back to zero. */

import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let TimerId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(TimerId);
    };
  }, []);
  const Reset = () => {
    setTimer(0);
  };
  return (
    <div>
      <h1>Timer:- {timer}</h1> <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Timer;

// import React, { useEffect, useState } from "react";

// const Timer = () => {
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     let TimerId = setInterval(() => {
//       setTimer((prevTime) => prevTime + 1);
//     }, 1000);
//     return () => {
//       clearInterval(TimerId);
//     };
//   });

//   const Reset = () => {
//     setTimer(0);
//   };

//   return (
//     <div>
//       <h2>{timer}</h2>
//       <button onClick={Reset}>Reset</button>
//     </div>
//   );
// };

// export default Timer;

// import React, { useEffect, useState } from "react";

// const Timer = () => {
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     const TimerId = setInterval(() => {
//       setTimer((prevTimer) => prevTimer + 1);
//     }, 1000);
//     return () => clearInterval(TimerId);
//   }, []);

//   const ResetTimer = () => {
//     setTimer(0);
//   };
//   return (
//     <div>
//       <h2>Timer :{timer}</h2>
//       <button onClick={ResetTimer}>Reset</button>
//     </div>
//   );
// };

// export default Timer;
