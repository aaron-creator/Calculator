import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import button from "./Components/button";
import outputScreen from "./Components/outputScreen";

const App = () => (
  <Router>
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={button} />
          <Route exact path="/outputScreen" component={outputScreen} />
        </Switch>
      </main>
    </div>
  </Router>
);
export default App;
