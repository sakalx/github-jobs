import {promise, jobs} from '../types';

const {
  FULFILLED,
  PENDING,
  REJECTED,
} = promise;

const {
  GET_JOBS,
  SELECT_JOB,
} = jobs;

const initState = {
  error: null,
  fetching: false,
  list: [],
  selected: null,
};

export default function stations(state = initState, {type, payload}) {

  switch (type) {
    case GET_JOBS + FULFILLED:
      return ({
        ...state,
        error: null,
        fetching: false,
        list: payload,
      });

    case GET_JOBS + PENDING:
      return ({
        ...state,
        fetching: true,
      });

    case GET_JOBS + REJECTED:
      return ({
        ...state,
        error: true,
        fetching: false,
      });

    case SELECT_JOB:
      const selected = state.list.find(({id}) => id === payload);

      return ({
        ...state,
        selected,
      });
  }

  return state;
}
