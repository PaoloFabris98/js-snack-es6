import * as objBike from "./obj/bike.js";
import * as objFootBall from "./obj/football.js";

/**
 * Description placeholder
 *
 * @type {int}
 */
const min = 1;

/**
 * Description placeholder
 *
 * @type {int}
 */
const max = 20;

/**
 * Description placeholder
 *
 * @type {Array}
 */
export let bikeArray = [];

/**
 * Description placeholder
 *
 * @type {Array}
 */
export let footballTeamArray = [];

/**
 * Description placeholder
 *
 * @type {Array}
 */
export let footballNameFail = [];

/**
 * Description placeholder
 *
 * @type {Array}
 */
export let arr = [];

/**
 * Description placeholder
 *
 * @export
 * @param {*} word
 * @returns {boolean}
 */
export function isString(word) {
  return typeof word === "string";
}

/**
 * Description placeholder
 *
 * @export
 * @param {number} min
 * @param {number} max
 * @returns {int}
 */
export function randomNum(min, max) {
  const temp = Math.floor(Math.random() * (max - min + 1)) + min;
  return temp;
}

/**
 * Description placeholder
 *
 * @export
 * @param {int} itteration
 */
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

/**
 * Description placeholder
 *
 * @export
 * @param {array} bikeArray
 * @param {int} itteration
 */
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

/**
 * Description placeholder
 *
 * @export
 * @param {int} itteration
 */
export function randomTeamCreator(itteration) {
  for (let i = 1; i <= itteration; i++) {
    // Cloniamo l'oggetto `Bike` per evitare di modificare l'oggetto originale
    const team = { ...objFootBall.footballTeam }; // Cloniamo l'oggetto
    team.name = `Squadra${i}`; // Assegnamo nome e pesi
    team.pointsMade = randomNum(min, max);
    team.fail = randomNum(min, max);
    console.log(team); // Stampiamo l'oggetto per ogni iterazione
    footballTeamArray.push(team);
  }
}

/**
 * Description placeholder
 *
 * @export
 * @param {int} itteration
 * @param {array} footballTeamArray
 */
export function nameFail(itteration, footballTeamArray) {
  for (let i = 0; i < itteration; i++) {
    const temp = "Nome: " + footballTeamArray[i].name + ". Falli: " + footballTeamArray[i].fail;
    footballNameFail.push(temp)
  }
  console.log(footballNameFail);
}

/**
 * Description placeholder
 *
 * @export
 * @param {array} arr
 * @param {int} a
 * @param {int} b
 */
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
