class User {
  constructor() {
    this.rnk = -8;
    this.prgs = 0;
  }
  get rank() {
    return this.rnk;
  }
  get progress() {
    return this.prgs;
  }
  incProgress(num) {
    const diff = Math.abs(this.rnk) - Math.abs(num);
    this.prgs += diff * diff * 10;
    if (this.prgs >= 100) {
      const r = Math.floor(this.prgs / 100);
      this.prgs -= r * 100;
      this.rnk =
        this.rnk === 8 ? 8 : this.rnk === 0 ? this.rnk + 1 : this.rnk + r;
    }
    return this.prgs;
  }
}
const u = new User();
console.log("this.progress :>> ", u.progress);
console.log("incProgress :>> ", u.incProgress(-7));
console.log("rank :>> ", u.rank);
console.log("incProgress :>> ", u.incProgress(-5));
console.log("rank :>> ", u.rank);
function listSquared(m, n) {
  const arr = [];
  for (let i = m; i < n; i++) {
    let sum = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        sum.push(j);
      }
    }
    const sumSquare = sum.reduce((total, amount) => total + amount * amount);
    const root = Math.floor(Math.sqrt(sumSquare));

    if (root * root === sumSquare) {
      arr.push([i, sumSquare]);
    }
  }
  return arr;
}

// const r = listSquared(1, 250);
// console.log("r :>> ", r);
// const cakes = (recipe, available) => {
//   let countDishies = Infinity;
//   for (key in recipe) {
//     console.log("key :>> ", key);
//     if (available.hasOwnProperty(key) && available[key] / recipe[key] >= 1) {
//       const num = available[key] / recipe[key];
//       countDishies =
//         countDishies > num && countDishies !== 0 ? num : countDishies;
//     } else {
//       countDishies = 0;
//     }
//   }
//   return Math.floor(countDishies);
// };
const cakes = (needs, has) =>
  Math.min(
    ...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0))
  );
// const r = cakes(
//   { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//   { sugar: 500, flour: 2000, milk: 2000, apples: 500, oil: 20 }
// );

// console.log("r :>> ", r);

const solution = (input, markers) => {
  const arr = input.split("\n");
  return arr
    .map((i) => {
      const e = [...i].findIndex((j, ind) => {
        if (markers.find((k) => k === j)) {
          return ind;
        }
      });
      return e !== -1 ? i.slice(0, e - i.length) : i.trim();
    })
    .join("\n");
};
// const r = solution("Q @b\nu\ne -e f g", ["@", "-"]);
// console.log("r :>> ", r);

function incrementString(input) {
  return input.replace(/\d*$/, function (n) {
    var x = ~~n + 1;
    return ("0000000" + x).slice(-Math.max(n.length, String(x).length));
  });
}
// const incrementString = (str) => {
//   let newStringArr = str.match(/[\d\.]+|\D+/g);
//   if (newStringArr) {
//     const len = newStringArr[newStringArr.length - 1].length;
//     newStringArr[newStringArr.length - 1] = String(
//       +newStringArr[newStringArr.length - 1] + 1
//     ).padStart(len, "0");
//     str = newStringArr.join("");
//   } else {
//     str += "1";
//   }
//   return str;
// };

// const r = incrementString("0009");
// console.log("r :>> ", r);
const humanReadable = (secs) =>
  [60 * 60, 60, 1]
    .map((cur) => {
      const val = Math.floor(secs / cur);
      secs = secs % cur;
      return String(val).length == 1 ? `0${val}` : val;
    })
    .join(":");

// const humanReadable = (seconds) => {
//   let time = ["00", "00", "00"];
//   if (3600 <= +seconds) {
//     const hours = Math.floor(seconds / 3600);
//     time[0] = hours < 10 ? `0${hours}` : `${hours}`;
//     seconds = seconds - +time[0] * 3600;
//   }
//   if (60 <= seconds < 3600) {
//     const min = Math.floor(seconds / 60);
//     time[1] = min < 10 ? `0${min}` : `${min}`;
//     seconds = seconds - +time[1] * 60;
//   }
//   if (seconds < 60) {
//     const sec = Math.floor(seconds);
//     time[2] = sec < 10 ? `0${sec}` : `${sec}`;
//   }
//   return time.join(":");
// };
// const time = humanReadable(3600);
// console.log("time :>> ", time);
const add = (a, b) => {
  let res = "",
    c = 0;
  a = [...a];
  b = [...b];
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res;
};
// const o = add("63829983432984289347293874", "90938498237058927340892374089");
// console.log("o :>> ", o);

const thirdMax = function (nums) {
  const t = nums.filter((k) => k !== Math.max(...nums));
  if (
    (t.length <= 2 &&
      t.every((item) => {
        return item !== t[0];
      })) ||
    t.every((item) => {
      return item === t[0];
    }) === true
  ) {
    return Math.max(...nums);
  } else if (t.length > 2) {
    const w = t.filter((n, i, arr) => n !== Math.max(...arr));
    return w.length > 1
      ? w.find((m, u, arrThird) => m === Math.max(...arrThird))
      : Math.min(...nums);
  } else {
    return Math.min(...nums);
  }
};

// const r = thirdMax([
//   -2147483648,
//   -2147483648,
//   -2147483648,
//   -2147483648,
//   1,
//   1,
//   1,
// ]);
// console.log("r :>> ", r);
const twoSum = function (nums, target) {
  let arr = [];
  nums.map((i, indI) => {
    nums.slice(indI + 1).find((j, indJ) => {
      if (j + i === target) {
        arr = [indI, indI + indJ + 1];
      }
    });
  });
  return arr;
};
// twoSum([3,2,4], 6);

const permutations = (string) => {
  let arr = [];
  let t = [...string];
  if (t.length > 1) {
    const revers = [...t].reverse();
    for (let j = 0; j < t.length - 1; j++) {
      let r = t[j];
      t[j] = t[j + 1];
      t[j + 1] = r;

      arr.push(t.join(""));
      r = revers[j];
      revers[j] = revers[j + 1];
      revers[j + 1] = r;
      arr.push(revers.join(""));
    }
  } else {
    arr = [...t];
  }

  return arr;
};
///permutations("abc");

const romeNumb = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
const solution1 = (number) => {
  let sum = "";
  let num = number;
  for (const key in romeNumb) {
    while (num >= romeNumb[key]) {
      num = num - romeNumb[key];
      sum += key;
    }
  }
  return sum;
};

// solution(647);

const sumTwoSmallestNumbers1 = (numbers) => {
  const positive = numbers.filter((pos) => pos >= 0);
  const firstMin = Math.min(...positive);
  return positive.filter((n) => n === firstMin).length >= 2
    ? firstMin * 2
    : Math.min(...positive.filter((n) => n !== firstMin)) + firstMin;
};

function sumTwoSmallestNumbers(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

// sumTwoSmallestNumbers([5, 8, 9, 64, -8]);

const maxSequence1 = (arr) => {
  let currentSum = 0;
  let maxSum = 0;
  arr.map((i) => {
    currentSum = Math.max(currentSum + i, 0);
    maxSum = Math.max(currentSum, maxSum);
  });
  return maxSum;
};
const maxSequence = (I) => {
  [$, l] = [(i = -1), I.length];
  while (([_, q] = [0, ++i])[1] - l)
    while (l - q) (_ += I[q++]), ($ = _ > $ ? _ : $);
  return ~$ && $;
};
const maxSequence2 = (arr) =>
  Math.max(...arr.reduce((a, c) => [Math.max(a[0] + c, c), ...a], [0]));
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

const moveZeros = (arr) => {
  const withoutZero = arr.filter((i) => i !== 0);
  const zeroArray = Array(arr.length - withoutZero.length).fill(0);
  return [...withoutZero, ...zeroArray];
};

// moveZeros([1,2,0,1,0,1,0,3,0,1]);

const pigIt = (str) => {
  return str
    .split(" ")
    .map((i) => {
      const s = [...i];
      const r =
        i.charCodeAt(0) > 64 && i.charCodeAt(0) < 122 ? s.shift() + "ay" : "";
      return [...s, ...r].join("");
    })
    .join(" ");
};
pigIt("Pig latin is cool");
const tribonacci = (signature, n) => {
  const sl = signature.length;
  const len = Math.abs(n - sl);
  const t =
    signature.length >= 3
      ? [...signature, ...Array(len)].map((v, i, arr) => {
          if (i > sl - 1) {
            return (arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1]);
          } else {
            return (arr[i] = v);
          }
        })
      : signature;
  return t.slice(0, n);
};

tribonacci([], 10);

const uniqueInOrder = (iterable) => {
  const result = [];
  const iterableArr = [...iterable];
  if (iterableArr.length) {
    result.push(iterableArr[0]);
    [...iterable].map((char) => {
      if (result[result.length - 1] !== char) {
        result.push(char);
      }
    });
  }
  return result;
};
// uniqueInOrder('ABBCcADD');
const isValidWalk = (walk) => {
  const nWalks = walk.filter((item) => item === "n");
  const sWalks = walk.filter((item) => item === "s");
  const wWalks = walk.filter((item) => item === "w");
  const eWalks = walk.filter((item) => item === "e");
  const t =
    walk.length === 10 &&
    nWalks.length - sWalks.length + wWalks.length - eWalks.length === 0;
  return t;
};
// isValidWalk(['s','e','w','n','n','s','e','w','n','s']);

function alphabetPosition(text) {
  let result = "";
  [...text].map(
    (char) =>
      (result +=
        char.toUpperCase().charCodeAt(0) >= 65 &&
        char.toUpperCase().charCodeAt(0) < 91
          ? `${char.toUpperCase().charCodeAt(0) - 64} `
          : "")
  );
  return result;
}

// alphabetPosition("The sunset sets at twelve o' clock.");
const maskify = (cc) => {
  const len = cc.length;
  return len > 4 ? "#".repeat(len - 4).cc.substr(len - 4, len) : cc;
};
// maskify('fsadfasf sdfsadf');

const list = (names) => {
  const namesArray = names.map((person) => person.name);
  const lengthNames = namesArray.length;
  return lengthNames > 2
    ? namesArray.slice(0, lengthNames - 2).join(", ") +
        `, ${namesArray[lengthNames - 2]} & ${namesArray[lengthNames - 1]}`
    : namesArray.join(", ");
};
//list([ {name: 'Bart'},{name: 'Lisa'}]);

const getMiddle = (s) => {
  let t = (s.length - 1) >>> 1;
  let o = 50 >>> 2;
  let o1 = 10 >>> 2;
  let o2 = 1 >>> 1;
  let r = ~s.length;
  let e = r & 1;
  let q = 7 & 1;
  let w = e + 1;
  return s.substr(t, w);
};
const getMiddle1 = (s) => {
  const wordArray = [...s];
  const wl = wordArray.length;
  return !wl % 2
    ? wordArray[(wl / 2 - 1) / 2]
    : wordArray[wl / 2 - 1] + wordArray[wl / 2];
};
function getMiddle2(s) {
  let t = (s.length - 1) / 2;
  let w = s.length / 2 + 1;
  const r = s.slice(t, w);
  return r;
}
//getMiddle('tesr7879');
const number = (busStops) => {
  let passengers = 0;
  busStops.map((station) => {
    passengers += station[0] - station[1];
  });
  return passengers;
};

// number([[10,0],[3,5],[5,8]]);

function DNAStrand1(dna) {
  const arrayDna = dna.split("");
  let newWord = "";
  const bindSymbols = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  arrayDna.map((char) => {
    if (bindSymbols[char] !== undefined) {
      newWord += bindSymbols[char];
    } else {
      newWord += char;
    }
  });
}
const DNAStrand = (dna) => {
  console.log("object :>> ", [...dna]);
  const r = [...dna].map((ch) => {
    const e = "ATGC"["TACG".indexOf(ch)];
    console.log("e :>> ", e);
    return e.join("");
  });
  console.log("r :>> ", r);
  return r;
};

// DNAStrand('GTAC')

function digital_root(n) {
  const t = (--n % 9) + 1;
  return t;
}

function divisors(integer) {
  const s = Array(integer);
  console.log("s :>> ", s);
  console.log("s.keys() :>> ", s.keys());
  const r = [...s.keys()];
  console.log("r :>> ", r);
  const e = r.slice(2, integer);
  var divisors = e.filter((div) => integer % div == 0);
  return divisors.length > 0 ? divisors : integer + " is prime";
}

// digital_root(789);
//divisors(789);
