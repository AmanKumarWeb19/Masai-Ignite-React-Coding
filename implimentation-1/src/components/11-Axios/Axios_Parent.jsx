// Develop a User Details application that leverages the JSONPlaceholder API (https://jsonplaceholder.typicode.com/users). The app should fetch user data using Axios within the parent component, and for each user, render comprehensive details through a child component (User.jsx). Utilize destructuring for efficient data extraction and dynamically map the user data to generate markup for each user. The child component should encapsulate the presentation of user information, fostering a clean and modular design.

import React, { useEffect, useState } from "react";
import axios from "axios";
import Axios_Child from "./Axios_Child";

const Axios_Parent = () => {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    try {
      const fetchApi = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUser(fetchApi.data);
      console.log(fetchApi.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>UserDetails</h2>
      <div>
        {user.map((user) => (
          <Axios_Child key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Axios_Parent;
