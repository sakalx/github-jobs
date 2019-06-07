import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import {selectJob} from 'root/redux-core/actions/jobs';

import Hidden from '@material-ui/core/Hidden';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import {Wrap, CardDescription, Row, Slide} from './style';

const JobDescription = ({job, selectJob}) => {

  const handleClose = () => {
    selectJob(null);
  };

  const renderContent = (
      <Wrap>
        {job && <CardDescription elevation={6}>
          <Row>
            <header>
              <Typography color='textSecondary' variant='overline'>
                {job.type} / {job.location}
              </Typography>
              <Typography variant='h4'>
                {job.title}
              </Typography>
            </header>
            <Button
                variant='outlined'
                color="primary"
                onClick={handleClose}
            >
              close
            </Button>
          </Row>
          <Divider/>
          <br/>

          <Typography variant='subtitle2'>
            About
            <Button
                color='primary'
                target='_blank'
                title={job.company}
                href={job.company_url}
            >
              {job.company}:
            </Button>
          </Typography>

          <div dangerouslySetInnerHTML={{__html: job.description}}/>

          <Typography variant='h6'>
            How to apply
          </Typography>
          <Divider/>
          <div dangerouslySetInnerHTML={{__html: job.how_to_apply}}/>
        </CardDescription>}
      </Wrap>
  );

  return (
      <Fragment>
        <Hidden smUp>
          <Drawer
              variant='temporary'
              anchor='right'
              open={Boolean(job)}
          >
            }>
            {renderContent}
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Slide open={Boolean(job)}>
            {renderContent}
          </Slide>
        </Hidden>
      </Fragment>
  );
};

const mapStateToProps = ({jobs: {selected: job}}) => ({
  job,
});

const mapDispatchToProps = {
  selectJob,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDescription);