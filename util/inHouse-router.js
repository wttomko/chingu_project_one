const express = require('express');
const inHouseRouter = express.Router();
const lists = require('./lists.js');

inHouseRouter.get('/', (req, res) => {
    res.json(lists.inHouse);
});

inHouseRouter.post('/:itemName', (req, res) => {
    lists.inHouse.addItem(req.itemName);
    res.json(lists.inHouse);
});

inHouseRouter.delete('/:itemName', (req, res) => {
    lists.inHouse.removeItem(req.itemName);
    res.json(lists.inHouse);
});

module.exports = { inHouseRouter };