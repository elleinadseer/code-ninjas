const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.route('/').get((req, res) => {
  res.send('Hello, this is the root route!');
});

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
