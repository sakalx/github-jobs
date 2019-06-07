import {jobs} from '../types';
import {
  searchJobsByLocation,
  searchJobsByDescription,
  searchJobsByLocAndDesc,
} from 'root/api';

const {
  GET_JOBS,
  SELECT_JOB,
} = jobs;

export const getJobsByLocation = location => ({
  type: GET_JOBS,
  payload: searchJobsByLocation(location),
});

export const getJobsByDescription = description => ({
  type: GET_JOBS,
  payload: searchJobsByDescription(description),
});

export const getJobsByLocAndDesc = (location, description) => ({
  type: GET_JOBS,
  payload: searchJobsByLocAndDesc(location, description),
});

export const selectJob = id => ({
  type: SELECT_JOB,
  payload: id,
});