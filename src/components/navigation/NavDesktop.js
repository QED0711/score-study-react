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
      <Link to="/contributing">Contributing</Link>
      {s.user && <Link to="/logout">Logout</Link>}
      {s.user && s.user.authorization === "admin" && <Link to="/admin">Admin</Link>}
    </nav>
  );
};

export default NavDesktop;
