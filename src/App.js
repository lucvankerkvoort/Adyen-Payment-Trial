import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Payment } from "./features/payment/Payment";
import { Preview } from "./features/preview/Preview";
import { Status } from "./features/status/Status";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/preview/:type">
          <Preview />
        </Route>
        <Route path="/checkout/:type">
          <Payment />
        </Route>
        <Route path="/status/:type">
          <Status />
        </Route>
        <Route path="/">
          <div className="main-container">
            <ul className="integration-list">
              <li className="integration-list-item">
                <Link to="/preview/dropin" className="integration-list-item-link">
                  <div className="title-container">
                    <p className="integration-list-item-title">Premium Acocunt</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
