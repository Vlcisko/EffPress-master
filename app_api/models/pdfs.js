const mongoose = require('mongoose');



const pageSchema = new mongoose.Schema({
    questionN: {
        type: Number  
    },
    testN: {
        type: Number  
    },
    commentsN: {
        type: Number  
    },
    ratingN: {
        type: Number  
    },
    rating: {
        type: Number 
    },
    pagePdfPosition: {
        type: Number 
    },
});

const pdfSchema = new mongoose.Schema({
    numPages: {
        type: Number
    },
    pages: [pageSchema]
});

mongoose.model('Pdf', pdfSchema, 'pdfFiles');