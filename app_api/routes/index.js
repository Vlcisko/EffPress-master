const express = require('express');
const router = express.Router();
const ctrlPage= require('../controllers/page');

router
    .route('/page/:pageid')
    .get(ctrlPage.pageReadOne)

module.exports = router;