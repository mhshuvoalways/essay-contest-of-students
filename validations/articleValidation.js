const acticleValidation = (value) => {
  const error = {};
  if (!value.language) {
    error.language = "Please select your language";
  }
  if (!value.typeofArticle) {
    error.typeofArticle = "Please select your type of Article";
  }
  if (!value.article) {
    error.article = "Please provide your article";
  }

  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

module.exports = acticleValidation;
