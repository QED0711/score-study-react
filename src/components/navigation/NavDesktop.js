import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {UserContext} from "../../state/UserProvider";

const NavDesktop = () => {
  const { state: s, stateMethods: sm } = useContext(UserContext);

  return (
    <nav className="navbar navbar-desktop">
      {!s.user && <Link to="/sign-in">Sign In</Link>}
      <Link to="/">About</Link>
      <Link to="/app">Application</Link>
      {/* {!s.user && <Link to="/create-account">Create Account</Link>} */}
      {s.user && <Link to="/logout">Logout</Link>}
      {s.user && <Link to="/account-settings">Account Settings</Link>}
      {s.user && s.user.authorization === "admin" && <Link to="/admin">Admin</Link>}
    </nav>
  );
};

export default NavDesktop;
