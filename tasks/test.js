const moveZeros = (arr) => {
  const withoutZero = arr.filter((i) => i !== 0);
  const zeroArray = Array(arr.length - withoutZero.length).fill(0);
  return [...withoutZero, ...zeroArray];
};

moveZeros([1,2,0,1,0,1,0,3,0,1]);

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
pigIt('Pig latin is cool');
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

tribonacci([],10);


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
  const t =  walk.length === 10 &&
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

const getMiddle = s => {
  let t = s.length - 1 >>> 1;
  let o = 50 >>> 2;
  let o1 = 10 >>> 2;
  let o2 = 1 >>> 1;
  let r = ~s.length;
  let e = r & 1;
  let q = 7&1;
  let w =  e + 1;
  return s.substr(t, w);
}
const getMiddle1 = (s) => {
  const wordArray = [...s];
  const wl = wordArray.length;
  return !wl % 2
    ? wordArray[(wl / 2 - 1) / 2]
    : wordArray[wl / 2 - 1] + wordArray[wl / 2];
};
function getMiddle2(s)
{
  let t = (s.length-1)/2;
let w =  s.length/2+1;
  const r = s.slice(t, w);
  return r;
}
//getMiddle('tesr7879');
const number = busStops => {
   let passengers = 0;
   busStops.map(station => {
    passengers += station[0] - station[1];
   })
   return passengers;
}

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
const DNAStrand = dna => {
  console.log('object :>> ', [...dna]);
  const r = [...dna].map(ch => {
    const e = 'ATGC'['TACG'.indexOf(ch)];
    console.log('e :>> ', e);
    return e.join("");
  });
  console.log('r :>> ', r);
  return r;
}
    

// DNAStrand('GTAC')


function digital_root(n) {
    const t = (--n % 9) + 1;
  return t;
}

function divisors(integer) {
    const s = Array(integer);
    console.log('s :>> ', s);
    console.log('s.keys() :>> ', s.keys());
    const r = [...s.keys()];
    console.log('r :>> ', r);
    const e = r.slice(2, integer);
    var divisors = e.filter(div => integer % div == 0);
    return divisors.length > 0 ? divisors : integer + ' is prime';
};

// digital_root(789);
//divisors(789);