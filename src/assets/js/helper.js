export const qs = (selector) => document.querySelector(selector);

export const qsChild = (selector, parent = document) =>
  parent.querySelector(selector);

export const currencyFormat = (currency) =>
  new Intl.NumberFormat(
    "pt-BR",
    { minimumFractionDigits: 2 },
    { maximumFractionDigits: 2 },
  ).format(currency);
