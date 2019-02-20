import React, { Component } from 'react'
import {Route,Switch } from 'react-router-dom'
import LandingPage from './deviceLandingScreen'
import Home from './Home'
import DetailsPage from './deviceDetailsScreen'
export default class app extends Component {
  render() {
    return (
      <Switch>
          <Route path='/Home' component={Home}/>
          <Route path='/homelandingPage' component={LandingPage}></Route>
          <Route path='/details' component={DetailsPage}></Route>
      </Switch>
    )
  }
}
