import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PushkinHome from "../pages/PushkinHome";

function PushkinApp() {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <h1>Test</h1>
        </Route>
        <Route path="/">
          <PushkinHome />
        </Route>
      </Switch>
    </Router>
  );
}

export default PushkinApp;
