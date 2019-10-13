import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import UserContext from "../../contexts/UserContext";

import { signInUser } from "../../js/apiRequests";

const UserSignIn = () => {
  const { user, setUser } = useContext(UserContext);

    if(user){
        return <Redirect to="/app"/>
    }

  const handleSubmit = e => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    signInUser({ username, password }, setUser);
  };

  return (
    <section className="content-container">
      <form id="user-sign-in" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input id="username" type="text" required placeholder="Username" />

        <br />

        <label htmlFor="password">Password:</label>
        <br />
        <input id="password" type="password" required placeholder="Password" />

        <br />

        <input type="submit" value="Sign In" />
      </form>
      <p>
        Don't have an account? Create one <Link to="/sign-up">here</Link>.
      </p>
    </section>
  );
};

export default UserSignIn;