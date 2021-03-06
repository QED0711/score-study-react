import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../../state/UserProvider";

const Logout = () => {
  const { stateMethods: sm } = useContext(UserContext);

  sm.setUser(null);

  return <Redirect to="/" />;
};

export default Logout;
