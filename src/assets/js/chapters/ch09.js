import * as h from "../helper.js";

// Football Club - Eg_9.2 e Eg_9.6.a
const club = h.qs(".club");

const clubSelectors = {
  clubTeam: h.qsChildAll('form input[type="radio"]', club),
};

const { clubTeam } = clubSelectors;

clubTeam.forEach((club) => club.addEventListener("change", h.changeClub));

h.checkClub(clubTeam);

window.addEventListener("load", () => h.checkUser(club));

document.addEventListener("keydown", (e) => h.resetUser(e, club));

// How much does a watermelon weight? - Eg_9.5

const wm = h.qs(".wm");

const wmSelectors = {
  wmFrm: h.qsChild("form", wm),
  wmWinner: h.qsChild("form #winner", wm),
  wmReset: h.qsChild("form #clean", wm),
  wmResp: h.qsChild("pre", wm),
};

const { wmFrm, wmWinner, wmReset, wmResp } = wmSelectors;

wmFrm.addEventListener("submit", (e) => {
  e.preventDefault();

  const bet = {
    user: wmFrm.namebet.value,
    weight: Number(wmFrm.weight.value),
  };

  const { user, weight } = bet;

  if (h.weightBet(weight)) {
    alert("Alguém já apostou este peso, informe outro...");
    wmFrm.namebet.focus();
    return;
  }

  h.addBet(user, weight);
  h.showBet(wmResp);

  wmFrm.reset();
  wmFrm.namebet.focus();
});

window.addEventListener("load", () => h.showBet(wmResp));

wmWinner.addEventListener("click", h.checkWinner);

wmReset.addEventListener("click", () => h.cleanBet(wmResp));

// Weekly Groceries - Eg_9.6.a

const gMkt = h.qs(".gMkt");

const gMktSelectors = {
  gMktFrm: h.qsChild("form", gMkt),
  gMkReset: h.qsChild("form #clean", gMkt),
  gMktResp: h.qsChild("pre", gMkt),
};

const { gMktFrm, gMkReset, gMktResp } = gMktSelectors;

gMktFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = gMktFrm.name.value;

  h.addProduct(product);

  gMktFrm.reset();
  gMktFrm.name.focus();

  h.showProduct(gMktResp);
});

window.addEventListener("load", () => h.showProduct(gMktResp));

gMkReset.addEventListener("click", () => h.cleanProducts(gMktResp));

// Vehicles Control Services - Eg_9.6.c

const cauto = h.qs(".cauto");

const cautoSelectors = {
  cautoFrm: h.qsChild("form", cauto),
  cautoExecute: h.qsChild("form #execute", cauto),
};

const { cautoFrm, cautoExecute } = cautoSelectors;

cautoFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  h.addService(cautoFrm);
  h.countService(cauto);
  cautoFrm.reset();
});

window.addEventListener("load", () => h.countService(cauto));

cautoExecute.addEventListener("click", () => h.executeService(cauto));
