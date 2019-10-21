const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
});

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
    ratings:[ratingSchema],
    ratingsQ:[ratingSchema],
    ratingsL:[ratingSchema],
    rating: {
        type: Number 
    },
    ratingQ: {
        type: Number 
    },
    ratingL: {
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