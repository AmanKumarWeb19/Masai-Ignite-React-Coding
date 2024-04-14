import React from "react";

const DataCard = ({ name, username, email, address, phone }) => {
  return (
    <>
      <h1>Name:- {name}</h1>
      <h3>UserName:- {username}</h3>
      <h4>Phone:- {phone}</h4>
      <p>Email:- {email}</p>
      <p>
        Address:- {address.street}, {address.suite}, {address.city}
      </p>
    </>
  );
};

export default DataCard;
