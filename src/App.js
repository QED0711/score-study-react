import React from "react";
import "./App.css";

import UserContext from "./contexts/UserContext";

import NavDesktop from "./components/navigation/NavDesktop";
import Period from './components/Period';

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"hello world"}>
        <NavDesktop />

        <Period era={"early"} />
        <Period era={"baroque"} />
        <Period era={"classical"} />
        <Period era={"romantic"} />
        <Period era={"20th-century"} />
        
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
