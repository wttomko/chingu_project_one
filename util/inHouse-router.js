const express = require('express');
const inHouseRouter = express.Router();
const lists = require('./lists.js');

inHouseRouter.get('/', (req, res) => {
    res.json(lists.inHouse);
});

module.exports = { inHouseRouter };