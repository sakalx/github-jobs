import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from '../redux-core/store';

import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core/styles';
import muiTheme from '../theme';

import Header from '../components/Header';
import Search from '../components/Search';
import JobsList from '../components/JobsList';
import JobDescription from 'root/components/JobDescription';
import {Main} from './style';

const App = () => (
    <React.Fragment>
      <CssBaseline/>

      <MuiThemeProvider theme={muiTheme}>
        <Provider store={store}>
          <div>

          </div>
        </Provider>
      </MuiThemeProvider>
    </React.Fragment>
);

ReactDOM.render(<App/>, document.getElementById('root'));