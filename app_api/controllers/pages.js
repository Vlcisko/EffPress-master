const mongoose = require('mongoose');
const pdf = mongoose.model('Pdf');

const pageReadOne = (req, res) => {
    pdf
        .findById(req.params.pageid) 
        .exec((err, page) => {
            if (!page) {
                return res
                    .status(404)
                    .json({
                        "message": "page not found"
                    });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(page);
        });  
};


module.exports = {
    pageReadOne
};