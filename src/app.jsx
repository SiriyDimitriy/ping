import React from 'react'
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import { Switch, Route } from 'react-router-dom'

import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './Store.js';
import IndexPage from './components/IndexPage';
import '../styles/common.less';
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/error";
import SettingsPage from './pages/SettingsPage';
import RegistrationPage from "./pages/RegistrationPage";

ReactDOM.render(
      <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path='/login' component={LoginPage}/>
                <Route exact path='/register' component={RegistrationPage}/>
                <Route component={IndexPage}/>
            </Switch>
        </HashRouter>
      </Provider>,
  document.getElementById('mount')
)