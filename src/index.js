import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Switch , Route,BrowserRouter} from "react-router-dom"
import TextField from './components/TextField'
import Button from './components/Button'
import Container from './components/Container'


import * as serviceWorker from './serviceWorker';
import GlobalStyle from './global/GlobalStyle';
import App from './App';
import LoginPage from './pages/LoginPage';

ReactDOM.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/login" component={LoginPage}/>
      </Switch>
      </BrowserRouter>
    <GlobalStyle/>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
