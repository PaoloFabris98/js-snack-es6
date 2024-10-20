import * as objBike from "./obj/bike.js";
import * as objFootBall from "./obj/football.js";

const min = 1;
const max = 20;
export let bikeArray = [];
export let footballTeamArray = [];
export let footballNameFail = [];
export let arr = [];

export function isString(word) {
  return typeof word === "string";
}

export function randomNum(min, max) {
  const temp = Math.floor(Math.random() * (max - min + 1)) + min;
  return temp;
}

export function randomBykeCreator(itteration) {
  for (let i = 1; i <= itteration; i++) {
    // Cloniamo l'oggetto `Bike` per evitare di modificare l'oggetto originale
    const byke = { ...objBike.Bike }; // Cloniamo l'oggetto
    byke.name = `Bike${i}`; // Assegnamo nome e pesi
    byke.peso = randomNum(min, max);
    console.log(byke); // Stampiamo l'oggetto per ogni iterazione
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
  console.log(
    `La bici con un peso minore è la seguente: ${temp[0].name}, che ha peso:${temp[0].peso} `
  );
}

export function randomTeamCreator(itteration) {
  for (let i = 1; i <= itteration; i++) {
    // Cloniamo l'oggetto `Bike` per evitare di modificare l'oggetto originale
    const team = { ...objFootBall.footballTeam }; // Cloniamo l'oggetto
    team.name = `Team${i}`; // Assegnamo nome e pesi
    team.pointsMade = randomNum(min, max);
    team.fail = randomNum(min, max);
    console.log(team); // Stampiamo l'oggetto per ogni iterazione
    footballTeamArray.push(team);
  }
}

export function nameFail(itteration, footballTeamArray) {
  for (let i = 0; i < itteration; i++) {
    footballNameFail.push(footballTeamArray[i].name, footballTeamArray[i].fail);
  }
  console.log(footballNameFail);
}

export function snack(arr, a, b) {
  console.log(a);
  console.log(b);
  if (isNaN(a) || isNaN(b)) {
    alert("possono essere inseriti solo numeri!");
  } else {
    if (a > b) {
      alert(
        "il valore del secondo numero non può essere più piccolo rispetto a quello del primo!"
      );
    } else {
      const itt = b - a;
      for (let i = 1; i < itt; i++) {
        const temp = a + i;
        arr.push(temp);
      }
      console.log(arr);
    }
  }
}
