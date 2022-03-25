const Article = require("../Model/Articles");
const Grade = require("../Model/Grade");
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

const updateArticle = (req, res) => {
  const id = req.params.id;
  if (req.user.role === "admin") {
    Grade.find()
      .then((response) => {
        const remover = JSON.parse(req.body.option).filter(
          (optio) => optio.link
        );
        if (req.body.marks) {
          response.map((el) => {
            if (
              Number(req.body.marks) >= Number(el.gradeMinValue) &&
              Number(req.body.marks) <= Number(el.gradeMaxValue)
            ) {
              Article.findOneAndUpdate(
                { _id: id },
                {
                  finalMarks: req.body.marks,
                  grade: el.gradeName,
                  sharedLinks: remover,
                },
                { new: true }
              )
                .populate("author")
                .then((response) => {
                  res.status(200).json(response);
                })
                .catch(() => {
                  serverError(res);
                });
            }
          });
        } else {
          Article.findOneAndUpdate(
            { _id: id },
            {
              sharedLinks: remover,
            },
            { new: true }
          )
            .populate("author")
            .then((response) => {
              res.status(200).json(response);
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
    Article.findOne({ _id: id })
      .then((response) => {
        const findUser = response.avgMarks.find(
          (el) => el.author.toString() === req.user._id
        );
        if (findUser) {
          const findAndPush = response.avgMarks.filter(
            (ela) => ela.author.toString() !== req.user._id
          );
          const marks = { author: req.user._id, marks: req.body.marks };
          findAndPush.push(marks);
          Article.findOneAndUpdate(
            { _id: id },
            { avgMarks: findAndPush },
            { new: true }
          )
            .then((response) => {
              let totalSum = 0;
              response.avgMarks.forEach((el) => {
                totalSum += el.marks;
              });
              let avg = totalSum / response.avgMarks.length;
              Article.findOneAndUpdate(
                { _id: id },
                { finalAvg: avg },
                { new: true }
              )
                .populate("author")
                .then((finalRes) => {
                  res.status(200).json(finalRes);
                })
                .catch(() => {
                  serverError(res);
                });
            })
            .catch(() => {
              serverError(res);
            });
        } else {
          const marks = { author: req.user._id, marks: req.body.marks };
          response.avgMarks.push(marks);
          Article.findOneAndUpdate(
            { _id: id },
            { avgMarks: response.avgMarks },
            { new: true }
          )
            .then((response) => {
              let totalSum = 0;
              response.avgMarks.forEach((el) => {
                totalSum += el.marks;
              });
              let avg = totalSum / response.avgMarks.length;
              Article.findOneAndUpdate(
                { _id: id },
                { finalAvg: avg },
                { new: true }
              )
                .populate("author")
                .then((finalRes) => {
                  res.status(200).json(finalRes);
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
  }
};

const getArticle = (req, res) => {
  Article.find()
    .populate("author")
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

const deleteArticle = (req, res) => {
  Article.findOneAndDelete({ _id: req.params.id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getIndividualActicle = (req, res) => {
  Article.findOne({ _id: req.params.id })
    .populate("author")
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
  updateArticle,
  deleteArticle,
  getIndividualActicle,
};
