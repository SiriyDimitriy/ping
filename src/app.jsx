import React from 'react'
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import { Switch, Route } from 'react-router-dom'

import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './Store.js';
import IndexPage from './components/IndexPage';
import '../styles/common.less';
import Login from "./pages/login";
import ErrorPage from "./pages/error";
import SettingsPage from './pages/SettingsPage';

ReactDOM.render(
      <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path='/login' component={Login}/>
                <Route component={IndexPage}/>
            </Switch>
        </HashRouter>
      </Provider>,
  document.getElementById('mount')
)