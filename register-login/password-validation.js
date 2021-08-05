// https://www.w3schools.com/howto/howto_js_password_validation.asp

const validateLowercaseLetters = (password) => {
  const lowerCaseLetters = /[a-z]/g;
  if (password.match(lowerCaseLetters)) {
    return true;
  }
  return false;
};

const validateCapitalLetters = (password) => {
  const upperCaseLetters = /[A-Z]/g;
  if (password.match(upperCaseLetters)) {
    return true;
  }
  return false;
};

const validateNumbers = (password) => {
  const numbers = /[0-9]/g;
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

const validateSpecialChars = (password) => {
  // If you're using this for passwords, this one has all the special characters defined
  // by OWASP: /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(str)
  const specialChars = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g;
  if (password.match(specialChars)) {
    return true;
  }
  return false;
};

const validateWhiteSpaces = (password) => {
  const regex = /^\S+$/gm;
  if (password.match(regex)) {
    return true;
  }
  return false;
};

export {
  validateLowercaseLetters,
  validateCapitalLetters,
  validateNumbers,
  validateMinMaxLength,
  validateSpecialChars,
  validateWhiteSpaces,
};
