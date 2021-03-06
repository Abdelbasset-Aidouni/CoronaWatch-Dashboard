import React from 'react';

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery-confirm/js/jquery-confirm'
import ReactDOM from 'react-dom';
import './index.css';
import {Switch , Route,BrowserRouter,Redirect} from "react-router-dom"
import {PrivateRoute,LoginRoute} from './global/routes'
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './global/GlobalStyle';
import App from './App';
import LoginPage from './pages/LoginPage';
import AccountsPage from './pages/AccountsPage'
import {Provider} from 'react-redux'
import store from './store/store'
import ContentPage from './pages/ContentPage';
import ContentDetailPage from './pages/ContentDetailPage'
import ContentDetailRobot from './pages/ContentDetailRobot'
import CommentsPage from "./pages/CommentsPage"
import ReportedCasesPage from './pages/ReportedCasesPage'
import HomePage from './pages/HomePage'
import StatisticsPage from './pages/Statistics'
import CreateZonePage from './pages/Statistics/components/CreateZonePage'
import PublishArticlePage from './pages/PublishArticlePage'
import floatThead from 'floatthead'

var bs = require('bootstrap')


window.$  = require('jquery')
window.jQuery = window.$
window.$.floatThead = floatThead

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage}/>
        <LoginRoute path="/login" component={LoginPage}/>
        <PrivateRoute path="/accounts" component={AccountsPage} />
        <PrivateRoute exact path="/content" component={ContentPage} />
        <PrivateRoute exact path="/content/:id"  component={ContentDetailPage} />
        <PrivateRoute path="/content/robots/:id"  component={ContentDetailRobot} />
        <PrivateRoute path="/comments" component={CommentsPage} />
        <PrivateRoute path="/reported-cases" component={ReportedCasesPage} />
        <PrivateRoute exact path="/statistics" component={StatisticsPage} />
        <PrivateRoute path="/statistics/create-zone/" component={CreateZonePage} />
        <PrivateRoute path="/publish-article" component={PublishArticlePage} />
        <Redirect from="*" to="/" />
      </Switch>
      </BrowserRouter>
    <GlobalStyle/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
