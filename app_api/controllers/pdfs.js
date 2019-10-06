const mongoose = require('mongoose');
const pdf = mongoose.model('Pdf');


const pdfReadOne = (req, res) => {
    pdf.findById(req.params.pdfid)
        .exec((err, pdf) => {
            if (!pdf) {
                return res
                    .status(404)
                    .json({
                        "message": "pdf not found"
                    });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(pdf);
        });

};

const pdfCreate = (req, res) => {
    const { numPages } = req.body
    console.log("***Pri nacitani pdf, treba vytvorit pdf strukturu pre pdf a pre pocet stran: "+ numPages);
    res
        .status(201)
        .json(req.body);
};

module.exports = {
    pdfReadOne,
    pdfCreate
};