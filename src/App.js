
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state=
  {
    progress:0
  }
  setProgress=(progress)=>
  {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress }
        
      />
        <Routes>
        <Route exact path="Sports" element={<News setProgress={this.setprogress} key="Sports" pageSize={6} country="in" category="Sports" />} />
        <Route exact path="Business" element={<News setProgress={this.setprogress} key="Business"  pageSize={6} country="in" category="Business" />} />
        <Route exact path="Entertainment" element={<News setProgress={this.setprogress} key="Entertainment" pageSize={6} country="in" category="Entertainment" />} />
        <Route exact path="/" element={<News setProgress={this.setprogress} key="General" pageSize={6} country="in" category="General" />} />
        <Route exact path="Science" element={<News setProgress={this.setprogress} key="Science" pageSize={6} country="in" category="Science" />} />
        <Route exact path="Technology" element={<News setProgress={this.setprogress} key="Technology" pageSize={6} country="in" category="Technology" />} />
        {/* <Route path="Sports" element={<News setprogress={this.setprogress} pageSize={5} country="in" category="Sports" />} /> */}
        </Routes>
        
        </BrowserRouter>
      </div>
    )
  }
} 

