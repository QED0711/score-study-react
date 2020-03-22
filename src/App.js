import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import "./css/navigation.css";
import "./css/elements.css";
import "./css/user.css";
import "./css/score-display.css";
import "./css/periods.css";
import "./css/comments.css";
import "./css/modals.css";

import UserProvider from "./state/UserProvider";
import ComposerProvider from './state/ComposerProvider';

import NavDesktop from "./components/navigation/NavDesktop";
import PeriodContainer from "./components/periods/PeriodContainer";
import ScoreDisplay from "./components/score/ScoreDisplay";
import UserSignIn from "./components/users/UserSignIn";
import CreateUser from "./components/users/CreateUser";
import Logout from "./components/users/Logout";
import AccountSettings from "./components/users/AccountSettings";
import UserComments from "./components/comments/UserComments";
import About from './components/About'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <UserProvider>
          <ComposerProvider>

            <NavDesktop />
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route exact path="/app">
                <PeriodContainer />
                <ScoreDisplay />
              </Route>
              <Route exact path="/sign-in">
                <UserSignIn />
              </Route>
              <Route exact path="/create-account">
                <CreateUser />
              </Route>
              <Route exact path="/comments">
                <UserComments />
              </Route>
              <Route exact path="/account-settings">
                <AccountSettings />
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
