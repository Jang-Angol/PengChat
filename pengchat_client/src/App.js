import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LobbyPage from "./pages/LobbyPage";

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/lobby" component={LobbyPage} />
    </div>
  );
};

export default App;
