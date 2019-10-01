const express = require('express');
const router = express.Router();
const ctrlPdfs = require('../controllers/pdfs');
const ctrlPages = require('../controllers/pages');

router
    .route('/pages/:pageid')
    .get(ctrlPages.pageReadOne);


router
    .route('/pdfs')
    .post(ctrlPdfs.pdfCreate);
       
router
    .route('/pdfs/:pdfid')
    .get(ctrlPdfs.pdfReadOne);


module.exports = router;