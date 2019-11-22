import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import "./css/navigation.css";
import "./css/periods.css";

import UserProvider from "./state/UserProvider";
import ComposerProvider from './state/ComposerProvider';

import NavDesktop from "./components/navigation/NavDesktop";
import PeriodContainer from "./components/periods/PeriodContainer";
import ScoreDisplay from "./components/ScoreDisplay";
import UserSignIn from "./components/users/UserSignIn";
import CreateUser from "./components/users/CreateUser";
import Logout from "./components/users/Logout";
import AccountSettings from "./components/users/AccountSettings";

function App() {

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
              <Route exact path="/create-account">
                <CreateUser />
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
