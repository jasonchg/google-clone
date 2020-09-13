import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

// create the pagination
//

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            {/* Root Path */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
