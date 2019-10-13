import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../../contexts/UserContext";

const NavDesktop = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar navbar-desktop">
      {!user && <Link to="/sign-in">Sign In</Link>}
      <Link to="/">About</Link>
      <Link to="/app">Application</Link>
      <Link to="/contributing">Contributing</Link>
      {user && <Link to="/logout">Logout</Link>}
      {user && user.authorization === "admin" && <Link to="/admin">Admin</Link>}
    </nav>
  );
};

export default NavDesktop;
