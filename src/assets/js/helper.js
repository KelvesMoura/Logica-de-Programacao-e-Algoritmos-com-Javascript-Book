export const qs = (selector) => document.querySelector(selector);

export const qsChild = (selector, parent = document) =>
  parent.querySelector(selector);

export const currencyFormat = (currency) =>
  new Intl.NumberFormat(
    "pt-BR",
    { minimumFractionDigits: 2 },
    { maximumFractionDigits: 2 },
  ).format(currency);

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
