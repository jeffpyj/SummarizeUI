import React from "react";
import "./styles/global.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Main from "./components/Main";
import Documents from "./components/Document";
import Summarize from "./components/Summarize";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Main} />
          <Route path="/document" component={Documents} />
          <Route path="/summarize" component={Summarize} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
