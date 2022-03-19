const quarterAnnounceValidation = (value) => {
  const error = {};
  if (!value.year) {
    error.year = "Please select a year";
  }
  if (!value.quarterly) {
    error.quarterly = "Please select a quarterly";
  }
  const isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

module.exports = quarterAnnounceValidation;
