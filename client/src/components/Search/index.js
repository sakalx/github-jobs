import React, {useState} from 'react';
import {connect} from 'react-redux';

import {
  getJobsByLocation,
  getJobsByDescription,
  getJobsByLocAndDesc,
} from 'root/redux-core/actions/jobs';

import LinearProgress from '@material-ui/core/LinearProgress';
import {Form, Input, SearchBtn} from './style';

const Search = ({
                  jobs,
                  getJobsByLocation,
                  getJobsByDescription,
                  getJobsByLocAndDesc,
                }) => {
  const [values, setValues] = useState({
    description: '',
    location: '',
  });

  const handleChange = name => ({target}) => {
    setValues({...values, [name]: target.value});
  };

  const handleSearch = () => {
    const description = values.description.trim();
    const location = values.location.trim();

    switch (true) {
      case Boolean(description && location):
        getJobsByLocAndDesc(location, description);
        break;
      case Boolean(location):
        getJobsByLocation(location);
        break;
      case Boolean(description):
        getJobsByDescription(description);
        break;
    }
  };

  return (
      <div>
        <Form noValidate autoComplete='off'>
          <Input
              label='Job Description'
              value={values.description}
              onChange={handleChange('description')}
              variant='outlined'
          />
          <Input
              label='Location'
              value={values.location}
              onChange={handleChange('location')}
              variant='outlined'
          />
          <SearchBtn
              variant='contained'
              color='primary'
              size='large'
              onClick={handleSearch}
              disabled={!values.location && !values.description}
          >
            search
          </SearchBtn>
        </Form>
        {jobs.fetching && <LinearProgress/>}
      </div>
  );
};

const mapStateToProps = ({jobs}) => ({
  jobs,
});

const mapDispatchToProps = {
  getJobsByLocation,
  getJobsByDescription,
  getJobsByLocAndDesc,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);