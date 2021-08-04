// https://www.w3schools.com/howto/howto_js_password_validation.asp

const validateLowercaseLetters = (password) => {
  var lowerCaseLetters = /[a-z]/g;
  if (password.match(lowerCaseLetters)) {
    return true;
  }
  return false;
};

const validateCapitalLetters = (password) => {
  var upperCaseLetters = /[A-Z]/g;
  if (password.match(upperCaseLetters)) {
    return true;
  }
  return false;
};

const validateNumbers = (password) => {
  var numbers = /[0-9]/g;
  if (password.match(numbers)) {
    return true;
  }
  return false;
};

const validateMinMaxLength = ({ password, min, max }) => {
  if (password.length >= min && password.length <= max) {
    return true;
  }
  return false;
};

export {
  validateLowercaseLetters,
  validateCapitalLetters,
  validateNumbers,
  validateMinMaxLength,
};
