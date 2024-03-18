import React from "react";

const Mesg_Child = ({ msg, setMsg }) => {
  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Text Heer"
        value={msg}
        onChange={handleChange}
      />
    </div>
  );
};

export default Mesg_Child;

// import React from "react";

// const Mesg_Child = ({ message, setMessage }) => {
//   const handleChange = (e) => {
//     setMessage(e.target.value);
//   };

//   return (
//     <div>
//       <h1>Message:{message}</h1>
//       <input
//         type="text"
//         value={message}
//         placeholder="Enter Something Here"
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// export default Mesg_Child;

// import React from "react";

// const Mesg_Child = ({ message, setMessage }) => {
//   const handleChange = (e) => {
//     setMessage(e.target.value);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         value={message}
//         onChange={handleChange}
//         placeholder="Enter Text"
//       />
//     </div>
//   );
// };

// export default Mesg_Child;
