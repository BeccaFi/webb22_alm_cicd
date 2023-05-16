const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('testing');
});

router.get('/add', (req, res) => {
  const val1 = Number(req.query.val1);
  const val2 = Number(req.query.val2);
  const result = val1 + val2;
  res.send(`${val1} + ${val2} = ${result}`);
});

class Calculator {
  constructor() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
}

module.exports = { Calculator };
module.exports = router;
