// Requiring fs module in which
// readFile function is defined.

const fs = require("fs");

const filePath = "C:\\Users\\Diogo\\Desktop\\Crawler\\palavras.txt";
let data;

try {
  // Read the file synchronously
  data = fs.readFileSync(filePath, { encoding: "utf8" });
} catch (err) {
  console.error("Error reading the file:", err);
}

let palavras = data.split("\r\n");
let numbersToAdd = [];

function puzzle() {
  let firstDigit = undefined;
  let lastDigit = undefined;
  let number = 0;
  for (let currentWord of palavras) {
    for (let character of currentWord) {
      if (!isNaN(character)) {
        if (firstDigit === undefined) {
          firstDigit = character;
        } else {
          lastDigit = character;
        }
      }
    }
    if (lastDigit === undefined) {
      lastDigit = firstDigit;
      number = firstDigit + lastDigit;
    } else {
      number = firstDigit + lastDigit;
    }
    numbersToAdd.push(parseInt(number));

    firstDigit = undefined;
    lastDigit = undefined;
  }
  resultado();
}

function resultado() {
  let resultado = 0;
  for (let i = 0; i < numbersToAdd.length; i++) {
    resultado = numbersToAdd[i] + resultado;
  }
  console.log(resultado);
}
puzzle();
