import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Topic from "./components/topics/changeForGood";

const appRoute = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/topic" component={Topic} />
        </div>
    </Router>
);

ReactDOM.render(appRoute, document.getElementById("root"));
registerServiceWorker();
