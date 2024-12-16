const express = require('express');
const shoppingRouter = express.Router();
const lists = require('./lists.js');

shoppingRouter.get('/', (req, res) => {
    res.json(lists.shoppingList);
});

shoppingRouter.post('/:itemName', (req, res) => {
    lists.shoppingList.addItem(req.itemName);
    res.json(lists.shoppingList);
});

shoppingRouter.delete('/:itemName', (req, res) => {
    lists.shoppingList.removeItem(req.itemName);
    res.json(lists.shoppingList);
});

module.exports = { shoppingRouter };