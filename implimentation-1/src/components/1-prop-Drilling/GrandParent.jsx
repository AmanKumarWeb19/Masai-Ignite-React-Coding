// import React from "react";
// import ParentComponent from "./ParentComponent";

// const GrandParent = () => {
//   let message = "Welcome to check prop Drilling..!";
//   return (
//     <>
//       <div>
//         <ParentComponent message={message} />
//       </div>
//     </>
//   );
// };

// export default GrandParent;
import React from "react";
import ParentComponent from "./ParentComponent";

const GrandParent = () => {
  let message = "Welcome to PropDrilling World .....!";
  return (
    <div
      style={{
        border: "2px solid red",
        width: "50%",
        padding: "15px",
        textAlign: "center",
        margin: "auto",
        fontSize: "30px",
        fontWeight: "bold",
        fontStyle: "italic",
        marginTop: "50Px",
      }}
    >
      <ParentComponent message={message} />
    </div>
  );
};

export default GrandParent;
