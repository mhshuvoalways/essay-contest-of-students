const authorValidation = (value) => {
    const error = {};
    if (!value.email) {
      error.email = "Please give email";
    }
    if (!value.bookName) {
      error.bookName = "Please give bookName";
    }
  
    let isValid = Object.keys(error).length === 0;
    return {
      error,
      isValid,
    };
  };
  
  module.exports = authorValidation;
  