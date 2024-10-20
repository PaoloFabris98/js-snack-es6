import * as objBike from "./obj/bike.js";

export function isString(word) {
  return typeof word === "string";
}

const min = 1;
const max = 20;

export function randomNum(min, max) {
  const temp = Math.floor(Math.random() * (max - min + 1)) + min;
  return temp;
}

export let bikeArray = [];

export function randomBykeCreator(itteration) {
  for (let i = 1; i <= itteration; i++) {
    // Cloniamo l'oggetto `Bike` per evitare di modificare l'oggetto originale
    const byke = { ...objBike.Bike }; // Clona l'oggetto
    byke.name = `Bike${i}`; // Assegna nome e peso
    byke.peso = randomNum(min, max);
    console.log(byke); // Stampa l'oggetto per ogni iterazione
    bikeArray.push(byke);
  }
}

export function lesserWeightBike(bikeArray, itteration) {
  const temp = [];
  temp.push(bikeArray[0]);
  for (let i = 1; i < itteration; i++) {
    const temp1 = [];
    temp1.push(bikeArray[i]);
    if (temp1[0].peso < temp[0].peso) {
      temp.pop();
      temp.push(bikeArray[i]);
    }
    temp1.pop();
  }
  console.log(`La bici con un peso minore è la seguente: ${temp[0].name}, che ha peso:${temp[0].peso} `);
}
