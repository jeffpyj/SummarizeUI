import React from 'react';
import './styles/global.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Landing from "./components/Landing"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
