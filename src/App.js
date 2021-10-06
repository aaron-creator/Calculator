import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import KeyPad from "./Components/KeyPad";

const App = () => (
  <Router>
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={KeyPad} />
        </Switch>
      </main>
    </div>
  </Router>
);
export default App;
