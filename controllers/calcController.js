function calcCon(req, res) {
  return res.status(200).send(`Choose /add, /sub, /mult or /div in the url + ?val1={yourNumber}&val2={yourNumber} in the url to use calculator. Example: http://localhost:3000/calc/add?val1=2&val2=50`);
}

module.exports = calcCon;
