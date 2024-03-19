/** Develop a React component that fetches data from a public REST API (e.g., https://jsonplaceholder.typicode.com/todos/1) using the fetch() function. Utilize React states to store the API response and the useEffect hook for handling side effects. Upon clicking a button labeled "Fetch API Data," the component should trigger the API call, update the state with the fetched data, and display the response in a structured format. Ensure proper error handling for the API request and display an error message if applicable. The solution should be well-organized and adhere to best practices in React development. */

import React, { useEffect, useState } from "react";

const Todo = () => {
  const [resData, setResData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errormsg, setErrorMsg] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const fetchApi = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      if (!fetchApi.ok) {
        throw new Error("Failed to fetch Data");
      }
      const jsonData = await fetchApi.json();
      // console.log(jsonData);
      setResData(jsonData);
    } catch (err) {
      setErrorMsg("An error occured while fetching data!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? "Fetching...." : "FETCH API DATA"}
      </button>
      {errormsg && <p>Error: {errormsg}</p>}
      {resData && (
        <div>
          <h2>Response Data:-</h2>
          <pre>{JSON.stringify(resData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Todo;
