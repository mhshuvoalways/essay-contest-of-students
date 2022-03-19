const Grade = require("../Model/Grade");
const serverError = require("../utils/serverError");

const addGrade = (req, res) => {
  const { gradeName, gradeMinValue, gradeMaxValue } = req.body;
  const obj = { gradeName, gradeMinValue, gradeMaxValue };
  new Grade(obj)
    .save()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getGrade = (req, res) => {
  Grade.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const updateGrade = (req, res) => {
  const id = req.params.id;
  const { gradeName, gradeMinValue, gradeMaxValue } = req.body;
  const obj = {
    gradeName,
    gradeMinValue,
    gradeMaxValue,
  };
  Grade.findOneAndUpdate({ _id: id }, obj, { new: true })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const deleteGrade = (req, res) => {
  const id = req.params.id;
  Grade.findOneAndRemove({ _id: id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  addGrade,
  getGrade,
  updateGrade,
  deleteGrade
};
