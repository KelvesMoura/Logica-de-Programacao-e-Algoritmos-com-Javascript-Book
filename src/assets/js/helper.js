import * as c from "./constant.js";

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

export const prepareGames = (list) => {
  let games = "";
  while (list.length > 0) {
    const lastTeam = list.pop();
    const firstTeam = list.shift();
    games += `${firstTeam} x ${lastTeam}\n`;
  }
  return games;
};

export const dateFormat = (date) => {
  const finalDate = new Date(date.getTime() + 86400000 * 90);

  const dayZero = addZero(finalDate.getDate());
  const monthZero = addZero(finalDate.getMonth() + 1);
  const year = addZero(finalDate.getFullYear());

  return `${dayZero}/${monthZero}/${year}`;
};

export const addZero = (value) => {
  return value < 10 ? `0${value}` : value;
};

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

export const discountCalculate = (value, plan) => {
  const listDiscount = {
    health: c.perct50,
    friend: c.perct20,
    noplan: c.perct10,
  };

  return value * listDiscount[plan];
};

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
