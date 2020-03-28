import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
import CommentsPage from "./pages/CommentsPage"
import ReportedCasesPage from './pages/ReportedCasesPage'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={App}/>
        <LoginRoute path="/login" component={LoginPage}/>
        <PrivateRoute path="/accounts" component={AccountsPage} />
        <PrivateRoute path="/content" component={ContentPage} />
        <PrivateRoute path="/comments" component={CommentsPage} />
        <PrivateRoute path="/reported-cases" component={ReportedCasesPage} />
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
