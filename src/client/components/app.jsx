import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Greeting from './greeting/greeting.jsx'
import Intro from './intro/intro.jsx'
import Work from './work/work.jsx'


import workData from '../work-data'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Greeting} />
          <Route path="/about" component={() => (
            <div id="main-page">
              <Intro />
              <Work workData={workData}/>
            </div>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;