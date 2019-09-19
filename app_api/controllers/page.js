const mongoose = require('mongoose');
const Page = mongoose.model('Page');

const pageReadOne = (req, res) => {
    Page
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