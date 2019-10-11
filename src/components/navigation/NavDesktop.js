import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const NavDesktop = () => {
  const msg = useContext(UserContext);
  console.log(msg)
  return (
    <nav className="navbar navbar-desktop">
      <div></div>
      <div></div>
    </nav>
  );
};

export default NavDesktop;
