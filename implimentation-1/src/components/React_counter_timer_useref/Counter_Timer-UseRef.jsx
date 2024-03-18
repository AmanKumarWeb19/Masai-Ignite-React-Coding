/** Implement a React application that consists of a counter and a timer. The counter starts from 0, and users can increment it by clicking a button. Additionally, there is a timer that counts down from 10 seconds. The button to increment the counter should be disabled once the timer reaches zero. use useRef hook to hold id of intervel. */

import React, { useEffect, useRef, useState } from "react";

const Counter_Timer_UseRef = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(10);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(intervalRef.current);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const Increment = () => {
    if (timer !== 0) {
      setCounter((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h2>Counter:- {counter}</h2>
      <button onClick={Increment} disabled={timer === 0}>
        Increment
      </button>
      <h2>Timer : {timer}</h2>
    </div>
  );
};

export default Counter_Timer_UseRef;

