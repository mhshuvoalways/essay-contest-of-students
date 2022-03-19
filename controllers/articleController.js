const Article = require("../Model/Articles");
const QuarterAnnounce = require("../Model/Quarter&Announce");
const serverError = require("../utils/serverError");
const articleValidator = require("../validations/articleValidation");

const postArticle = (req, res) => {
  const { language, typeofArticle, article } = req.body;
  const validation = articleValidator({ language, typeofArticle, article });
  QuarterAnnounce.find()
    .then((findqa) => {
      const articleObj = {
        author: req.user._id,
        language,
        typeofArticle,
        article,
        qya: {
          quarterly: findqa[0].quarterly,
          year: findqa[0].year,
          isAnnounce: findqa[0].isAnnounce,
        },
      };
      if (validation.isValid) {
        if (findqa[0].toggleStartStop) {
          new Article(articleObj)
            .save()
            .then((response) => {
              res.status(200).json({
                message: "Thanks for sending articles",
                response,
              });
            })
            .catch(() => {
              serverError(res);
            });
        } else {
          res.status(400).json({
            message: "Quarterly didn't start yet",
          });
        }
      } else {
        res.status(400).json(validation.error);
      }
    })
    .catch(() => {
      serverError(res);
    });
};

const getArticle = (req, res) => {
  Article.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getMyArticle = (req, res) => {
  Article.find({ author: req.user._id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  postArticle,
  getArticle,
  getMyArticle,
};
