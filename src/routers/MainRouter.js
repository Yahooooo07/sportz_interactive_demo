import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PlayersListing from "../pages/PlayersListing";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PlayersListing />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
