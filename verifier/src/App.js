import React from "react"
import {Route,Switch,BrowserRouter} from "react-router-dom"
import Home from "./components/home";
import login from "./components/login";


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={login}/>
      <Route path="/home" exact component={Home}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
