// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsBox from './Components/NewsBox';
// import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

const App=()=>{

  // state={
  //   progress: 0,
  // }

  // progress(progress){
  //   this.setState({progress: progress})
  // }
 
    return (
      <Router>
        <div>
          <Navbar />
          {/* <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => setProgress(0)}
          /> */}
          <Switch>
            <Route exact path="/home">
              <NewsBox key='general' country='in' category='general' />
            </Route>
            <Route exact path="/business">
              <NewsBox key='business' country='in' category='business' />
            </Route>
            <Route exact path="/entertainment">
              <NewsBox key='entertainment' country='in' category='entertainment' />
            </Route>
            <Route exact path="/general">
              <NewsBox key='general' country='in' category='general' />
            </Route>
            <Route exact path="/health">
              <NewsBox key='health' country='in' category='health' />
            </Route>
            <Route exact path="/science">
              <NewsBox key='science' country='in' category='science' />
            </Route>
            <Route exact path="/sports">
              <NewsBox key='sports' country='in' category='sports' />
            </Route>
            <Route exact path="/technology">
              <NewsBox key='technology' country='in' category='technology' />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  
}

export default App;
