// External imports
import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

// Local imports
import Home from "./Home";
import Category from "./Category";
import Products from "./Products";


function App() {
  console.log("App useRouteMatch...", useRouteMatch());
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
