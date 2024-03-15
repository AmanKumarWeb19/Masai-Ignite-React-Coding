/**"Implement a functional component that utilizes the useEffect hook to fetch and display data from an API when the component mounts. Additionally, add a loading state that is displayed while the data is being fetched. Use the useEffect hook to handle the API call and manage the loading state. Ensure that the API call is only made once when the component mounts, and that the loading state is updated accordingly.
API Endpoint : https://jsonplaceholder.typicode.com/posts" */

import React, { useEffect, useState } from "react";

const Fetch_Api = () => {
  const [post, setPost] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonData = await fetchData.json();
      setPost(jsonData);
      setloading(false);
    } catch (err) {
      console.log("Err", err);
      setloading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ border: "1px solid red", width: "50%", margin: "auto" }}>
      {loading ? (
        <p>Loading......</p>
      ) : (
        <ol>
          {post.map((post) => (
            <li style={{ width: "100%" }} key={post.id}>
              <h2 style={{ color: "red" }}>{post.title}</h2>
              <h3>{post.body}</h3>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Fetch_Api;

