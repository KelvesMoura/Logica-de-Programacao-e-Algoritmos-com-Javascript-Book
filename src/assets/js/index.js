// Chapter04

// Cine JS Program - Now Playing - Eg_2.9
const cineFrm = document.querySelector(".cine form");
const cineResph3 = document.querySelector(".cine h3");
const cineResph4 = document.querySelector(".cine h4");

cineFrm.addEventListener("submit", (e) => {
  const nameMovie = cineFrm.movie.value;
  const durationMovie = Number(cineFrm.duration.value);

  const hours = Math.floor(durationMovie / 60);
  const minutes = durationMovie % 60;

  cineResph3.innerText = nameMovie;
  cineResph4.innerText = `${hours} horas(s) ${minutes} minuto(s)`;
  e.preventDefault();
});

cineFrm.addEventListener("reset", (e) => {
  cineResph3.innerText = "";
  cineResph4.innerText = "";
});

// JS Vehicle Resale Program - Eg_2.9.b
const carFrm = document.querySelector(".car form");
const carVehiclesName = document.querySelector(".car h3");
const carInputPrice = document.querySelector(".car #inputPrice");
const carInstallmentPrice = document.querySelector(".car #installmentPrice");

carFrm.addEventListener("submit", (e) => {
  const nameInput = carFrm.vehicles.value;
  const priceValue = Number(carFrm.price.value);

  const halfPrice = priceValue / 2;
  const parcelValue = (priceValue - halfPrice) / 12;

  carVehiclesName.innerText = `Promoção: ${nameInput}`;
  carInputPrice.innerText = `Entrada de R$ ${halfPrice.toFixed(2)}`;
  carInstallmentPrice.innerText = `+12x R$ ${parcelValue.toFixed(2)}`;

  e.preventDefault();
});

carFrm.addEventListener("reset", (e) => {
  carVehiclesName.innerText = "";
  carInputPrice.innerText = "";
  carInstallmentPrice.innerText = "";
});

// JS Restaurant Program - Eg_2.9.c
const restaurantFrm = document.querySelector(".restaurant form");
const restaurantResp = document.querySelector(".restaurant h3");

restaurantFrm.addEventListener("submit", (e) => {
  const priceFood = Number(restaurantFrm.price.value);
  const amountFood = Number(restaurantFrm.amount.value);
  const priceTotal = (priceFood * amountFood) / 1000;

  restaurantResp.innerText = `Valor a pagar R$ ${priceTotal.toFixed(2)}`;

  e.preventDefault();
});

restaurantFrm.addEventListener("reset", (e) => {
  restaurantResp.innerText = "";
});

// Pharmacy Program JS - Eg_2.10.a
const drugFrm = document.querySelector(".drug form");
const drugRespNameProduct = document.querySelector(".drug #nameProduct");
const drugRespDiscountProduct = document.querySelector(
  ".drug #discountProduct",
);

drugFrm.addEventListener("submit", (e) => {
  const priceFinal = Math.floor(drugFrm.amount.value * 2);
  const inputName = drugFrm.product.value;
  drugRespNameProduct.innerText = `Promoção de ${inputName}`;
  drugRespDiscountProduct.innerText = `Leve 2 por apenas R$ ${priceFinal.toFixed(2)}`;
  e.preventDefault();
});

drugFrm.addEventListener("reset", (e) => {
  drugRespNameProduct.innerText = "";
  drugRespDiscountProduct.innerText = "";
});

// PLan House JS Program- Eg_2.10.b
const lanFrm = document.querySelector(".lan form");
const lanResp = document.querySelector(".lan h3");

lanFrm.addEventListener("submit", (e) => {
  const time = Math.ceil(Number(lanFrm.time.value) / 15);
  const price = Number(lanFrm.amount.value);

  const totalPrice = time * price;
  lanResp.innerText = `Valor total á Pagar: R$ ${totalPrice.toFixed(2)}`;
  e.preventDefault();
});

lanFrm.addEventListener("reset", (e) => {
  lanResp.innerText = "";
});

// JS Supermarket Program - Eg_2.10.c
const marketFrm = document.querySelector(".market form");
const marketRespOffer = document.querySelector(".market h3");

marketFrm.addEventListener("submit", (e) => {
  const nameProduct = marketFrm.product.value;
  const priceProduct = Number(marketFrm.price.value);
  const offer = priceProduct * 2 + priceProduct / 2;

  marketRespOffer.innerText = `Leve 3 ${nameProduct} e pague somente R$ ${offer.toFixed(2)}`;
  e.preventDefault();
});

marketFrm.addEventListener("reset", (e) => {
  marketRespOffer.innerText = "";
});

// Student Status Program - Eg_4.1
const studentFrm = document.querySelector(".student form");
const studentResph3 = document.querySelector(".student h3");
const studentResph4 = document.querySelector(".student h4");

studentFrm.addEventListener("submit", (e) => {
  const name = studentFrm.studentName.value;
  const firstGrade = Number(studentFrm.firstGrade.value);
  const secondGrade = Number(studentFrm.secondGrade.value);
  const averageGrade = (firstGrade + secondGrade) / 2;
  studentResph3.innerText = `Média das Notas: ${averageGrade.toFixed(1)}`;
  if (averageGrade >= 7) {
    studentResph4.innerText = `Parabéns ${name}! Você foi aprovado`;
    studentResph4.classList.add("text-green-600");
  } else {
    studentResph4.innerText = `Estude mais ${name}! Você foi reprovado`;
    studentResph4.classList.add("text-red-600");
  }
  e.preventDefault();
});

studentFrm.addEventListener("reset", (e) => {
  studentResph3.innerText = "";
  studentResph4.innerText = "";
});

// Ideal Weight Calculation Program - Eg_4.2
const weightFrm = document.querySelector(".weight form");
const weightResph3 = document.querySelector(".weight h3");

weightFrm.addEventListener("submit", (e) => {
  const nome = weightFrm.name.value;
  const masculino = weightFrm.male.checked;
  const height = Number(weightFrm.height.value);
  //   let pesoIdeal = 0;

  //   if (masculino) {
  //     pesoIdeal = 22 * Math.pow(height, 2);
  //   } else {
  //     pesoIdeal = 21 * Math.pow(height, 2);
  //   }

  // Alternativa com Tenário
  const pesoIdeal = masculino
    ? 22 * Math.pow(height, 2)
    : 21 * Math.pow(height, 2);
  weightResph3.innerText = `${nome}: Seu peso ideal é ${pesoIdeal.toFixed(2)} Kg`;
  e.preventDefault();
});

weightFrm.addEventListener("reset", (e) => {
  weightResph3.innerText = "";
});

// Time Zone Program - Eg_4.6.a
const timeZoneFrm = document.querySelector(".timeZone form");
const timeZoneRespH3 = document.querySelector(".timeZone h3");

timeZoneFrm.addEventListener("submit", (e) => {
  const time = Number(timeZoneFrm.time.value);
  const timeFrance = time + 5;
  const timeResp = timeFrance > 24 ? timeFrance - 24 : timeFrance;
  timeZoneRespH3.innerText = `Hora na França: ${timeResp.toFixed(2)}`;
  e.preventDefault();
});

timeZoneFrm.addEventListener("reset", (e) => {
  timeZoneRespH3.innerText = "";
});

// Square Root Program - Eg_4.6.b
const sqrtFrm = document.querySelector(".sqrt form");
const sqrtRespH3 = document.querySelector(".sqrt h3");

sqrtFrm.addEventListener("submit", (e) => {
  const number = Number(sqrtFrm.number.value);
  const sqrt = Math.sqrt(number);
  const result = Number.isInteger(sqrt)
    ? sqrt
    : `Não há raiz exata para ${number}`;
  sqrtRespH3.innerText = `Raiz: ${result}`;
  e.preventDefault();
});

sqrtFrm.addEventListener("reset", (e) => {
  sqrtRespH3.innerText = "";
});

// ATM Program - Eg_4.6.c
const atmFrm = document.querySelector(".atm form");
const atmResp100 = document.querySelector(".atm #note100");
const atmResp50 = document.querySelector(".atm #note50");
const atmResp10 = document.querySelector(".atm #note10");

atmFrm.addEventListener("submit", (e) => {
  const value = Number(atmFrm.withdraw.value);
  if (value % 10 != 0) {
    alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
  }

  const note100 = Math.floor(value / 100);
  let rest = value % 100;

  const note50 = Math.floor(rest / 50);
  rest = rest % 50;

  const note10 = Math.floor(rest / 10);

  if (note100 > 0) {
    atmResp100.innerText = `Notas de R$ 100: ${note100}`;
  }
  if (note50 > 0) {
    atmResp50.innerText = `Notas de R$ 50: ${note50}`;
  }

  if (note10 > 0) {
    atmResp10.innerText = `Notas de R$ 10: ${note10}`;
  }
  e.preventDefault();
});

atmFrm.addEventListener("reset", (e) => {
  atmResp100.innerText = "";
  atmResp50.innerText = "";
  atmResp10.innerText = "";
});

// Parking Meter Program - Eg_4.8.c
const parkingFrm = document.querySelector(".parking form");
const parkingTime = document.querySelector(".parking #time");
const parkingChange = document.querySelector(".parking #change");

parkingFrm.addEventListener("submit", (e) => {
  const value = Number(parkingFrm.payment.value);
  if (value >= 1 && value < 1.75) {
    parkingTime.innerText = `Tempo: 30min`;
    const calc30 = value % 1;
    parkingChange.innerText = `Troco R$: ${calc30.toFixed(2)}`;
  }
  if (value >= 1.75 && value < 3.0) {
    parkingTime.innerText = `Tempo: 60min`;
    const calc60 = value % 1.75;
    parkingChange.innerText = `Troco R$: ${calc60.toFixed(2)}`;
  }
  if (value >= 3) {
    parkingTime.innerText = `Tempo: 120min`;
    const calc120 = value - 3;
    parkingChange.innerText = `Troco R$: ${calc120.toFixed(2)}`;
  }
  e.preventDefault();
});

parkingFrm.addEventListener("reset", (e) => {
  parkingTime.innerText = "";
  parkingChange.innerText = "";
});

// Program for the Sides of a Triangle - Eg_4.8.d
const triangleFrm = document.querySelector(".triangle form");
const triangleResp = document.querySelector(".triangle #resp");
const triangleType = document.querySelector(".triangle #type");

triangleFrm.addEventListener("submit", (e) => {
  const sideA = Number(triangleFrm.sideA.value);
  const sideB = Number(triangleFrm.sideB.value);
  const sideC = Number(triangleFrm.sideC.value);
  if (sideA > sideB + sideC || sideB > sideA + sideC || sideC > sideA + sideB) {
    triangleResp.innerText = `Lados não podem formar um triângulo`;
  } else {
    triangleResp.innerText = `Lados podem formar um triângulo`;
  }

  if (sideA == sideB && sideB == sideC) {
    triangleType.innerText = `Typo: Equilátero`;
  } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    triangleType.innerText = `Typo: Isósceles`;
  } else {
    triangleType.innerText = `Typo: Escaleno`;
  }
  e.preventDefault();
});

triangleFrm.addEventListener("reset", (e) => {
  triangleResp.innerText = "";
  triangleType.innerText = "";
});

// Chapter05

// Multiplication Table Program - Eg_5.1
const tabuadaFrm = document.querySelector(".multiplication-table form");
const tabuadaResp = document.querySelector(".multiplication-table pre");

tabuadaFrm.addEventListener("submit", (e) => {
  const value = Number(tabuadaFrm.numberInput.value);
  let result = "";
  for (let i = 0; i <= 10; i++) {
    result += `${value} x ${i} = ${value * i}\n`;
  }
  tabuadaResp.innerText = result;
  e.preventDefault();
});

tabuadaFrm.addEventListener("reset", (e) => {
  tabuadaResp.innerText = "";
});

// Decreasing Program - Eg_5.2
const decrescentFrm = document.querySelector(".decrescent form");
const decrescentResp = document.querySelector(".decrescent pre");

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
  decrescentResp.innerText = "";
});

// Breaks in Ties - Eg_5.3
const startTest = document.querySelector(".break_continue button");

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
      alert(`O dobro de ${number} é ${number * 2}`);
    } else {
      alert(`O triplo de ${number} é ${number * 3}`);
    }
  } while (true);
});

// Monthly Accounts Program in Laços - Eg_5.5
const billFrm = document.querySelector(".bill_month form");
const billResp1 = document.querySelector(".bill_month #resp1");
const billResp2 = document.querySelector(".bill_month #resp2");

let totalAmount = 0; // Declarado como variável global, pois após submite a memória interna retorna forma zera.
let countBill = 0; // Declarado como variável global, pois após submite a memória interna retorna forma zera.

billFrm.addEventListener("submit", (e) => {
  const bill = billFrm.bill.value;
  const priceBill = Number(billFrm.amount.value);

  totalAmount += priceBill;
  countBill++;

  billResp1.innerText += `${bill} - R$ ${priceBill.toFixed(2)}\n`;
  billResp2.innerText = `--------------------\n${countBill} Conta(s) - Total R$ ${totalAmount.toFixed(2)}`;

  billFrm.bill.value = "";
  billFrm.amount.value = "";

  e.preventDefault();
});

billFrm.addEventListener("reset", (e) => {
  billResp1.innerText = "";
  billResp2.innerText = "";
});

// Prime Numbers Program - Eg_5.6
const primeFrm = document.querySelector(".primes form");
const primeResp = document.querySelector(".primes h3");

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

  for (let i = 2; i <= number / 2; i++) {
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

primeFrm.addEventListener("reset", (e) => {
  primeResp.innerText = "";
});

// Star Factory Machine - Eg_5.7
const starFrm = document.querySelector(".star form");
const starResp = document.querySelector(".star h3");

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

starFrm.addEventListener("reset", (e) => {
  starResp.innerText = "";
});

// World Cup Program - Eg_5.8
const worldCupFrm = document.querySelector(".worldCup form");
const worldCupResp = document.querySelector(".worldCup h3");

worldCupFrm.addEventListener("submit", (e) => {
  const year = Number(worldCupFrm.year.value);
  if (year <= 0) {
    alert("Valor Inválido");
  } else if (year >= new Date().getFullYear() && year % 4 == 2) {
    worldCupResp.innerText = `Haverá Copa do Mundo no ano de ${year}`;
  } else if (year == 1942 || year == 1946) {
    worldCupResp.innerText = `Não houve Copa do Mundo no ano de ${year}, devido a Guerra Mundial`;
  } else if (year >= 1930 && year % 4 == 2) {
    worldCupResp.innerText = `Houve Copa do Mundo no ano de ${year}`;
  } else {
    worldCupResp.innerText = `Não houve Copa do Mundo no ano de ${year}`;
  }
  e.preventDefault();
});

worldCupFrm.addEventListener("reset", (e) => {
  worldCupResp.innerText = "";
});

// Repeat Fruit Program - Eg_5.8.a
const fruitFrm = document.querySelector(".fruits form");
const fruitResp = document.querySelector(".fruits h3");

fruitFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = fruitFrm.name.value;
  const times = Number(fruitFrm.time.value);
  let resp = `${name}`;

  for (let i = 1; i < times; i++) {
    fruitResp.innerText += `${resp.padStart(5)} *`;
  }
  fruitResp.innerText += `${resp.padStart(5)}`;
});

fruitFrm.addEventListener("reset", (e) => {
  fruitResp.innerText = "";
});

// Chinchilla Breeding Program - Eg_5.8.b
// The initial number from amount must be equal or greater than 2
// Each year, chincillas will be triplicate

const petFrm = document.querySelector(".pet form");
const petResp = document.querySelector(".pet pre");

petFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { amount, year } = petFrm;
  let petAmount = Number(amount.value);
  const petYear = Number(year.value);

  let resp = "";

  if (petAmount < 2) {
    alert("O valor mínimo para reprodução é de 2 Chinchilas");
    petFrm.reset();
    return;
  }
  for (let i = 1; i <= petYear; i++) {
    if (i > 1) {
      // Multiple Chinchilas inital number to 3
      petAmount *= 3;
    }
    resp += `${i}° Ano: ${petAmount} Chinchilas\n`;
  }
  petResp.innerText = resp;
});

petFrm.addEventListener("reset", (e) => {
  petResp.innerText = "";
});
