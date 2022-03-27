const User = require("../Model/User");
const Author = require("../Model/Author");
const serverError = require("../utils/serverError");
const authorValidation = require("../validations/authorValidation");

const giveAuthor = (req, res) => {
  const { email, bookName } = req.body;
  console.log(req.body);
  const validation = authorValidation({ email, bookName });
  if (validation.isValid) {
    User.findOne({ email: email })
      .then((findresponse) => {
        if (findresponse) {
          new Author({ author: findresponse._id, bookName: bookName })
            .save()
            .then(() => {
              Author.find()
                .populate("author")
                .then((response) => {
                  res.status(200).json({
                    response,
                    message:
                      "You give the author certificate to " + findresponse.name,
                  });
                })
                .catch(() => {
                  serverError(res);
                });
            })
            .catch(() => {
              serverError(res);
            });
        } else {
          res.status(400).json({
            message: "User not found",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const getAllAuthor = (req, res) => {
  Author.find()
    .populate("author")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getMyAuthor = (req, res) => {
  Author.find({ author: req.user._id })
    .populate("author")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = { giveAuthor, getAllAuthor, getMyAuthor };
