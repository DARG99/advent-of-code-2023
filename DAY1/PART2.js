const fs = require("fs");

const filePath = "C:\\Users\\Diogo\\Desktop\\Crawler\\palavras.txt";
let data;
let numbersToAdd = [];
try {
  // Read the file synchronously
  data = fs.readFileSync(filePath, { encoding: "utf8" });
} catch (err) {
  console.error("Error reading the file:", err);
}

let palavras = data.split("\r\n");

const numbersExtense = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const numberDigit = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
function puzzle2() {
  for (let currentWord of palavras) {
    let lowestHighestIndex = [];
    let firstDigit;
    let lastDigit;

    numbersExtense.forEach((word) => {
      let index = currentWord.indexOf(word);
      const indices = [];

      while (index !== -1) {
        indices.push(index);
        index = currentWord.indexOf(word, index + 1);
      }

      if (indices.length > 0) {
        lowestHighestIndex.push({ word, indices });
      }
    });
    numberDigit.forEach((word) => {
      let index = currentWord.indexOf(word);
      const indices = [];

      while (index !== -1) {
        indices.push(index);
        index = currentWord.indexOf(word, index + 1);
      }

      if (indices.length > 0) {
        lowestHighestIndex.push({ word, indices });
      }
    });

    lowestHighestIndex = lowestHighestIndex.flatMap(({ word, indices }) =>
      indices.map((index) => ({ word, index }))
    );

    let highestIndex = lowestHighestIndex[0].index;
    let lowestIndex = lowestHighestIndex[0].index;
    let highestWord = lowestHighestIndex[0].word;
    let lowestWord = lowestHighestIndex[0].word;

    for (let i = 1; i < lowestHighestIndex.length; i++) {
      if (lowestHighestIndex[i].index > highestIndex) {
        highestIndex = lowestHighestIndex[i].index;
        highestWord = lowestHighestIndex[i].word;
      }

      if (lowestHighestIndex[i].index < lowestIndex) {
        lowestIndex = lowestHighestIndex[i].index;
        lowestWord = lowestHighestIndex[i].word;
      }
    }
    firstDigit = transformIntoNumber(lowestWord);
    lastDigit = transformIntoNumber(highestWord);

    let number = firstDigit + "" + lastDigit;
    console.log(parseInt(number));
    numbersToAdd.push(parseInt(number));
  }
  resultado(numbersToAdd);
}

function resultado() {
  let resultado = 0;
  for (let i = 0; i < numbersToAdd.length; i++) {
    resultado = numbersToAdd[i] + resultado;
  }
  console.log(resultado);
}
function transformIntoNumber(word) {
  switch (word) {
    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
    default:
      return word;
  }
}

puzzle2();
