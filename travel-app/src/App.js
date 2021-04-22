import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import "./App.css";
//start page
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path="/details/:placeId">
          <Details />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
