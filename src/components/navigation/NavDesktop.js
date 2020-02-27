import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../state/UserProvider";
import { ComposerContext } from "../../state/ComposerProvider";

const NavDesktop = () => {
  const { state: s, stateMethods: sm } = useContext(UserContext);
  const { state: cs, stateMethods: csm } = useContext(ComposerContext);

  // HELPERS
  const resetSelectedComposers = () => {
    csm.setSelectedComposers([])
  }

  const resetSelectedScore = () => {
    csm.setSelectedScore(null)
  }

  return (
    <nav className="navbar navbar-desktop">
      {!s.user && <Link to="/sign-in">Sign In</Link>}
      <Link to="/">About</Link>
      <Link to="/app" onClick={resetSelectedScore} >Application</Link>
      {/* {!s.user && <Link to="/create-account">Create Account</Link>} */}
      {s.user && <Link to="/comments" onClick={resetSelectedScore} >Your Comments</Link>}
      {s.user && <Link to="/account-settings">Account Settings</Link>}
      {s.user && <Link to="/logout">Logout</Link>}
      {s.user && s.user.authorization === "admin" && <Link to="/admin">Admin</Link>}

      {s.user && <em>Signed in as: {s.user.username}</em>}
    </nav>
  );
};

export default NavDesktop;
