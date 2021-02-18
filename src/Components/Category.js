import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";

import Item from "./Item";

function Category() {
  const { url, path } = useRouteMatch();
  console.log("Category useRouteMatch...", useRouteMatch());
  return (
    <div className="container-outer">
      <ul>
        <li>
          <Link to={`${url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${url}/footwear`}>Footwear</Link>
        </li>
      </ul>
      <Route path={`${path}/:name`}>
        <Item />
      </Route>
    </div>
  );
}

export default Category;
