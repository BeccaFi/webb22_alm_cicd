const express = require("express");
const calcAddCon = require("../controllers/calcAddController");
const calcSubCon = require("../controllers/calcSubController");
const calcMultCon = require("../controllers/calcMultController");
const calcDivCon = require("../controllers/calcDivController");

const calcRouter = express.Router();

calcRouter.get("/add", calcAddCon);
calcRouter.get("/sub", calcSubCon);
calcRouter.get("/mult", calcMultCon);
calcRouter.get("/div", calcDivCon);

module.exports = calcRouter;
