const positiveTestCases = [
  // username, expected
  ["Guiseppe_Reichert", true],
  ["Randi_Volkman47", true],
  ["Aurelio90", true],
  ["Tiffany.White", true],
  ["Shana.Rutherford5", true],
  ["Johnnie.Cassin", true],
  ["Betsy.Brown63", true],
];

const edgeTestCases = [
  // description, username, expected
  ["should fail for white space", "Guiseppe Reichert", false],
  ["should fail for special characters", "$@&Reichert", false],
  ["should fail for leading & trailing white spaces", " eichert ", false],
];

module.exports = { positiveTestCases, edgeTestCases };
