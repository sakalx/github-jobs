const axios = require('axios');
const API = 'https://jobs.github.com/positions';

const handleError = (err, res) => {
  res.send(err.message);
  console.error(err);
};

exports.byLocation = (req, res) => {
  const {location} = req.params;

  axios.get(`${API}.json?location=${location}`).
      then(({data}) => res.send(data)).
      catch(err => handleError(err, res));
};

exports.byDescription = (req, res) => {
  const {description} = req.params;

  axios.get(`${API}.json?description=${description}`).
      then(({data}) => res.send(data)).
      catch(err => handleError(err, res));
};

exports.byLocAndDesc = (req, res) => {
  const {loc, desc} = req.params;

  axios.get(`${API}.json?description=${desc}&location=${loc}`).
      then(({data}) => res.send(data)).
      catch(err => handleError(err, res));
};