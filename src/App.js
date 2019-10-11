import React, { useState } from "react";
import "./App.css";

import UserContext from "./contexts/UserContext";
import ComposerContext from "./contexts/ComposerContext";

import NavDesktop from "./components/navigation/NavDesktop";
import PeriodContainer from "./components/periods/PeriodContainer";

const testUser = { usename: "qdizon", authorization: "admin" };

function App() {
  const [selectedComposers, setSelectedComposers] = useState([]);
  const [user, setUser] = useState(testUser)

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <ComposerContext.Provider
          value={{ selectedComposers, setSelectedComposers }}
        >
          <NavDesktop />
          <PeriodContainer />
        </ComposerContext.Provider>
      </UserContext.Provider>
      {/* 
      ROUTER
        NAVIGATION
          admin (if admin)  
          login

      


        USER_INTERFACE

        the following show up no matter if someone is signed in or not

        PERIOD period={early}
        PERIOD period={baroque}
        PERIOD period={classical}
        PERIOD period={romantic}
        PERIOD period={20th-century}


      */}
    </div>
  );
}

export default App;
