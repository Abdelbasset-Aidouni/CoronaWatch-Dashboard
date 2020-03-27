import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Switch , Route,BrowserRouter} from "react-router-dom"



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
        <Route exact path="/" component={App}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/accounts" component={AccountsPage} />
        <Route path="/content" component={ContentPage} />
        <Route path="/comments" component={CommentsPage} />
        <Route path="/reported-cases" component={ReportedCasesPage} />
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
