import React from 'react';
import {distanceInWords} from 'date-fns';
import {connect} from 'react-redux';

import {selectJob} from 'root/redux-core/actions/jobs';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {Wrap, JobItem, Row, Type} from './style';

const JobList = ({jobs, selectJob}) => {

  const handleSelectJob = id => () => {
    selectJob(id);
  };

  if (!jobs.list.length) return null;

  return (
      <Wrap elevation={6}>
        <List>
          {jobs.list.map((job) => (
              <JobItem
                  button
                  key={job.id}
                  onClick={handleSelectJob(job.id)}
              >
                <Row>
                  <Typography variant='h6' color='primary'>
                    {job.title}
                  </Typography>
                  <Typography color='textSecondary'>
                    {job.location}
                  </Typography>
                </Row>

                <Row>
                  <Row>
                    <Typography>{job.company}</Typography>
                    <Type variant='button'>{job.type}</Type>
                  </Row>
                  <Typography variant='body2' color='textSecondary'>
                    {distanceInWords(new Date(job.created_at), new Date())} ago
                  </Typography>
                </Row>
                <Divider/>
              </JobItem>
          ))}
        </List>
      </Wrap>
  );
};

const mapStateToProps = ({jobs}) => ({
  jobs,
});

const mapDispatchToProps = {
  selectJob,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);