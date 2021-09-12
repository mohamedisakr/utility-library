// https://www.w3schools.com/howto/howto_js_password_validation.asp

const lowerTestCases = [
  ["all capitals", "ASC", false],
  ["all lowers", "asc", true],
];

const upperTestCases = [
  ["all capitals", "ASC", true],
  ["all lowers", "asc", false],
];

const numbersTestCases = [
  ["all numbers", "123", true],
  ["no numbers", "abc", false],
];

const rangeTestCases = [
  // password, min, max
  ["with in range", "password", 8, 16, true],
  ["with in NOT range", "pas", 8, 16, false],
];

const specialCharsTestCases = [
  ["special chars", "user@123", true],
  ["no special chars", "user", false],
];

const whiteSpacesTestCases = [
  ["white spaces", "abc defg", true],
  ["no white spaces", "abcdefg", false],
];

module.exports = {
  lowerTestCases,
  upperTestCases,
  numbersTestCases,
  rangeTestCases,
  specialCharsTestCases,
  whiteSpacesTestCases,
};

/*
// const allCapitals = "ASC";
// const allLowers = "asc";
// const allNumbers = "123";
// const noNumbers = "abc";
// const withinRange = { password: "password", min: 8, max: 16 };
// const withinNotRange = { password: "pas", min: 8, max: 16 };
// const hasSpecialChars = "user@123";
// const hasNoSpecialChars = "user";
// const withWhiteSpaces = "abc defg";
// const withoutWhiteSpaces = "abcdefg";
*/
// ------------------------------------------------
/*
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
*/
