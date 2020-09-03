import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import IntroPage from "./Pages/SelfIntro";
import LatestWorks from "./Pages/LatestWork";
import TestPage from "./Pages/TestPage";
import XinjiangPage from "./Pages/LandscapePages/XinjiangPage";
const PageRouter = (props) => {
  return (
    <Switch>
      <Route path="/latestworks" component={() => <LatestWorks />} />
      <Route path="/collections" component={() => <h1>Hi</h1>} />
      <Route path="/landscape/xinjiang" component={() => <XinjiangPage />} />
      <Route path="/landscape" component={() => <h1>Hi</h1>} />
      <Route path="/about" component={IntroPage} />
      <Route path="/test" component={TestPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default PageRouter;
