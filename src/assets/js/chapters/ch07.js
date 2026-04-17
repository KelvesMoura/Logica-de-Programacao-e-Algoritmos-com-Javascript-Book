import * as h from "../helper.js";
import * as c from "../constant.js";

// What's the Fruit? - Eg_7.1

const gameFruit = h.qs(".gameFruit");

const gameFruitSelectors = {
  gameFruitFrm: h.qsChild("form", gameFruit),
  gameFruitResp: h.qsChild("pre", gameFruit),
};

const { gameFruitFrm, gameFruitResp } = gameFruitSelectors;

gameFruitFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fruit = gameFruitFrm.name.value.toUpperCase();
  let resp = "";

  for (const letter of fruit) {
    if (fruit.charAt(0) == letter) {
      resp += fruit.charAt(0);
    } else {
      resp += "_";
    }
  }

  gameFruitResp.innerText = `Descubra: ${resp}`;
  gameFruitFrm.name.value = "*".repeat(fruit.length);
});

// Program name on Badge - Eg_7.4
const flName = h.qs(".flName");

const flNameSelectors = {
  flNameFrm: h.qsChild("form", flName),
  flNameResp: h.qsChild("pre", flName),
};

const { flNameFrm, flNameResp } = flNameSelectors;

flNameFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = flNameFrm.name.value;

  const firstName = name.indexOf(" ");
  const lastName = name.lastIndexOf(" ");
  if (name.length == 0) {
    alert("Favor digitar o nome do usuário!");
    flNameFrm.name.focus();
    return;
  } else {
    flNameResp.innerText = `Crachá: ${name.substr(0, firstName)} ${name.substr(lastName).trim()}`;
  }
});

// Institutional Email Program - Eg_7.5
const email = h.qs(".email");

const emailSelectors = {
  emailFrm: h.qsChild("form", email),
  emailResp: h.qsChild("pre", email),
};

const { emailFrm, emailResp } = emailSelectors;

emailFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = emailFrm.name.value;
  const frName = name.split(" ");
  let resp = "";

  for (let i = 0; i < frName.length - 1; i++) {
    resp += frName[i].charAt(0);
  }
  resp += frName[frName.length - 1];

  emailResp.innerText = `E-mail: ${resp.toLowerCase()}@empresa.com.br`;
});

// Password Validation Program - Eg_7.6

const pw = h.qs(".pw");

const pwSelectors = {
  pwFrm: h.qsChild("form", pw),
  pwResp: h.qsChild("pre", pw),
};

const { pwFrm, pwResp } = pwSelectors;

pwFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = pwFrm.word.value;
  const sizeWord = password.length;
  const errors = [];

  if (sizeWord == 0) {
    alert("Digite a senha para validação!");
    pwFrm.word.focus();
    return;
  }

  if (sizeWord < 8 || sizeWord > 15) {
    errors.push("Possuir entre 8 e 15 caracteres");
  }

  if (password.match(/[0-9]/g) == null) {
    errors.push("Possuir mínimo 1 número");
  }

  if (!password.match(/[a-z]/g)) {
    errors.push("Possuir mínimo 1 letra minúscula");
  }

  if (!password.match(/[A-Z]/g) || password.match(/[A-Z]/g).length == 1) {
    errors.push("Possuir mínimo 2 letras maiúsculas");
  }

  if (!password.match(/\W|_/g)) {
    errors.push("Possuir mínimo 1 símbolo");
  }

  if (errors.length == 0) {
    pwResp.innerText = `OK! Senha Válida`;
  } else {
    pwResp.innerText = `Erro.. A senha deve:\n${errors.join(",\n")} `;
  }
});

// Store Management Software - Eg_7.7
const store = h.qs(".store");

const storeSelectors = {
  storeFrm: h.qsChild("form", store),
  storeTax: h.qsChild("#tax", store),
  storeInterest: h.qsChild("#interest", store),
  storePayment: h.qsChild("#payment", store),
};

const { storeFrm, storeTax, storeInterest, storePayment } = storeSelectors;

const tax = 2 / 100;
const interest = 0.33 / 100;

storeFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const storeInput = {
    inputDate: storeFrm.date.value,
    value: Number(storeFrm.bill.value),
  };

  const { inputDate, value } = storeInput;

  const today = new Date();

  const [year, month, day] = inputDate.split("-");
  const dueDate = new Date(year, month - 1, day);

  const dueDays = (today - dueDate) / c.daytoMs;

  let taxField = 0;
  let interestField = 0;

  if (dueDays > 0) {
    taxField = value * tax;
    interestField = value * interest * dueDays;
  }

  const total = value + taxField + interestField;

  storePayment.value = total.toFixed(2);
  storeTax.value = taxField.toFixed(2);
  storeInterest.value = interestField.toFixed(2);
});

storeFrm.addEventListener("reset", () => {
  h.resetFull(storeSelectors);
});

// Cryptograph Program - Eg_7.10.a

const crypto = h.qs(".crypto");

const cryptoSelectors = {
  cryptoFrm: h.qsChild("form", crypto),
  cryptoResp: h.qsChild("pre", crypto),
  cryptoDescrypt: h.qsChild("#descrypt", crypto),
};

const { cryptoFrm, cryptoResp, cryptoDescrypt } = cryptoSelectors;

cryptoFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const valueInput = cryptoFrm.password.value;
  const sizeInput = valueInput.length;

  let output = "";
  let outputOdd = "";
  let outputEven = "";

  for (let i = 0; i < sizeInput; i++) {
    if (i % 2 == 0) {
      outputEven += valueInput.charAt(i);
    }
    if (i % 2 != 0) {
      outputOdd += valueInput.charAt(i);
    }
  }

  output = `${outputOdd}${outputEven}`;
  cryptoResp.innerText = output;
});

cryptoDescrypt.addEventListener("click", () => {
  const descryptInput = cryptoFrm.password.value;
  cryptoResp.innerText = descryptInput;
});

cryptoFrm.addEventListener("reset", () => {
  h.resetFull(cryptoSelectors);
});

// Palindrome Sentence Exercise - Eg_7.10.b
const pl = h.qs(".pl");

const plSelectors = {
  plFrm: h.qsChild("form", pl),
  plResp: h.qsChild("pre", pl),
};

const { plFrm, plResp } = plSelectors;

plFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = plFrm.input.value;
  const inputFormat = input.toUpperCase().replaceAll(" ", "");
  const sizeInput = input.length;
  let invertInput = "";
  let output = "";

  for (let i = sizeInput - 1; i >= 0; i--) {
    invertInput += inputFormat.charAt(i).toUpperCase().replaceAll(" ", "");
  }

  if (inputFormat.trim() == invertInput.trim()) {
    output = `${input} é um Palíndromo`;
  } else {
    output = `${input} não é um Palíndromo`;
  }

  plResp.innerText = output;
});

// Traffic Ticket - Eg_7.10.c
const traffic = h.qs(".traffic");

const trafficSelectors = {
  trafficFrm: h.qsChild("form", traffic),
  trafficResp: h.qsChild("pre", traffic),
};

const { trafficFrm, trafficResp } = trafficSelectors;

trafficFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const trafficInput = {
    dateInput: trafficFrm.date.value,
    billInput: Number(trafficFrm.bill.value),
  };
  const { dateInput, billInput } = trafficInput;

  const [year, month, day] = dateInput.split("-");
  const newDate = new Date(year, month - 1, day);

  const finalDate = h.dateFormat(newDate);
  const discount = h.currencyFormat(billInput * 0.8);

  const output = `Data Limite para Pagto com Desconto: ${finalDate}\n\nValor com Desconto R$: ${discount}`;

  trafficResp.innerText = output;
});
