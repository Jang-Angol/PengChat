import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LobbyPage from "./pages/LobbyPage";
import TestPage from "./pages/TestPage";

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={LoginPage} exact={true} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/lobby" component={LobbyPage} />
      <Route path="/test" component={TestPage} />
    </div>
  );
};

export default App;
