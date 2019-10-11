import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import UserContext from "../../contexts/UserContext";

const NavDesktop = () => {
  const user = useContext(UserContext);

  return (
    <nav className="navbar navbar-desktop">
      <Link to="/">About</Link>
      <Link to="/app">Application</Link>
      <Link to="/contributing">Contributing</Link>
      {user && user.authorization === "admin" && <Link to="/admin">Admin</Link>}
    </nav>
  );
};

export default NavDesktop;
