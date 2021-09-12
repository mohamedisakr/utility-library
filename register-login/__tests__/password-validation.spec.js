const {
  validateLowercaseLetters,
  validateCapitalLetters,
  validateNumbers,
  validateMinMaxLength,
  validateSpecialChars,
  validateWhiteSpaces,
} = require("../password-validation"); // "../password-validation.js";
const {
  lowerTestCases,
  upperTestCases,
  numbersTestCases,
  rangeTestCases,
  specialCharsTestCases,
  whiteSpacesTestCases,
} = require("../fixtures/password-validation-data");

describe("lower letters test cases", () => {
  test.each(lowerTestCases)(
    // description password, actual
    "(%s) %s %s",
    (description, password, actual) => {
      const expected = validateLowercaseLetters(password);
      expect(expected).toEqual(actual);
    }
  );
});

describe("upper letters test cases", () => {
  test.each(upperTestCases)(
    // description password, actual
    "(%s) %s %s",
    (description, password, actual) => {
      const expected = validateCapitalLetters(password);
      expect(expected).toEqual(actual);
    }
  );
});

describe("numbers test cases", () => {
  test.each(numbersTestCases)(
    // description password, actual
    "(%s) %s %s",
    (description, password, actual) => {
      const expected = validateNumbers(password);
      expect(expected).toEqual(actual);
    }
  );
});
