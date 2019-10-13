import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import UserContext from "./contexts/UserContext";
import ComposerContext from "./contexts/ComposerContext";

import NavDesktop from "./components/navigation/NavDesktop";
import PeriodContainer from "./components/periods/PeriodContainer";
import { getAllWorks, getComposerWorks } from "./js/apiRequests";
import randomScore from "./js/randomScore";
import ScoreDisplay from "./components/ScoreDisplay";
import UserSignIn from "./components/users/UserSignIn";

const testUser = { usename: "qdizon", authorization: "admin" };

function App() {
  const [selectedComposers, setSelectedComposers] = useState([]);
  const [scores, setScores] = useState([]);
  const [selectedScore, setSelectedScore] = useState(null);

  const [user, setUser] = useState(null);
  console.log(user)
  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{user, setUser}}>
          <ComposerContext.Provider
            value={{
              selectedComposers,
              setSelectedComposers,
              scores,
              setScores,
              selectedScore,
              setSelectedScore
            }}
          >
            <NavDesktop />
            <Switch>
              <Route exact path="/">
                <h1>ABOUT</h1>
              </Route>
              <Route exact path="/app">
                <PeriodContainer />
                {selectedScore && <ScoreDisplay />}
              </Route>
              <Route exact path="/sign-in">
                <UserSignIn />
              </Route>
            </Switch>
          </ComposerContext.Provider>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
