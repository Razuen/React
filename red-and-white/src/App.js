import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/shop" />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route path={"/shop/:categoryId?"}>
          <Product />
        </Route>

        <Route exact path="/confirmOrder">
          <PlaceOrder />
        </Route>
        <Route>
          <Redirect to="/shop" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
