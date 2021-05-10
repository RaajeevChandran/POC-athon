import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from "./Home/Home";
import SignIn from "./auth";


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/home" exact component = {Home}/>
      </Switch>
      </BrowserRouter>
    )
  }
}
