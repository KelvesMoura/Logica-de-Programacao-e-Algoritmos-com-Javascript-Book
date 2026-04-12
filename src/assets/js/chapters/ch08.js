import * as h from "../helper.js";
import * as c from "../constant.js";

// Car Dealership - Eg_8.3

const dealCar = h.qs(".dealCar");

const dealCarSelectors = {
  dealCarFrm: h.qsChild("form", dealCar),
  dealCarResp: h.qsChild("pre", dealCar),
};

const { dealCarFrm, dealCarResp } = dealCarSelectors;

dealCarFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const car = {
    model: dealCarFrm.car.value,
    year: Number(dealCarFrm.year.value),
    price: Number(dealCarFrm.price.value),
  };

  const { model, year, price } = car;

  dealCarResp.innerText = h.dealOutput(model, year, price);
});

dealCarFrm.addEventListener("reset", () => {
  h.resetFull(dealCarSelectors);
});

// Pizza Order Control - Eg_8.6
const pizza = h.qs(".pizza");

const pizzaSelectors = {
  pizzaFrm: h.qsChild("form", pizza),
  pizzaList: h.qsChild("form #lPizza", pizza),
  drinkList: h.qsChild("form #lDrink", pizza),
  pizzaSelect: h.qsChild("form #sPizza", pizza),
  drinkSelect: h.qsChild("form #sDrink", pizza),
  orderInput: h.qsChild("form #order", pizza),
  pizzaResp: h.qsChild("pre", pizza),
};

const {
  pizzaFrm,
  pizzaList,
  drinkList,
  pizzaSelect,
  drinkSelect,
  orderInput,
  pizzaResp,
} = pizzaSelectors;

let itens = [];

pizzaSelect.addEventListener("click", () => {
  drinkList.classList.add("hidden");
  pizzaList.classList.remove("hidden");
});

drinkSelect.addEventListener("click", () => {
  pizzaList.classList.add("hidden");
  drinkList.classList.remove("hidden");
});

orderInput.addEventListener("focus", () => {
  if (pizzaSelect.checked) {
    const orderList = pizzaList.value;

    const pizzaRules = {
      middle: c.middlePieces,
      big: c.bigPieces,
      family: c.familyPieces,
    };

    const num = pizzaRules[orderList];
    orderInput.placeholder = `Até ${num} sabores`;
  }

  if (drinkSelect.checked) {
    const orderList = drinkList.value;

    const drinkRules = {
      soda: ["Coca-Cola", "Pespi", "Fanta", "Guaraná"],
      juice: ["Uva", "Laranja", "Limão", "Maracujá"],
      water: ["Com gás", "Sem Gás"],
    };

    const num = drinkRules[orderList];
    orderInput.placeholder = `(${num.join(", ")})`;
  }
});

orderInput.addEventListener("blur", () => {
  orderInput.placeholder = "";
});

pizzaFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  let orderFinalList;

  if (pizzaSelect.checked) {
    const num = pizzaList.selectedIndex;
    orderFinalList = pizzaList.options[num].text;
  } else {
    const num = drinkList.selectedIndex;
    orderFinalList = drinkList.options[num].text;
  }

  const order = orderInput.value;

  itens.push(orderFinalList + " (" + order + ")");

  pizzaResp.innerText = itens.join("\n");

  pizzaFrm.reset();

  pizzaSelect.dispatchEvent(new Event("click"));
});

// Swimming Club - Eg_8.8.a
const swim = h.qs(".swim");

const swimSelectors = {
  swimFrm: h.qsChild("form", swim),
  swimResp: h.qsChild("pre", swim),
};

const { swimFrm, swimResp } = swimSelectors;

swimFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const athlete = {
    nameUser: swimFrm.name.value,
    ageUser: Number(swimFrm.age.value),
  };

  const { nameUser, ageUser } = athlete;

  const dash = h.dashName(nameUser);
  const category = h.categoryFilter(ageUser);

  swimResp.innerText = `${nameUser}\n${dash}\nCategoria: ${category}`;
});

swimFrm.addEventListener("reset", () => {
  h.resetFull(swimSelectors);
});

// Initial Password Program - Eg_8.8.b
const iPw = h.qs(".iPw");

const iPwSelectors = {
  iPwFrm: h.qsChild("form", iPw),
  iPwResp: h.qsChild("pre", iPw),
};

const { iPwFrm, iPwResp } = iPwSelectors;

iPwFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameUser = iPwFrm.name.value;

  if (h.validName(nameUser)) {
    const ouputLastName = h.lastName(nameUser.trim());
    const qtdVowel = h.qtdVowel(nameUser.trim());
    iPwResp.innerText = `Senha Inicial: ${ouputLastName}${qtdVowel}`;
  } else {
    alert(`Nome Incompleto, digite o seu nome`);
    iPwFrm.name.focus();
    return;
  }
});

iPwFrm.addEventListener("reset", () => {
  h.resetFull(iPwSelectors);
});

// Pet Avenue - Eg_8.8.c
const petAv = h.qs(".petAv");

const petAvSelectors = {
  petAvFrm: h.qsChild("form", petAv),
  petAvEnabled: h.qsChild("form #yes", petAv),
  petAvDisabled: h.qsChild("form #no", petAv),
  petAvEnablePlan: h.qsChild("form #enable-plan", petAv),
  petAvListPlan: h.qsChild("form #listPlans", petAv),
  petAvDisablePlan: h.qsChild("form #disable-plan", petAv),
  petAvResp: h.qsChild("pre", petAv),
};

const {
  petAvFrm,
  petAvEnabled,
  petAvDisabled,
  petAvEnablePlan,
  petAvListPlan,
  petAvDisablePlan,
  petAvResp,
} = petAvSelectors;

petAvEnabled.addEventListener("click", () => {
  petAvEnablePlan.classList.remove("hidden");
  petAvDisablePlan.classList.add("hidden");
});

petAvDisabled.addEventListener("click", () => {
  petAvEnablePlan.classList.add("hidden");
  petAvDisablePlan.classList.remove("hidden");
});

petAvFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = Number(petAvFrm.price.value);
  let plan;

  if (petAvEnabled.checked) {
    const num = petAvListPlan.selectedIndex;
    plan = petAvListPlan.options[num].value;
  } else {
    plan = "noplan";
  }
  console.log(plan);

  const discountValue = h.discountCalculate(value, plan);

  petAvResp.innerText = `Desconto ${h.currencyFormat(discountValue)}\n\nA Pagar: R$ ${h.currencyFormat(value - discountValue)}`;
});

petAvFrm.addEventListener("reset", () => {
  h.resetFull(petAvSelectors);
});
