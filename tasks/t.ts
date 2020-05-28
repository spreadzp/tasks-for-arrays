const solution = (str: string, ending: string): boolean => {
  const len = [...str].length;
  return [...str].slice(len - [...ending].length).join("") === ending;
};

function sumNumbers(test: string): number {
  let sum = 0;
  test
    .split(" ")
    .filter((it) => (parseInt(it, 10) !== NaN ? +it : 0))
    .map((item) => (sum += parseInt(item, 10) !== NaN ? +item : 0));
  return sum;
}
