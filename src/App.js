import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import UserContext from "./contexts/UserContext";
import ComposerContext from "./contexts/ComposerContext";

import NavDesktop from "./components/navigation/NavDesktop";
import PeriodContainer from "./components/periods/PeriodContainer";

const testUser = { usename: "qdizon", authorization: "admin" };

function App() {
  const [selectedComposers, setSelectedComposers] = useState([]);
  const [user, setUser] = useState(testUser);

  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={user}>
          <ComposerContext.Provider
            value={{ selectedComposers, setSelectedComposers }}
          >
            <NavDesktop />
            <Switch>

              <Route exact path="/">
                <h1>ABOUT</h1>
              </Route>
              <Route exact path="/app">
                <PeriodContainer />
              </Route>
            </Switch>
          </ComposerContext.Provider>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
