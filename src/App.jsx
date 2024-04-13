import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Card from './Components/Card';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path='/' Component={} />
          <Route path='/'Component={} />
        </Switch>
      </div>
    </Router>
    // <div>
    //   <Navbar/>
    //   <Card/>
    // </div>
  );
}

export default App;
