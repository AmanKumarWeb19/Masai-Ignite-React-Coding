// import React from "react";
// import { useLocation } from "react-router-dom";

// const Results = () => {
//   const location = useLocation();
//   // console.log(location);
//   return (
//     <div>
//       <h2>Name:{location.state.name}</h2>
//       <h2>Age:{location.state.age}</h2>
//     </div>
//   );
// };

// export default Results;

import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  return (
    <div>
      <h3>Name:- {location.state.name}</h3>
      <h3>Age:- {location.state.age}</h3>
    </div>
  );
};

export default Results;
