const WHITE_LIST = ['http://localhost:3000', 'https://sakalx.github.io'];

module.exports = {
  origin: function(origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin || WHITE_LIST.includes(origin)) return callback(null, true);

    const msg = 'The CORS policy for this site does not allow.';
    return callback(new Error(msg), false);
  },
};