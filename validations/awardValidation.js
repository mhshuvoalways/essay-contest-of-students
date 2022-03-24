const awardValidation = (value) => {
  const error = {};
  if (!value.email) {
    error.email = "Please give email";
  }
  if (!value.award) {
    error.award = "Please give award";
  }

  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

module.exports = awardValidation;
