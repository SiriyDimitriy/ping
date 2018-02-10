import React from 'react'
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';

import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './Store.js';
import Sample from './components/Sample';
import '../styles/common.less';

ReactDOM.render(
      <Provider store={store}>
        <HashRouter>
            <Sample/>
        </HashRouter>
      </Provider>,
  document.getElementById('mount')
)