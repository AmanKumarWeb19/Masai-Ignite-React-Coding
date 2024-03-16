/** "Create a component that displays a textarea and a character counter. The character counter should update in real time as the user types in the textarea. You should use the useRef hook to implement the character counting functionality.

Expected Output:
When the user types in the textarea, the character counter should display the number of characters entered." */

// import React, { useState } from "react";

// const TextAreaCount = () => {
//   const [textCount, setTextCount] = useState("");
//   const count = textCount.length;

//   const handleCount = (e) => {
//     setTextCount(e.target.value);
//   };

//   return (
//     <div>
//       <textarea onChange={handleCount} cols="30" rows="10"></textarea>
//       <h2>count:{count}</h2>
//     </div>
//   );
// };

// export default TextAreaCount;

import React, { useRef, useState } from "react";

const TextAreaCount = () => {
  const textRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleCount = () => {
    let updatedText = textRef.current.value;
    setCount(updatedText);
  };
  return (
    <div>
      <textarea
        ref={textRef}
        onChange={handleCount}
        cols="30"
        rows="10"
      ></textarea>
      <h2>check Count Alphabet Number :-- {count.length}</h2>
    </div>
  );
};

export default TextAreaCount;

// import React, { useState } from "react";

// const TextAreaCount = () => {
//   const [text, setText] = useState("");
//   const count = text.length;

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <div>
//       <textarea cols="30" rows="10" onChange={handleChange}></textarea>
//       <h2>Text Area Count:-{count}</h2>
//     </div>
//   );
// };

// export default TextAreaCount;

// import React, { useRef, useState } from "react";

// const TextAreaCount = () => {
//   const textRef = useRef(null);
//   const [countText, setCountText] = useState(0);

//   const handleChange = () => {
//     const UpdateText = textRef.current.value;
//     setCountText(UpdateText.length);
//   };

//   return (
//     <div>
//       <textarea
//         ref={textRef}
//         onChange={handleChange}
//         cols="30"
//         rows="10"
//       ></textarea>
//       <h2>Count the Text Length:-{countText}</h2>
//     </div>
//   );
// };

// export default TextAreaCount;
