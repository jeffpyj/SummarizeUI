import React from 'react'
import './styles/global.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing'
import Main from './components/Main'


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/home" component={Main}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
