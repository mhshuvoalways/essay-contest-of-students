const Article = require("../Model/Articles");
const IsPaySubmit = require("../Model/IsPaySubmit");
const QuarterAnnounce = require("../Model/Quarter&Announce");
const serverError = require("../utils/serverError");
const articleValidator = require("../validations/articleValidation");

const postArticle = (req, res) => {
  const { language, typeofArticle, article } = req.body;
  const validation = articleValidator({ language, typeofArticle, article });
  if (validation.isValid) {
    QuarterAnnounce.find()
      .then((findqa) => {
        if (findqa.length && findqa[0].toggleStartStop) {
          const articleObj = {
            author: req.user._id,
            language,
            typeofArticle,
            article,
            qya: {
              quarterly: findqa[0].quarterly,
              year: findqa[0].year,
            },
          };
          IsPaySubmit.findOne({ author: req.user._id })
            .then((ispaysub) => {
              if (ispaysub.submissionCount >= 3) {
                res.status(400).json({
                  message: "Opps! You limits have been reached!",
                });
              } else {
                new Article(articleObj)
                  .save()
                  .then((response) => {
                    const updateObj = ispaysub.submissionCount + 1;
                    IsPaySubmit.findOneAndUpdate(
                      { author: req.user._id },
                      { submissionCount: updateObj }
                    )
                      .then(() => {
                        res.status(200).json({
                          message: "We have got your article. Thanks!",
                          response,
                        });
                      })
                      .catch(() => {
                        serverError(res);
                      });
                  })
                  .catch(() => {
                    serverError(res);
                  });
              }
            })
            .catch(() => {
              serverError(res);
            });
        } else {
          res.status(400).json({
            message: "Quarterly didn't start yet",
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
