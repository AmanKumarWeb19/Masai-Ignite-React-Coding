/** Create a React login form that allows users to input their username and password. Utilize React states to store user input values and perform client-side validation. Implement validation checks to verify the correctness of the entered information. Display a "Welcome, ${name}" message upon successful login and show appropriate error messages if validation fails. Ensure the form is responsive and provides a user-friendly experience. */

import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
    setError("");
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !password) {
      setError("Please enter both username and password");
    } else if (userName !== "example" || password !== "password") {
      setError("Incorrect username or password");
    } else {
      setError("");
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setUserName("");
    setPassword("");
    setError(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome , {userName}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          <label htmlFor="usename">UserName:- </label>
          <input
            type="text"
            value={userName}
            placeholder="Enter UserName"
            onChange={handleChangeUserName}
          />
          <br />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={handleChangePassword}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
