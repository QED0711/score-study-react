import React, { useState } from "react";
import "./App.css";

import UserContext from "./contexts/UserContext";
import ComposerContext from "./contexts/ComposerContext";

import NavDesktop from "./components/navigation/NavDesktop";
import Period from "./components/periods/Period";
import PeriodContainer from "./components/periods/PeriodContainer";



const testComposers = [
  {composer: 'Webern, Anton', displayName: "Webern", period: "20th"},
  {composer: 'Beethoven, Ludwig Van', displayName: "Beethoven", period: "classical"},
  {composer: 'Berlioz, Hector', displayName: "Berlioz", period: "romantic"},
  {composer: 'Bach, Johann Sebastian', displayName: "JS Bach", period: "baroque"},
  {composer: 'Perotin', displayName: "Perotin", period: "early"},
]

function App() {
  
  const [composers, setComposers] = useState(testComposers);


  return (
    <div className="App">
      <UserContext.Provider value={{usename: 'qdizon', authorization: 'admin'}}>
        <ComposerContext.Provider value={composers}>
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
