import React from "react";
import ParentComponent from "./ParentComponent";

const GrandParent = () => {
  let message = "Welcome to check prop Drilling..!";
  return (
    <>
      <div>
        <ParentComponent message={message} />
      </div>
    </>
  );
};

export default GrandParent;
