const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
    reviewNumber: {
        type: Number,
        required: true  
    },
    commentsNumber: Number,
    rating: {
        type: Number,
        'default': 0,  
        min: 0,  
        max: 5
    },
});



mongoose.model('Page', pageSchema);