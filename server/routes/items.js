var express = require('express');
const axios = require('axios');
const itemsController = require('../controllers/itemsController');

var router = express.Router();

router.get('/items',itemsController.getItems );
module.exports = router;

