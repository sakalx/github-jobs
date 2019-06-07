const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./app/config');

app.use(cors(config.cors));

require('./app/routes')(app);

app.listen(config.port, () => console.log('Listening on:', config.port));