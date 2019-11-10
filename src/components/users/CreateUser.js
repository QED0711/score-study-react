import React, { useContext, useState } from "react";
import { UserContext } from "../../state/UserProvider";
import { Redirect } from "react-router-dom";

// API
import { createUser } from "../../js/apiRequests";


const CreateUser = () => {
  const { state: s, stateMethods: sm } = useContext(UserContext);
  const [passwordMatch, setPasswordMatch] = useState(null);
  
  if (s.user) return <Redirect to="/" />;
  
  const handleSubmit = e => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;

    if (password !== passwordConfirm) {
      setPasswordMatch("no match");
    } else {
      setPasswordMatch("match");
      // const hashedPassword = bcrypt.hashSync(password, salt);
      createUser({ username, email, password }, sm);
    }
  };

  return (
    <div>
      <form id="create-user-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input id="username" type="text" required />

        <br />

        <label htmlFor="email">*Email</label>
        <br />
        <input id="email" type="email" />

        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input id="password" type="password" required />

        <br />

        <label htmlFor="password-confirm">Confirm Password</label>
        <br />
        <input id="password-confirm" type="password" required />

        <br />

        <input type="submit" value="Create Account" />
      </form>
      {passwordMatch === "no match" && (
        <h4 style={{ color: "red" }}>Passwords do not match</h4>
      )}
      <h5>
        * An email address is optional, and it will only be used to verify your
        identity in the event that you lose access to your account.
      </h5>
    </div>
  );
};

export default CreateUser;
