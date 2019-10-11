import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const NavDesktop = () => {
  const user = useContext(UserContext);

  return (
    <nav className="navbar navbar-desktop">
      <div>About</div>
      <div>Contributing</div>
      {user && user.authorization === "admin" && <div>Admin</div>}
    </nav>
  );
};

export default NavDesktop;
