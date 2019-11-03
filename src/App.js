import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import "./css/periods.css";

import UserProvider from "./state/UserProvider";
import ComposerProvider from './state/ComposerProvider';

import NavDesktop from "./components/navigation/NavDesktop";
import PeriodContainer from "./components/periods/PeriodContainer";
import ScoreDisplay from "./components/ScoreDisplay";
import UserSignIn from "./components/users/UserSignIn";
import Logout from "./components/users/Logout";

const testUser = { usename: "qdizon", authorization: "admin" };

function App() {
  // const [composers, setComposers] = useState(null)
  // const [selectedComposers, setSelectedComposers] = useState([]);
  // const [scores, setScores] = useState([]);
  // const [selectedScore, setSelectedScore] = useState(null);

  // const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <UserProvider>
          <ComposerProvider>

            <NavDesktop />
            <Switch>
              <Route exact path="/">
                <h1>ABOUT</h1>
              </Route>
              <Route exact path="/app">
                <PeriodContainer />
                <ScoreDisplay />
              </Route>
              <Route exact path="/sign-in">
                <UserSignIn />
              </Route>
              <Route exact path="/logout">
                 <Logout />
              </Route>
            </Switch>

          </ComposerProvider>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
