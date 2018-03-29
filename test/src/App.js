import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";


import Home from "./pages/home/home";
import Error from "./pages/error/error";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/error" component={Error} />
        </div>
      </Router>
    );
  }
}

export default App;
