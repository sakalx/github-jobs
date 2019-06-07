import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Title} from './style';

const Header = () => (
    <AppBar position='static'>
      <Toolbar>
        <Title variant='h5' color='inherit'>
          GitHub
        </Title>
        <Typography variant='h5' color='inherit'>
          Jobs
        </Typography>
      </Toolbar>
    </AppBar>
);

export default Header;