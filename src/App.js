import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";

const App = () => (
  <Router>
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </div>
  </Router>
);
export default App;
