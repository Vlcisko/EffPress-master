const express = require('express');
const router = express.Router();
const ctrlPdfs = require('../controllers/pdfs');
const ctrlPages = require('../controllers/pages');
const ctrlAuth = require('../controllers/authentication');
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

router
    .route('/pdfs/:pdfid/pages/:pageid')
    .get(ctrlPages.pageReadOne)
    .post(auth, ctrlPages.ratingCreate)

router
    .route('/pdfs')
    .post(ctrlPdfs.pdfCreate);
       
router
    .route('/pdfs/:pdfid')
    .get(ctrlPdfs.pdfReadOne);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


module.exports = router;