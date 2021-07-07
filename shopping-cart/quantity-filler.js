const fillFrom1ToN = (n) => {
  const result = [...Array(n).keys()].map((item) => item + 1);
  return result;
};

const n = 3;
const result = fillFrom1ToN(n);
console.log(result);
