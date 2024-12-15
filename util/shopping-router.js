const express = require('express');
const shoppingRouter = express.Router();
const lists = require('./lists.js');

shoppingRouter.get('/', (req, res) => {
    res.json(lists.shoppingList);
});

shoppingRouter.post('/addItem', (req, res) => {
    lists.shoppingList.addItem(req.body.item);
    res.json(lists.shoppingList.getItems());
});

module.exports = { shoppingRouter };