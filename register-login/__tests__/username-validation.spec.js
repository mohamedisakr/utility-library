const isValidUsername = require("../username-validation");
const testCases = require("../fixtures/username-validation-data");

describe("username happy test cases", () => {
  test.each(testCases)(
    // username, actual
    "%s  %s",
    (username, actual) => {
      const expected = isValidUsername(username);
      expect(expected).toEqual(actual);
    }
  );
});
