const IsPaySubmit = require("../Model/IsPaySubmit");
const serverError = require("../utils/serverError");

const getIsPaySubmit = (req, res) => {
  IsPaySubmit.findOne({ author: req.user._id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  getIsPaySubmit,
};
