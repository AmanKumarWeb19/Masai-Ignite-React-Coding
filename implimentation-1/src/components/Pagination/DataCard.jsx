import React from "react";

const DataCard = ({ id, name, username, email }) => {
  return (
    <>
      <div>
        <h1>ID:- {id}</h1>
        <h1>Name:- {name}</h1>
        <h2>UserName:- {username}</h2>
        <h2>Email:- {email}</h2>
      </div>
    </>
  );
};

export default DataCard;
