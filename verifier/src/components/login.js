import React from 'react';
import {useHistory} from "react-router-dom"
import "./login.css"
const Login = () => {
    const history = useHistory()
    return (
        <div id="login-page">
  <div class="login">
    <h2 class="login-title">Login</h2>
    <p class="notice">Please login to access the system</p>
    <form class="form-login">
      <label for="username">Username</label>
      <div class="input-email">
        <i class="fas fa-envelope icon"></i>
        <input type="email" name="email" placeholder="Username" required/>
      </div>
      <label for="password">Password</label>
      <div class="input-password">
        <i class="fas fa-lock icon"></i>
        <input type="password" name="password" placeholder="Type your password" required/>
      </div>
      <button onClick={()=>history.push("/home")} type="submit"><i class="fas fa-door-open"></i> Login</button>
    </form>

   
  </div>
  <div class="background">
    
  </div>
</div>
    );
}

export default Login;
