/**Create a parent component and two child components. The parent component should include a state variable called "counter" initialized to 0. The first child component should display the current counter value and provide buttons to increment and decrement the counter. The second child component should display a reset button that resets the counter to 0. Implement the necessary state upliftment mechanism using props and callbacks to ensure that the counter state is maintained in the parent component and synchronized between the two child components. */

import React, { useState } from "react";
import Child_Component from "./Child_Component";

const Parent_Component = () => {
  const [counter, setCounter] = useState(0);

  const Increament = () => {
    setCounter(counter + 1);
  };

  const Decreament = () => {
    setCounter(counter - 1);
  };

  const Reset=()=>{
    setCounter(0)
  }

  return (
    <div>
      <h1>Counter:- {counter}</h1>
      <button onClick={Increament}>increment</button>
      <button onClick={Decreament}>decrement </button>
      <Child_Component Reset={Reset}/>
    </div>
  );
};

export default Parent_Component;
