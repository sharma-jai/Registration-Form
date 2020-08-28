import React from 'react';
import forCare from './Components/forCare/forCare';
import forJob from './Components/forJob/forJob'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/forcare" component={forCare}/>
      <Route exact path="/forjob" component={forJob} />
    </Router>
  );
}

export default App;
