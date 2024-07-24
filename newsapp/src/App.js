
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize=5;
  apiKey=process.env.REACT_APP_Key;
  
  constructor(){
    super();
    this.state={
      progress:33
    }
  }
  setProgress(prog){
    this.setState({progress:prog})
  }
  render() {
    return (
      <div>
        
        <Router>
        <Navbar></Navbar>     
        <LoadingBar height-='3' color='#f11946' progress={this.state.progress}/>  
        <Routes>
          <Route path="/" element={<News key="general"  setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="in" category="general"></News>}></Route>
          <Route path="/general" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general"></News>}></Route>
          <Route path="/business" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={6} country="in" category="business"></News>}></Route>
          <Route path="/entertainment" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={6} country="in" category="entertainment"></News>}></Route>
          <Route path="/health" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={6} country="in" category="health"></News>}></Route>
          <Route path="/science" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={6} country="in" category="science"></News>}></Route>
          <Route path="/sports" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={6} country="in" category="sports"></News>}></Route>
          <Route path="/technology" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={6} country="in" category="technology"></News>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

