import React from 'react'
import {Route } from 'react-router'
import App from '../App'
import LoginPage from '../pages/LoginPage'

export default () => (
    <>
        <Route path="/" component={App} />
        <Route path="login" component={LoginPage}/>
    </>
)