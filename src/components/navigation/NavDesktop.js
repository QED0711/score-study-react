import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {UserContext} from "../../state/UserProvider";
import { ComposerContext } from "../../state/ComposerProvider";

const NavDesktop = () => {
  const { state: s, stateMethods: sm } = useContext(UserContext);
  const {state: cs, stateMethods: csm} = useContext(ComposerContext);

  const resetSelectedComposers = () => {
    csm.setSelectedComposers([])
  }
  return (
    <nav className="navbar navbar-desktop">
      {!s.user && <Link to="/sign-in">Sign In</Link>}
      <Link to="/">About</Link>
      <Link to="/app">Application</Link>
      {/* {!s.user && <Link to="/create-account">Create Account</Link>} */}
      {s.user && <Link to="/comments">Your Comments</Link>}
      {s.user && <Link to="/account-settings">Account Settings</Link>}
      {s.user && <Link to="/logout">Logout</Link>}
      {s.user && s.user.authorization === "admin" && <Link to="/admin">Admin</Link>}
    </nav>
  );
};

export default NavDesktop;
