import React from "react";

const Axios_Child = ({ user }) => {
  const { username, name, email, phone, company, address } = user;
  return (
    <div>
      <div>
        <h2>UserName: {username}</h2>
        <h3>Name: {name}</h3>
        <h4>Email: {email}</h4>
        <h5>Phone: {phone}</h5>
        <h5>
          Company:- {company.name}, bs :- {company.bs}
        </h5>
        <h5>Address :- {address.street}, ZipCode:- {address.zipcode}</h5>
      </div>
    </div>
  );
};

export default Axios_Child;
