/** "Implement a parent component and a child component. The parent component should have a state variable called ""message"" initialized to a default message using the useState hook. Pass this ""message"" state variable as a prop to the child component and display it there. Additionally, provide an input field in the child component to update the message. Implement an event handler in the child component that modifies the ""message"" state using the useState hook.
Hint (Child-Parent Component Communication )" */

import React, { useState } from "react";
import Mesg_Child from "./Mesg_Child";

const Mesg_Parent = () => {
  const [message, setMessage] = useState("I am Aman");

  return (
    <div>
    
      <Mesg_Child message={message} setMessage={setMessage} />
    </div>
  );
};

export default Mesg_Parent;

// import React, { useState } from "react";
// import Mesg_Child from "./Mesg_Child";

// const Mesg_Parent = () => {
//   const [message, setMessage] = useState("I am Aman");

//   return (
//     <div>
//       <h2>Parent to Child Communication :- {message}</h2>
//       <Mesg_Child message={message} setMessage={setMessage} />
//     </div>
//   );
// };

// export default Mesg_Parent;
