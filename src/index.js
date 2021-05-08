import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";
import {firebaseConfig} from "./firebaseCreds"
import App from './App';
import "./index.css"
firebase.initializeApp(firebaseConfig)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


