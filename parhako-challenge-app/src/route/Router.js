import React from "react";
import Cart from "../pages/Cart";
import Header from "../pages/Header";
import Photos from "../pages/Photos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <div className="App">
          <Route path="/cart" component={Cart} />
          <Route path="/" exact component={Photos} />
        </div>
      </Switch>
    </Router>
  );
};

export default Routes;
