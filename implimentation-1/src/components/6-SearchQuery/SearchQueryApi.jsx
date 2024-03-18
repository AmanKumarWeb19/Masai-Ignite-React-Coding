/** "Implement a functional component that uses the useEffect hook to fetch data from an API endpoint. The component should have an input field where the user can enter a search query. When the search query changes, use the useEffect hook to make an API call with the updated query and display the fetched data in the component. Ensure that the API call is only triggered when the search query changes. ( Use json server )
API Endpoint: 
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/users?q=Ervin" */

import React, { useEffect, useState } from "react";

const SearchQueryApi = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async (query) => {
    try {
      const fetchApi = await fetch(
        `https://jsonplaceholder.typicode.com/users?q=${query}`
      );
      const jsonData = await fetchApi.json();
      setUser(jsonData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(searchQuery);
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search Text"
        onChange={handleSearch}
      />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ol>
          {user.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default SearchQueryApi;

// import React, { useEffect, useState } from "react";

// const SearchQueryApi = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");

//   const fetchData = async (query) => {
//     const fetchApi = await fetch(
//       `https://jsonplaceholder.typicode.com/users?q=${query}`
//     );
//     const jsonData = await fetchApi.json();
//     setData(jsonData);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData(searchQuery);
//   }, [searchQuery]);

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search Name"
//         value={searchQuery}
//         onChange={handleSearch}
//       />

//       {loading ? (
//         <p>Loading......</p>
//       ) : (
//         <ol>
//           {data.map((user) => (
//             <li key={user.id}>
//               <h1>{user.name}</h1>
//             </li>
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// };

// export default SearchQueryApi;

// import React, { useEffect, useState } from "react";

// const SearchQueryApi = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [serachQueary, setSearchQuery] = useState("");

//   const fetchData = async (query) => {
//     try {
//       const apiData = await fetch(
//         `https://jsonplaceholder.typicode.com/users?q=${query}`
//       );
//       const jsonData = await apiData.json();
//       console.log(jsonData);
//       setData(jsonData);
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchData(serachQueary);
//   }, [serachQueary]);

//   const handleChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search Name"
//         value={serachQueary}
//         onChange={handleChange}
//       />
//       {loading ? (
//         <p>Loading.........</p>
//       ) : (
//         <ol>
//           {data.map((user) => (
//             <li key={user.id}>
//               <h2>{user.name}</h2>
//             </li>
//           ))}
//         </ol>
//       )}
//     </div>
//   );
// };

// export default SearchQueryApi;
