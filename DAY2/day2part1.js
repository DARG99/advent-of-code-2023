const fs = require("fs");

const filePath = "C:\\Users\\Diogo\\Desktop\\ADVENT CODE\\day2words.txt";
let data;

try {
  // Read the file synchronously
  data = fs.readFileSync(filePath, { encoding: "utf8" });
} catch (err) {
  console.error("Error reading the file:", err);
}

const gamesTXT = data.split("\r\n");

const colors = {
  red: 12,
  green: 13,
  blue: 14,
};

const gameData = {};

gamesTXT.forEach((game) => {
  const [gameNumber, GameRounds] = game.split(":");

  const roundsArray = GameRounds.split(";");

  const roundsData = [];

  roundsArray.forEach((entry) => {
    // Split each entry by commas and trim whitespace
    const pairs = entry.split(",").map((pair) => pair.trim());
    const obj = {};
    pairs.forEach((pair) => {
      const [number, color] = pair.split(" ");

      obj[color] = parseInt(number);
    });
    roundsData.push(obj);
  });
  gameData[gameNumber] = roundsData;
});

let resultado = 0;

for (let i = 0; i < Object.keys(gameData).length; i++) {
  const value = i + 1;
  const arrayRondas = gameData["Game " + value];
  let contador = 0;
  let valueToBeEqual = arrayRondas.length;

  for (let j = 0; j < arrayRondas.length; j++) {
    const red = arrayRondas[j]["red"] ?? 0;
    const green = arrayRondas[j]["green"] ?? 0;
    const blue = arrayRondas[j]["blue"] ?? 0;
    if (red <= colors.red && green <= colors.green && blue <= colors.blue) {
      contador++;
    }
  }
  if (contador === valueToBeEqual) {
    resultado = resultado + value;
  }
}
console.log(resultado);
