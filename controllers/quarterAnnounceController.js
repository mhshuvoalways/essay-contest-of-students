const QuarterAnnounce = require("../Model/Quarter&Announce");
const IsPaySubmit = require("../Model/IsPaySubmit");
const quarterAnnounceValidation = require("../validations/quarterAnnounceValidation");
const serverError = require("../utils/serverError");

const addQuarterAnnounce = (req, res) => {
  const { quarterly, year } = req.body;
  const validation = quarterAnnounceValidation({ quarterly, year });
  if (validation.isValid) {
    QuarterAnnounce.find()
      .then((response) => {
        const toggle = response.length
          ? (response[0].toggleStartStop = !response[0].toggleStartStop)
          : true;
        const obj = {
          quarterly,
          year,
          toggleStartStop: toggle,
          isAnnounce: false,
        };
        if (response.length) {
          QuarterAnnounce.findOneAndUpdate({ _id: response[0]._id }, obj, {
            new: true,
          })
            .then((response) => {
              const inspaysubmit = {
                isPayment: false,
                submissionCount: 0,
              };
              IsPaySubmit.updateMany(inspaysubmit)
                .then(() => {
                  res.status(200).json({
                    message: `Quarterly ${toggle ? "start" : "stop"}`,
                    response: response,
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
          new QuarterAnnounce(obj)
            .save()
            .then((response) => {
              res.status(200).json({
                message: `Quarterly ${toggle ? "start" : "stop"}`,
                response,
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
    res.status(400).json(validation.error);
  }
};

const updateAnnounce = (req, res) => {
  QuarterAnnounce.find()
    .then((response) => {
      const toggle = response.length
        ? (response[0].isAnnounce = !response[0].isAnnounce)
        : true;
      const obj = {
        isAnnounce: toggle,
      };
      if (response.length) {
        QuarterAnnounce.findOneAndUpdate({ _id: response[0]._id }, obj, {
          new: true,
        })
          .then((response) => {
            res.status(200).json({
              message: `Announce result ${toggle ? "start" : "stop"}`,
              response: response,
            });
          })
          .catch(() => {
            serverError(res);
          });
      } else {
        res.status(400).json({
          message: `Please start quarterly`,
        });
      }
    })
    .catch(() => {
      serverError(res);
    });
};

const getQuarterAnnounce = (req, res) => {
  QuarterAnnounce.find()
    .then((response) => {
      res.status(200).json(response[0]);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  addQuarterAnnounce,
  updateAnnounce,
  getQuarterAnnounce,
};
