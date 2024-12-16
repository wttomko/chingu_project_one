const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

// Import the routers from util
const shoppingRouter = require('./util/shopping-router.js');
const inHouseRouter = require('./util/inHouse-router.js');

// Have app use the routers
app.use('/shopping', shoppingRouter.shoppingRouter );
app.use('/inHouse', inHouseRouter.inHouseRouter);

// Middleware
app.use(cors());

app.param('itemName', (req, res, next, itemName) => {
    req.itemName = itemName;
    next();
});

// Parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Have the app listen & Log the port to the console
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});