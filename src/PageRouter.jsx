import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";

const PageRouter = (props) => {
  return (
    <Switch>
      <Route path="/portfolio/collections" component={() => <h1>Shit</h1>} />
      <Route path="/portfolio/landscape" component={() => <h1>Shit</h1>} />
      <Route path="/portfolio/about" component={() => <h1>Shit</h1>} />
      <Route path="/portfolio" component={HomePage} />
    </Switch>
  );
};

export default PageRouter;
