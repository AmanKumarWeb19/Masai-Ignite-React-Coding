import React from "react";

const Mesg_Child = ({ message, setMessage }) => {
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Enter Text"
      />
    </div>
  );
};

export default Mesg_Child;
