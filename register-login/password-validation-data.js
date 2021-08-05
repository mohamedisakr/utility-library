// https://www.w3schools.com/howto/howto_js_password_validation.asp
import {
  validateLowercaseLetters,
  validateCapitalLetters,
  validateNumbers,
  validateMinMaxLength,
  validateSpecialChars,
  validateWhiteSpaces,
} from "./password-validation.js";
const allCapitals = "ASC";
const allLowers = "asc";
const allNumbers = "123";
const noNumbers = "abc";
const withinRange = { password: "password", min: 8, max: 16 };
const withinNotRange = { password: "pas", min: 8, max: 16 };
const hasSpecialChars = "user@123";
const hasNoSpecialChars = "user";
const withWhiteSpaces = "abc defg";
const withoutWhiteSpaces = "abcdefg";

// validateLowercaseLetters
let result = validateLowercaseLetters(allLowers);
console.log(result === true);

result = validateLowercaseLetters(allCapitals);
console.log(result === false);

//  validateCapitalLetters
result = validateCapitalLetters(allCapitals);
console.log(result === true);

result = validateCapitalLetters(allLowers);
console.log(result === false);

//  validateNumbers
result = validateNumbers(allNumbers);
console.log(result === true);

result = validateNumbers(noNumbers);
console.log(result === false);

//  validateMinMaxLength
result = validateMinMaxLength(withinRange);
console.log(result === true);

result = validateMinMaxLength(withinNotRange);
console.log(result === false);

// validateSpecialChars
result = validateSpecialChars(hasSpecialChars);
console.log(result === true);

result = validateSpecialChars(hasNoSpecialChars);
console.log(result === false);

// validateWhiteSpaces
result = validateSpecialChars(withWhiteSpaces);
console.log(result === true);

result = validateSpecialChars(withoutWhiteSpaces);
console.log(result === false);
