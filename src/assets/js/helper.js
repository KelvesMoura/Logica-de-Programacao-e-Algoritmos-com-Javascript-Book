import * as c from "./constant.js";

// Global Functions

export const half = (valueInput) => valueInput / 2;

export const qs = (selector) => document.querySelector(selector);

export const qsChild = (selector, parent = document) =>
  parent.querySelector(selector);

export const qsChildAll = (selector, parent = document) =>
  parent.querySelectorAll(selector);

export const resetFull = (fieldReset) => {
  const newListField = Object.values(fieldReset);
  newListField[0].reset();

  if (newListField.length > 0) {
    newListField.slice(1).forEach((item) => (item.innerText = ""));
  }
  return;
};

export const currencyFormat = (currency) =>
  new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2 }).format(currency);

// Toys Program - Eg_6.9

export const generateReport = (list) => {
  const group = Object.groupBy(list, (child) => child.age);

  let result = "";

  for (let age in group) {
    const ageRead = group[age];
    const qtdChild = ageRead.length;
    const qtdList = list.length;
    const perc = (qtdChild / qtdList) * c.perct;
    const childName = ageRead.map((child) => child.name).join(", ");

    result += `${age} ano(s): ${qtdChild} criança(s) - ${perc.toFixed(2)}%\n(${childName})\n\n`;
  }
  return result;
};

export const reduceList = (list) => {
  const newList = list.reduce(
    (acc, aux) => acc + `${aux.name} - ${aux.age} anos\n`,
    "",
  );
  return newList;
};

// Playoff Games - Eg_6.14.a

export const prepareGames = (list) => {
  let games = "";
  while (list.length > 0) {
    const lastTeam = list.pop();
    const firstTeam = list.shift();
    games += `${firstTeam} x ${lastTeam}\n`;
  }
  return games;
};

// Traffic Ticket - Eg_7.10.c

export const dateFormat = (date) => {
  const finalDate = new Date(date.getTime() + c.daytoMs * 90);

  const dayZero = addZero(finalDate.getDate());
  const monthZero = addZero(finalDate.getMonth() + 1);
  const year = addZero(finalDate.getFullYear());

  return `${dayZero}/${monthZero}/${year}`;
};

export const addZero = (value) => {
  return value < 10 ? `0${value}` : value;
};

// Car Dealership - Eg_8.3

export const dealOutput = (model, year, price) => {
  const currentYear = new Date().getFullYear();

  let classifyModel = "";

  if (year == currentYear) {
    classifyModel = `Novo`;
  } else if (year >= currentYear - 2) {
    classifyModel = `Seminovo`;
  } else {
    classifyModel = "Usado";
  }

  const priceInput =
    classifyModel == "Novo" ? price * c.perct50 : price * c.perct30;
  const priceParcel = (price - priceInput) / 10;

  return `${model} - ${classifyModel}\n\nEntrada: R$: ${currencyFormat(priceInput)}\n\n+10x de R$ ${currencyFormat(priceParcel)}`;
};

// Swimming Club - Eg_8.8.a

export const dashName = (userName) => {
  let newOutput = "";

  for (const letter of userName) {
    if (letter != " ") {
      newOutput += "-";
    } else {
      newOutput += " ";
    }
  }

  return newOutput;
};

export const categoryFilter = (ageUser) => {
  let category = "";
  if (ageUser <= c.childAge) {
    category = "Infantil";
  } else if (ageUser >= c.youngAge && ageUser <= c.adultAge) {
    category = "Juvenil";
  } else {
    category = "Adulto";
  }
  return category;
};

// Initial Password Program - Eg_8.8.b

export const validName = (userName) => {
  let output = "";
  if (userName.length > 0) {
    output = true;
  } else {
    output = false;
  }
  return output;
};

export const lastName = (userLastName) => {
  const listName = userLastName.split(" ");

  return listName.at(-1).toLowerCase();
};

export const qtdVowel = (userName) => {
  const qtd = userName.match(/[aeiou]/gi).length;
  return addZero(qtd);
};

// Pet Avenue - Eg_8.8.c

export const discountCalculate = (value, plan) => {
  const listDiscount = {
    health: c.perct50,
    friend: c.perct20,
    noplan: c.perct10,
  };

  return value * listDiscount[plan];
};

// Football Club - Eg_9.2 e Eg_9.6.a

export const changeClub = (clubSelected) => {
  let club = clubSelected.target.id.split("_")[1];
  let clubLowerCase = club.toLowerCase();
  const parent = clubSelected.target.closest(".container");

  if (clubLowerCase == "none") {
    localStorage.removeItem("club");
    delete parent.dataset.club;
    parent.querySelector("#imgClub").removeAttribute("alt");
    parent.querySelector("#imgClub").src =
      `./src/assets/image/Eg_8.8.c_${clubLowerCase}.png`;
  } else {
    parent.dataset.club = clubLowerCase;

    localStorage.setItem("club", clubLowerCase);

    changePhoto(parent, clubLowerCase, club);
  }
};

export const checkClub = (clubStorage) => {
  if (localStorage.getItem("club")) {
    const clubActive = localStorage.getItem("club");

    clubStorage.forEach((clubs) => {
      let clubSet = clubs.id.split("_")[1];
      let clubSetLowerCase = clubSet.toLowerCase();

      if (clubActive == clubSetLowerCase) {
        const parent = clubs.closest(".container");
        parent.dataset.club = clubSetLowerCase;

        clubs.checked = true;

        changePhoto(parent, clubSetLowerCase, clubSet);
      }
    });
  } else {
    clubStorage[0].closest(".container").querySelector("#imgClub").src =
      `./src/assets/image/Eg_8.8.c_none.png`;
  }
};

function changePhoto(parent, lowerCase, clubActived) {
  parent.querySelector("#imgClub").src =
    `./src/assets/image/Eg_8.8.c_${lowerCase}.png`;

  parent.querySelector("#imgClub").alt = `Símbolo do ${clubActived}`;
}

export const checkUser = (club) => {
  const output = qsChild("pre", club);
  let count;

  if (localStorage.getItem("counter")) {
    count = Number(localStorage.getItem("counter")) + 1;
    localStorage.setItem("counter", count);
    output.innerText = `Que bom que você voltou! Esta é a sua visita de número ${count} ao nosso site.\n\nAperte Ctrl + Shift + Q para resetar o contador`;
  } else {
    count += 1;
    localStorage.setItem("counter", count);
    output.innerText = `Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.`;
  }
};

export const resetUser = (e, club) => {
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() == "q") {
    const output = qsChild("pre", club);
    e.preventDefault();
    localStorage.removeItem("counter");
    localStorage.setItem("counter", 1);
    output.innerText = `Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.`;
  }
};

// How much does a watermelon weigh? - Eg_9.5

export const weightBet = (weight) => {
  if (localStorage.getItem("weight")) {
    const weightLocal = localStorage.getItem("weight").split(";");
    return weightLocal.includes(weight.toString());
  } else {
    return false;
  }
};

export const addBet = (user, weight) => {
  if (localStorage.getItem("name")) {
    const addName = `${localStorage.getItem("name")};${user}`;
    const addWeight = `${localStorage.getItem("weight")};${weight}`;
    localStorage.setItem("name", addName);
    localStorage.setItem("weight", addWeight);
  } else {
    localStorage.setItem("name", user);
    localStorage.setItem("weight", weight);
  }
};

export const showBet = (output) => {
  let bets = "";

  if (!localStorage.getItem("name")) {
    output.innerText = "";
    return;
  }

  const name = localStorage.getItem("name").split(";");
  const weight = localStorage.getItem("weight").split(";");

  name.forEach((user, i) => (bets += `${user} - ${weight[i]}gr\n`));

  output.innerText = bets;
};

export const checkWinner = () => {
  if (!localStorage.getItem("name")) {
    alert("Não há apostas cadastradas");
    return;
  }

  const correctWeight = Number(prompt("Qual o peso correto da Melancia?"));

  if (correctWeight == 0 || isNaN(correctWeight)) {
    return;
  }

  const names = localStorage.getItem("name").split(";");
  const weight = localStorage.getItem("weight").split(";");

  let nameWinner = names[0];
  let weightWinner = Number(weight[0]);

  for (let i = 1; i < names.length; i++) {
    const difWeightWinner = Math.abs(weightWinner - correctWeight);
    const difWeightBet = Math.abs(Number(weight[i] - correctWeight));

    if (difWeightBet < difWeightWinner) {
      nameWinner = names[i];
      weightWinner = Number(weight[i]);
    }
  }

  let mensagem = `Resultado - Peso Correto: ${correctWeight}gr\n${"-".repeat(40)}\nVencedor: ${nameWinner}\nAposta: ${weightWinner}gr`;
  alert(mensagem);
};

export const cleanBet = (form) => {
  if (confirm("Confirmar exclusão de todas apostas")) {
    localStorage.removeItem("name");
    localStorage.removeItem("weight");
    showBet(form);
  }
};

// Weekly Groceries - Eg_9.6.b

export const addProduct = (product) => {
  if (!product) {
    alert("Digite um produto para ser cadastrado");
    return;
  }

  if (localStorage.getItem("list")) {
    const addProduct = `${localStorage.getItem("list")};${product}`;
    localStorage.setItem("list", addProduct);
  } else {
    localStorage.setItem("list", product);
  }
};

export const showProduct = (output) => {
  let showList = "";

  if (!localStorage.getItem("list")) {
    output.innerText = "";
    return;
  }

  const products = localStorage.getItem("list").split(";");

  products.sort();

  showList = `Produtos Adicionados\n${"-".repeat(20)}\n`;

  products.forEach((item) => (showList += `${item}\n`));

  output.innerText = showList;
};

export const cleanProducts = (form) => {
  if (confirm("Confirmar exclusão de todos produtos")) {
    localStorage.removeItem("list");
    showProduct(form);
  }
};

// Vehicles Control Services - Eg_9.6.c

export const addService = (form) => {
  const newService = form.service.value;

  if (!newService) {
    alert("Favor primeiro registrar o serviço!");
    form.service.focus();
    return;
  }

  if (localStorage.getItem("services")) {
    const addService = `${localStorage.getItem("services")};${newService}`;
    localStorage.setItem("services", addService);
  } else {
    localStorage.setItem("services", newService);
  }
};

export const countService = (form) => {
  const outputCounter = qsChild("#counter", form);

  if (!localStorage.getItem("services")) {
    outputCounter.innerText = "";
    return;
  }

  const serviceList = localStorage.getItem("services").split(";");

  const counter = Number(serviceList.length);

  const resp = `Serviço Pendentes: ${counter}`;

  outputCounter.innerText = resp;
};

export const executeService = (form) => {
  const outputService = qsChild("#serviceResp", form);

  if (!localStorage.getItem("services")) {
    outputService.innerText = "";
    return;
  }

  const outputCounter = qsChild("#counter", form);

  const serviceList = localStorage.getItem("services").split(";");

  const serviceDoing = serviceList.splice(0, 1);

  const resp = serviceDoing[0];

  localStorage.setItem("services", serviceList.join(";"));

  if (serviceList[0] === "") {
    localStorage.removeItem("services");
    outputCounter.innerText = "";
  } else {
    countService(form);
    outputService.innerText = resp;
  }
};
