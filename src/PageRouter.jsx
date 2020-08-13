import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import IntroPage from "./Pages/SelfIntro";
const PageRouter = (props) => {
  return (
    <Switch>
      <Route path="/latestwork" component={() => <h1>Hi</h1>} />
      <Route path="/collections" component={() => <h1>Hi</h1>} />
      <Route path="/landscape" component={() => <h1>Hi</h1>} />
      <Route path="/about" component={IntroPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default PageRouter;
