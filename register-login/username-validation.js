// https://stackoverflow.com/questions/9628879/javascript-regex-username-validation

/* 
    Usernames can only have: 
      - Lowercase Letters (a-z) and (A-Z)
      - Numbers (0-9)
      - Dots (.)
      - Underscores (_)
*/
const isValidUsername = (username) => {
  const regex = /^[a-zA-Z0-9_\.]+$/g;
  if (username.match(regex)) {
    return true;
  }
  return false;
};

const testCases = [
  { username: "Guiseppe_Reichert", expected: true },
  { username: "Randi_Volkman47", expected: true },
  { username: "Aurelio90", expected: true },
  { username: "Tiffany.White", expected: true },
  { username: "Shana.Rutherford5", expected: true },
  { username: "Johnnie.Cassin", expected: true },
  { username: "Betsy.Brown63", expected: true },
];

testCases.forEach(({ username, expected }) => {
  let actual = isValidUsername(username);
  console.log(actual === expected);
});
