const mongoose = require('mongoose');
const pdf = mongoose.model('Pdf');
const User = mongoose.model('User');

const pageReadOne = (req, res) => {
    pdf
        .findById(req.params.pdfid) 
        .select('pages')
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
            if (pdf.pages && pdf.pages.length > 0){
              const page = pdf.pages.id(req.params.pageid)
              if (!page){
                return res
                  .status(404)
                  .json({
                      "message": "page not found"
                  });
              } else {
                response = {
                  page: {
                    page
                  }
                };
                return res
                  .status(200)
                  .json(response);
              }
            } else {
              return res
                .status(404)
                .json({
                    "message": "No pages found"
                });
            }
        });  
};

const getAuthor = (req, res, callback) => {
  if (req.payload && req.payload.email) {
        console.log(req.payload.email);
        User
          .findOne({ email: req.payload.email })
          .exec((err, user) => {
              if (!user) {
                  return res
                      .status(404)
                      .json({ "message": "User not found" });
              } else if (err) {
                  console.log(err);
                  return res
                      .status(404)
                      .json(err);
              }
              console.log("ssss"+req.payload.email);             
              callback(req, res, user.name);
          });
  } else {
      return res
          .status(404)
          .json({ "message": "User not found" });
  }
};

const ratingCreate = (req, res) => {
  getAuthor(req, res,
      (req, res, userName) => {
        pdf
        .findById(req.params.pdfid) 
        .select('pages')
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
            if (pdf.pages && pdf.pages.length > 0){
              const page = pdf.pages.id(req.params.pageid)
              if (!page){
                return res
                  .status(404)
                  .json({
                      "message": "page not found"
                  });
              } else {
                doAddRating(req, res, pdf, page, userName);
              }
            } else {
              return res
                .status(404)
                .json({
                    "message": "No pages found"
                });
            }
        });
      });
};

const doAddRating = (req, res, pdf, page, author) => {
  if (!page) {
      res
          .status(404)
          .json({ "message": "Page not found" });
  } else {
      const { rating } = req.body;
      page.ratings.push({
          author,
          rating
      });
      pdf.save((err, pdfs) => {
          if (err) {
                res
                  .status(400)
                  .json(err);
          } else {
              updateAverageRating(page._id, pdfs._id);
              /*console.log(pdfs.pages.slice(-1).pop());
              console.log(pdfs.pages.slice(0).pop());
              const thisRating = pdfs.pages.slice(-1).pop();*/
              res
                  .status(201)
                  .json(page);
          }
      });
  }
};

const doSetAverageRating = (page, pdf) => {
  if (page.ratings && page.ratings.length > 0) {
      const count = page.ratings.length;
      const total = page.ratings.reduce((acc, { rating }) => {
          return acc + rating;
      }, 0);
      page.rating = parseInt(total / count, 10);
      pdf.save(err => {
          if (err) {
              console.log(err);
          } else {
              console.log(`Average rating updated to ${page.rating}`);
          }
      });
  }
};

const updateAverageRating = (pageId, pdfId) => { 
  pdf
    .findById(pdfId) 
    .select('pages')
    .exec((err, pdf) => {
        if (!err) {
          if (pdf.pages && pdf.pages.length > 0){
              const page = pdf.pages.id(pageId);
              doSetAverageRating(page, pdf)
            }
        } 
  });
};

module.exports = {
    pageReadOne,
    ratingCreate
};