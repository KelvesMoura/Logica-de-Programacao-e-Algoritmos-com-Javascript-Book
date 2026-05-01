import * as h from "../helper.js";

// Jockey Club - Eg_11.1

const jockey = h.qs(".jockey");

const jSelectors = {
  jFrm: h.qsChild("form", jockey),
  jList: h.qsChild("#list", jockey),
  jWinner: h.qsChild("#winner", jockey),
  jNewBet: h.qsChild("#newBet", jockey),
};

const { jFrm, jList, jWinner, jNewBet } = jSelectors;

const bets = [];

jFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  h.addHorse(jockey, bets);
});

jFrm.horse.addEventListener("blur", () => h.removeBlur(jockey, bets));

jFrm.horse.addEventListener("focus", () => {
  const output = h.qsChild("h5", jockey);
  jFrm.horse.value = "";
  output.innerText = "";
});

jList.addEventListener("click", () => h.sumBet(jockey, bets));

jWinner.addEventListener("click", () => h.winnerHorse(jockey, bets));

jNewBet.addEventListener("click", () => h.newBet(jockey, bets));

// Seat Reservations Program - Eg_11.2
const th = h.qs(".theater");

const thSelectors = {
  thFrm: h.qsChild("form", th),
  thSave: h.qsChild("form #save", th),
};

const { thFrm, thSave } = thSelectors;

const reservedSeat = [];

window.addEventListener("load", () => h.includeSeat(th, reservedSeat));

thFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  h.reserveSeat(th, reservedSeat);
});

thSave.addEventListener("click", () => h.saveSeat(th, reservedSeat));
