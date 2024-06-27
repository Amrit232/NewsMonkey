
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
        
        <Routes>
          <Route path="/" element={<News key="general" pageSize={6} country="in" category="general"></News>}></Route>
          <Route path="/general" element={ <News key="general" pageSize={6} country="in" category="general"></News>}></Route>
          <Route path="/business" element={ <News key="business" pageSize={6} country="in" category="business"></News>}></Route>
          <Route path="/entertainment" element={ <News key="entertainment" pageSize={6} country="in" category="entertainment"></News>}></Route>
          <Route path="/health" element={ <News key="health" pageSize={6} country="in" category="health"></News>}></Route>
          <Route path="/science" element={ <News key="science" pageSize={6} country="in" category="science"></News>}></Route>
          <Route path="/sports" element={ <News key="sports" pageSize={6} country="in" category="sports"></News>}></Route>
          <Route path="/technology" element={ <News key="technology" pageSize={6} country="in" category="technology"></News>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

