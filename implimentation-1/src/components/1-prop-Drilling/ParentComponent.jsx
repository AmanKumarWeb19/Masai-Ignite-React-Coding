// import React from "react";
// import ChildComponent from "./ChildComponent";

// const ParentComponent = ({ message }) => {
//   return (
//     <div>
//       <h1>Props Drilling...</h1>
//       <ChildComponent message={message} />
//     </div>
//   );
// };

// export default ParentComponent;

import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = ({ message }) => {
  return (
    <div>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;
