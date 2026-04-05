import * as h from "../helper.js";
import * as c from "../constant.js";

// Multiplication Table Program - Eg_5.1
const tabuada = h.qs(".multiplication-table");

const tabuadaSelectors = {
  tabuadaFrm: h.qsChild("form", tabuada),
  tabuadaResp: h.qsChild("pre", tabuada),
};

const { tabuadaFrm, tabuadaResp } = tabuadaSelectors;

tabuadaFrm.addEventListener("submit", (e) => {
  const value = Number(tabuadaFrm.numberInput.value);
  let result = "";
  for (let i = 0; i <= c.limitMultiplication; i++) {
    result += `${value} x ${i} = ${value * i}\n`;
  }
  tabuadaResp.innerText = result;
  e.preventDefault();
});

tabuadaFrm.addEventListener("reset", () => {
  h.resetFull(tabuadaSelectors);
});

// Decreasing Program - Eg_5.2
const decrescent = h.qs(".decrescent");

const decrescentSelectors = {
  decrescentFrm: h.qsChild("form", decrescent),
  decrescentResp: h.qsChild("pre", decrescent),
};

const { decrescentFrm, decrescentResp } = decrescentSelectors;

decrescentFrm.addEventListener("submit", (e) => {
  const value = Number(decrescentFrm.numberInput.value);
  let decrescentResult = "";
  for (let i = value; i >= 1; i--) {
    if (i == 1) {
      decrescentResult += `${i}.`;
    } else {
      decrescentResult += `${i}, `;
    }
    decrescentResp.innerHTML = `<strong>Entre ${value} e 1:</strong>\n${decrescentResult}\n`;
    e.preventDefault();
  }
});

decrescentFrm.addEventListener("reset", (e) => {
  h.resetFull(decrescentSelectors);
});

// Breaks in Ties - Eg_5.3
const startTest = h.qs(".break_continue button");

startTest.addEventListener("click", (e) => {
  alert("Digite 0 para sair");
  do {
    const number = Number(prompt("Número: "));
    if (number == 0 || isNaN(number)) {
      const exit = confirm("Confirma saída?");
      if (exit) {
        break;
      } else {
        continue;
      }
    }
    if (number % 2 == 0) {
      alert(`O dobro de ${number} é ${number * c.double}`);
    } else {
      alert(`O triplo de ${number} é ${number * c.triple}`);
    }
  } while (true);
});

// Monthly Accounts Program in Laços - Eg_5.5
const bill = h.qs(".bill_month");

const billSelectors = {
  billFrm: h.qsChild("form", bill),
  billResp1: h.qsChild("#resp1", bill),
  billResp2: h.qsChild("#resp2", bill),
};

const { billFrm, billResp1, billResp2 } = billSelectors;

let totalAmount = 0; // Declarado como variável global, pois após submite a memória interna retorna forma zera.
let countBill = 0; // Declarado como variável global, pois após submite a memória interna retorna forma zera.

billFrm.addEventListener("submit", (e) => {
  const billInput = {
    bill: billFrm.bill.value,
    priceBill: Number(billFrm.amount.value),
  };

  const { bill, priceBill } = billInput;

  totalAmount += priceBill;
  countBill++;

  billResp1.innerText += `${bill} - R$ ${priceBill.toFixed(2)}\n`;
  billResp2.innerText = `--------------------\n${countBill} Conta(s) - Total R$ ${totalAmount.toFixed(2)}`;

  billFrm.bill.value = "";
  billFrm.amount.value = "";

  e.preventDefault();
});

billFrm.addEventListener("reset", () => {
  h.resetFull(billSelectors);
});

// Prime Numbers Program - Eg_5.6
const prime = h.qs(".primes");

const primeSelectors = {
  primeFrm: h.qsChild("form", prime),
  primeResp: h.qsChild("h3", prime),
};

const { primeFrm, primeResp } = primeSelectors;

primeFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = Number(primeFrm.number.value);
  // let countI = 0;

  // for (let i = 1; i <= number; i++) {
  //   if (number % i == 0) {
  //     countI++;
  //   }
  //   if (countI == 2) {
  //     primeResp.innerText = `${number} É primo`;
  //   } else {
  //     primeResp.innerText = `${number} Não é primo`;
  //   }
  // }

  // Alternativa com foco em Perfomance, uma vez que se o número for divido por 2 o mesmo já deixa de ser primo.
  // No caso do número 2, o mesmo não entra no for, sendo validado diretamente no primeiro termo do if.
  let hasDivider = 0;

  for (let i = 2; i <= number / c.half; i++) {
    if (number % i == 0) {
      hasDivider = 1;
      break;
    }
  }
  if (number > 1 && !hasDivider) {
    primeResp.innerText = `${number} É primo`;
    primeFrm.number.value = "";
  } else {
    primeResp.innerText = `${number} Não é primo`;
    primeFrm.number.value = "";
  }
});

primeFrm.addEventListener("reset", () => {
  h.resetFull(primeSelectors);
});

// Star Factory Machine - Eg_5.7
const star = h.qs(".star");

const starSelectors = {
  starFrm: h.qsChild("form", star),
  starResp: h.qsChild("h3", star),
};

const { starFrm, starResp } = starSelectors;

starFrm.addEventListener("submit", (e) => {
  const amount = Number(starFrm.number.value);
  let star = "";
  for (let i = 1; i <= amount; i++) {
    if (i % 2 == 1) {
      star += "*";
    } else {
      star += "_";
    }
    starResp.innerText = star;
  }
  e.preventDefault();
});

starFrm.addEventListener("reset", () => {
  h.resetFull(starSelectors);
});

// World Cup Program - Eg_5.8
const worldCup = h.qs(".worldCup");

const worldSelectors = {
  worldCupFrm: h.qsChild("form", worldCup),
  worldCupResp: h.qsChild("h3", worldCup),
};

const { worldCupFrm, worldCupResp } = worldSelectors;

worldCupFrm.addEventListener("submit", (e) => {
  const year = Number(worldCupFrm.year.value);
  if (year <= 0) {
    alert("Valor Inválido");
  } else if (year >= new Date().getFullYear() && year % c.rangeWorldCup == 2) {
    worldCupResp.innerText = `Haverá Copa do Mundo no ano de ${year}`;
  } else if (year == 1942 || year == 1946) {
    worldCupResp.innerText = `Não houve Copa do Mundo no ano de ${year}, devido a Guerra Mundial`;
  } else if (year >= 1930 && year % c.rangeWorldCup == 2) {
    worldCupResp.innerText = `Houve Copa do Mundo no ano de ${year}`;
  } else {
    worldCupResp.innerText = `Não houve Copa do Mundo no ano de ${year}`;
  }
  e.preventDefault();
});

worldCupFrm.addEventListener("reset", () => {
  h.resetFull(worldSelectors);
});

// Repeat Fruit Program - Eg_5.8.a
const fruits = h.qs(".fruits");

const fruitSelectors = {
  fruitFrm: h.qsChild("form", fruits),
  fruitResp: h.qsChild("h3", fruits),
};

const { fruitFrm, fruitResp } = fruitSelectors;

fruitFrm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fruitInput = {
    name: fruitFrm.name.value,
    times: Number(fruitFrm.time.value),
  };

  const { name, times } = fruitInput;

  let resp = `${name}`;

  for (let i = 1; i < times; i++) {
    fruitResp.innerText += `${resp.padStart(5)} * `;
  }
  fruitResp.innerText += `${resp.padStart(5)}`;
});

fruitFrm.addEventListener("reset", () => {
  h.resetFull(fruitSelectors);
});

// Chinchilla Breeding Program - Eg_5.8.b
// The initial number from amount must be equal or greater than 2
// Each year, chincillas will be triplicate
const pet = h.qs(".pet");

const petSelectors = {
  petFrm: h.qsChild("form", pet),
  petResp: h.qsChild("pre", pet),
};

const { petFrm, petResp } = petSelectors;

petFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { amount, year } = petFrm;
  let petAmount = Number(amount.value);
  const petYear = Number(year.value);

  let resp = "";

  if (petAmount < c.double) {
    alert("O valor mínimo para reprodução é de 2 Chinchilas");
    petFrm.reset();
    return;
  }
  for (let i = 1; i <= petYear; i++) {
    if (i > 1) {
      // Multiple Chinchilas inital number to 3
      petAmount *= c.triple;
    }
    resp += `${i}° Ano: ${petAmount} Chinchilas\n`;
  }
  petResp.innerText = resp;
});

petFrm.addEventListener("reset", () => {
  h.resetFull(petSelectors);
});

// Perfect Numbers Program - Eg_5.8.c
// Program must be read a number and check if it is perfect
// A perfect number has the sum of its integer divisors, except itself.
const perfectNumber = h.qs(".perfectNumber");

const pnSelectors = {
  pnFrm: h.qsChild("form", perfectNumber),
  pnDivisors: h.qsChild("#divisors", perfectNumber),
  pnResp: h.qsChild("#resp", perfectNumber),
};

const { pnFrm, pnDivisors, pnResp } = pnSelectors;

pnFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  let sumDivisors = 0;
  let divisors = [];
  const checkNumber = Number(pnFrm.inputNumber.value);
  for (let i = 1; i < checkNumber; i++) {
    if (checkNumber % i == 0) {
      sumDivisors += i;
      divisors.push(i);
    }
  }
  if (sumDivisors == checkNumber) {
    pnDivisors.innerText = `Divisores de ${checkNumber}: ${divisors} (Soma: ${sumDivisors})`;
    pnResp.innerText = `${checkNumber} É um Número Perfeito`;
  } else {
    pnResp.innerText = `${checkNumber} Não É um Número Perfeito`;
  }
  checkNumber.value = "";
});

pnFrm.addEventListener("reset", () => {
  h.resetFull(pnSelectors);
});
