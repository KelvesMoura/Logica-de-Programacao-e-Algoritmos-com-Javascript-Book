export const half = (valueInput) => valueInput / 2;

export const qs = (selector) => document.querySelector(selector);

export const qsChild = (selector, parent = document) =>
  parent.querySelector(selector);

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
    const perc = (qtdChild / qtdList) * 100;
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

  const dayZero =
    finalDate.getDate() < 10 ? "0" + finalDate.getDate() : finalDate.getDate();

  const monthZero =
    finalDate.getMonth() + 1 < 10
      ? `0${finalDate.getMonth() + 1}`
      : finalDate.getMonth() + 1;

  const year = finalDate.getFullYear();

  return `${dayZero}/${monthZero}/${year}`;
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

  const priceInput = classifyModel == "Novo" ? price * 0.5 : price * 0.3;
  const priceParcel = (price - priceInput) / 10;

  return `${model} - ${classifyModel}\n\nEntrada: R$: ${currencyFormat(priceInput)}\n\n+10x de R$ ${currencyFormat(priceParcel)}`;
};
