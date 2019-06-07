module.exports = (app) => {
  const controllers = require('../controllers');

  app.get('/api/jobs/location/:location', controllers.jobs.byLocation);
  app.get('/api/jobs/description/:description', controllers.jobs.byDescription);
  app.get('/api/jobs/:loc/description/:desc', controllers.jobs.byLocAndDesc);
};