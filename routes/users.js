const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('TB, HA, MA,');
});

module.exports = router;
