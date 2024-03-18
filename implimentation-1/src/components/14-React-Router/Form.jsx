/** Create a React application that uses React Router for navigation. The application consists of two components: a Form component and a Results component. The Form component captures user details, such as name and favourite age, and upon submission, redirects the user to the Results component using useNavigate hook. */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results", { state: formData });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:- </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="name">Age:- </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          placeholder="Enter Age"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Form = () => {
//   const [formData, setFormData] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
//   console.log(formData);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/results", { state: formData });
//   };
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:-</label>
//         <input
//           type="text"
//           placeholder="enter name"
//           value={formData.name}
//           name="name"
//           onChange={handleChange}
//         />
//         <br />
//         <label htmlFor="name">Age:-</label>
//         <input
//           type="number"
//           placeholder="enter age"
//           value={formData.age}
//           name="age"
//           onChange={handleChange}
//         />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Form;
