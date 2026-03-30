import * as h from "./helper.js";

// Chapter04

// Cine JS Program - Now Playing - Eg_2.9
const cine = h.qs(".cine");

const cineSelectors = {
  cineFrm: h.qsChild("form", cine),
  cineResph3: h.qsChild("h3", cine),
  cineResph4: h.qsChild("h4", cine),
};

const { cineFrm, cineResph3, cineResph4 } = cineSelectors;

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
  cineResph3.innerText = cineResph4.innerText = "";
});

// JS Vehicle Resale Program - Eg_2.9.b
const car = h.qs(".car");

const carSelectors = {
  carFrm: h.qsChild("form", car),
  carVehiclesName: h.qsChild("h3", car),
  carInstallmentPrice: h.qsChild("#installmentPrice", car),
  carInputPrice: h.qsChild(" #inputPrice", car),
};

const { carFrm, carVehiclesName, carInstallmentPrice, carInputPrice } =
  carSelectors;

carFrm.addEventListener("submit", (e) => {
  const nameInput = carFrm.vehicles.value;
  const priceValue = Number(carFrm.price.value);

  const halfPrice = priceValue / 2;
  const parcelValue = (priceValue - halfPrice) / 12;

  carVehiclesName.innerText = `Promoção: ${nameInput}`;
  carInputPrice.innerText = `Entrada de R$ ${currencyFormat(halfPrice)}`;
  carInstallmentPrice.innerText = `+12x R$ ${currencyFormat(parcelValue)}`;

  e.preventDefault();
});

carFrm.addEventListener("reset", (e) => {
  carVehiclesName.innerText =
    carInputPrice.innerText =
    carInstallmentPrice.innerText =
      "";
});

// JS Restaurant Program - Eg_2.9.c
const restaurant = h.qs(".restaurant");

const restaurantSelectors = {
  restaurantFrm: h.qsChild("form", restaurant),
  restaurantResp: h.qsChild("h3", restaurant),
};

const { restaurantFrm, restaurantResp } = restaurantSelectors;

restaurantFrm.addEventListener("submit", (e) => {
  const priceFood = Number(restaurantFrm.price.value);
  const amountFood = Number(restaurantFrm.amount.value);
  const priceTotal = (priceFood * amountFood) / 1000;

  restaurantResp.innerText = `Valor a pagar R$ ${currencyFormat(priceTotal)}`;

  e.preventDefault();
});

restaurantFrm.addEventListener("reset", (e) => {
  restaurantResp.innerText = "";
});

// Pharmacy Program JS - Eg_2.10.a

const drug = h.qs(".drug");

const drugSelectors = {
  drugFrm: h.qsChild("form", drug),
  drugRespNameProduct: h.qsChild("#nameProduct", drug),
  drugRespDiscountProduct: h.qsChild("#discountProduct", drug),
};

const { drugFrm, drugRespNameProduct, drugRespDiscountProduct } = drugSelectors;

drugFrm.addEventListener("submit", (e) => {
  const priceFinal = Math.floor(drugFrm.amount.value * 2);
  const inputName = drugFrm.product.value;
  drugRespNameProduct.innerText = `Promoção de ${inputName}`;
  drugRespDiscountProduct.innerText = `Leve 2 por apenas R$ ${currencyFormat(priceFinal)}`;
  e.preventDefault();
});

drugFrm.addEventListener("reset", (e) => {
  drugRespNameProduct.innerText = drugRespDiscountProduct.innerText = "";
});

// PLan House JS Program- Eg_2.10.b
const lan = h.qs(".lan");

const lanSelectors = {
  lanFrm: h.qsChild("form", lan),
  lanResp: h.qsChild("h3", lan),
};

const { lanFrm, lanResp } = lanSelectors;

lanFrm.addEventListener("submit", (e) => {
  const time = Math.ceil(Number(lanFrm.time.value) / 15);
  const price = Number(lanFrm.amount.value);

  const totalPrice = time * price;
  lanResp.innerText = `Valor total á Pagar: R$ ${currencyFormat(totalPrice)}`;
  e.preventDefault();
});

lanFrm.addEventListener("reset", (e) => {
  lanResp.innerText = "";
});

// JS Supermarket Program - Eg_2.10.c

const market = h.qs(".market");

const marketSelectors = {
  marketFrm: h.qsChild("form", market),
  marketRespOffer: h.qsChild("h3", market),
};

const { marketFrm, marketRespOffer } = marketSelectors;

marketFrm.addEventListener("submit", (e) => {
  const nameProduct = marketFrm.product.value;
  const priceProduct = Number(marketFrm.price.value);
  const offer = priceProduct * 2 + priceProduct / 2;

  marketRespOffer.innerText = `Leve 3 ${nameProduct} e pague somente R$ ${currencyFormat(offer)}`;
  e.preventDefault();
});

marketFrm.addEventListener("reset", (e) => {
  marketRespOffer.innerText = "";
});

// Student Status Program - Eg_4.1
const student = h.qs(".student");

const studentSelectors = {
  studentFrm: h.qsChild("form", student),
  studentResph3: h.qsChild("h3", student),
  studentResph4: h.qsChild("h4", student),
};

const { studentFrm, studentResph3, studentResph4 } = studentSelectors;

studentFrm.addEventListener("submit", (e) => {
  const name = studentFrm.studentName.value;
  const firstGrade = Number(studentFrm.firstGrade.value);
  const secondGrade = Number(studentFrm.secondGrade.value);
  const avertoyGrade = (firstGrade + secondGrade) / 2;
  studentResph3.innerText = `Média das Notas: ${avertoyGrade.toFixed(1)}`;
  if (avertoyGrade >= 7) {
    studentResph4.innerText = `Parabéns ${name}! Você foi aprovado`;
    studentResph4.classList.add("text-green-600");
  } else {
    studentResph4.innerText = `Estude mais ${name}! Você foi reprovado`;
    studentResph4.classList.add("text-red-600");
  }
  e.preventDefault();
});

studentFrm.addEventListener("reset", (e) => {
  studentResph3.innerText = studentResph4.innerText = "";
});

// Ideal Weight Calculation Program - Eg_4.2
const weight = h.qs(".weight");

const weightSelectors = {
  weightFrm: h.qsChild("form", weight),
  weightResph3: h.qsChild("h3", weight),
};

const { weightFrm, weightResph3 } = weightSelectors;

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
const timeZone = h.qs(".timeZone");

const timeZoneSelectors = {
  timeZoneFrm: h.qsChild("form", timeZone),
  timeZoneRespH3: h.qsChild("h3", timeZone),
};

const { timeZoneFrm, timeZoneRespH3 } = timeZoneSelectors;

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
const sqrt = h.qs(".sqrt");

const sqrtSelectors = {
  sqrtFrm: h.qsChild("form", sqrt),
  sqrtRespH3: h.qsChild("h3", sqrt),
};

const { sqrtFrm, sqrtRespH3 } = sqrtSelectors;

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
const atm = h.qs(".atm");

const atmSelectors = {
  atmFrm: h.qsChild("form", atm),
  atmResp100: h.qsChild("#note100", atm),
  atmResp50: h.qsChild("#note50", atm),
  atmResp10: h.qsChild("#note10", atm),
};

const { atmFrm, atmResp10, atmResp50, atmResp100 } = atmSelectors;

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
  atmResp100.innerText = atmResp50.innerText = atmResp10.innerText = "";
});

// Parking Meter Program - Eg_4.8.c
const parking = h.qs(".parking");

const parkingSelectors = {
  parkingFrm: h.qsChild("form", parking),
  parkingTime: h.qsChild("#time", parking),
  parkingChange: h.qsChild("#change", parking),
};

const { parkingFrm, parkingTime, parkingChange } = parkingSelectors;

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
  parkingTime.innerText = parkingChange.innerText = "";
});

// Program for the Sides of a Triangle - Eg_4.8.d
const triangle = h.qs(".triangle");

const triangleSelectors = {
  triangleFrm: h.qsChild("form", triangle),
  triangleResp: h.qsChild("#resp", triangle),
  triangleType: h.qsChild("#type", triangle),
};

const { triangleFrm, triangleResp, triangleType } = triangleSelectors;

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
  triangleResp.innerText = triangleType.innerText = "";
});

// Chapter05

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
  decrescentResp.innerText = "";
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
      alert(`O dobro de ${number} é ${number * 2}`);
    } else {
      alert(`O triplo de ${number} é ${number * 3}`);
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
  billResp1.innerText = billResp2.innerText = "";
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

starFrm.addEventListener("reset", (e) => {
  starResp.innerText = "";
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
const fruits = h.qs(".fruits");

const fruitSelectors = {
  fruitFrm: h.qsChild("form", fruits),
  fruitResp: h.qsChild("h3", fruits),
};

const { fruitFrm, fruitResp } = fruitSelectors;

fruitFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = fruitFrm.name.value;
  const times = Number(fruitFrm.time.value);
  let resp = `${name}`;

  for (let i = 1; i < times; i++) {
    fruitResp.innerText += `${resp.padStart(5)} * `;
  }
  fruitResp.innerText += `${resp.padStart(5)}`;
});

fruitFrm.addEventListener("reset", (e) => {
  fruitResp.innerText = "";
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

pnFrm.addEventListener("reset", (e) => {
  pnFrm.reset();
  pnDivisors.innerText = pnResp.innerText = "";
});

// Dental Office Program - Eg_6.3
const dental = h.qs(".dental");

const dentalSelectors = {
  dentalFrm: h.qsChild("form", dental),
  dentalUrgent: h.qsChild("#urgent", dental),
  dentalTreat: h.qsChild("#treat", dental),
  dentalGaveUp: h.qsChild("#gave-up", dental),
  dentalName: h.qsChild("h3 span", dental),
  dentalPatients: h.qsChild("#patients", dental),
};

const {
  dentalFrm,
  dentalUrgent,
  dentalTreat,
  dentalGaveUp,
  dentalName,
  dentalPatients,
} = dentalSelectors;

const patients = [];

// Add Patient
dentalFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const patient = dentalFrm.patient.value;

  patients.push(patient);
  let list = "";
  for (let i = 0; i < patients.length; i++) {
    list += `${i + 1}. ${patients[i]}\n`;
  }
  dentalPatients.innerText = list;
  dentalFrm.reset();
  dentalFrm.patient.focus();
});

//Add Urgent Patient
dentalUrgent.addEventListener("click", () => {
  const patient = dentalFrm.patient.value;

  if (!dentalFrm.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em caráter de Urgência");
    dentalFrm.patient.focus();
    return;
  }

  patients.unshift(patient);
  let list = "";

  patients.forEach((patient, i) => (list += `${i + 1}. ${patient}\n`));
  dentalPatients.innerText = list;
  dentalFrm.reset();
  dentalFrm.patient.focus();
});

//Announces patient in the examination room
dentalTreat.addEventListener("click", () => {
  const patientTreat = patients.shift();
  dentalName.innerText = patientTreat;

  let list = "";
  patients.forEach((patient, i) => (list += `${i + 1}. ${patient}\n`));
  dentalPatients.innerText = list;
  dentalFrm.reset();
  dentalFrm.patient.focus();
});

//Remove Pacient
dentalGaveUp.addEventListener("click", () => {
  const patient = prompt("Digite o nome do paciente que Desistiu");
  const patientGaveUp = patients.indexOf(patient);
  let list = "";
  patients.splice(patientGaveUp, 1);

  patients.forEach((patient, i) => (list += `${i + 1}. ${patient}\n`));
  dentalPatients.innerText = list;
  dentalFrm.reset();
  dentalFrm.patient.focus();
});

// Guess the Number Game - Eg_6.4
const guessNumber = h.qs(".guessNumber");

const guessNumberSelectors = {
  guessNumberFrm: h.qsChild("form", guessNumber),
  guessNumberError: h.qsChild("#outError", guessNumber),
  guessNumberChances: h.qsChild("#outChances", guessNumber),
  guessNumberTip: h.qsChild("#outTip", guessNumber),
  guessNumberAgain: h.qsChild("#again", guessNumber),
};

const {
  guessNumberFrm,
  guessNumberError,
  guessNumberChances,
  guessNumberTip,
  guessNumberAgain,
} = guessNumberSelectors;

const chances = 6;
const errors = [];
const drawn = Math.floor(Math.random() * 100) + 1;

guessNumberFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = Number(guessNumberFrm.number.value);

  if (number == drawn) {
    guessNumberTip.innerText = `Parabéns! Número sorteado: ${drawn}`;
    // guessNumberFrm.btSubmit.disabled = true;
    guessNumberFrm.submit.classList.toggle("hidden");
    guessNumberFrm.again.classList.toggle("hidden");
  } else {
    if (errors.includes(number)) {
      alert(`O número ${number} já foi apostado, tente outro número`);
    } else {
      errors.push(number);
      const qtErrors = errors.length;
      guessNumberError.innerText = `${qtErrors} erros. Números apostados ${errors.join(", ")}`;
      const qtChances = chances - qtErrors;
      guessNumberChances.innerText = qtChances;
      if (qtChances == 0) {
        alert("Suas chances acabaram...");
        // guessNumberFrm.btSubmit.disabled = true;
        guessNumberFrm.submit.classList.toggle("hidden");
        guessNumberFrm.again.classList.toggle("hidden");
        guessNumberTip.innerText = `Game Over. O número sorteado era ${drawn}`;
      } else {
        const tip = number < drawn ? "maior" : "menor";
        guessNumberTip.innerHTML = `Dica: Tente um número ${tip} que o ${number}`;
      }
    }
  }
  guessNumberFrm.reset();
  guessNumberFrm.number.focus();
});

guessNumberAgain.addEventListener("click", () => {
  location.reload();
});

// Herbie Rescale - Eg_6.8
const resale = h.qs(".resale");

const resaleSelectors = {
  resaleFrm: h.qsChild("form", resale),
  resaleList: h.qsChild("#list", resale),
  resaleFilter: h.qsChild("#filter", resale),
  resaleSimulate: h.qsChild("#simulate", resale),
  resaleResp: h.qsChild("pre", resale),
};

const { resaleFrm, resaleList, resaleFilter, resaleSimulate, resaleResp } =
  resaleSelectors;

const listCar = [];

// ADD Cars
resaleFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { car, price } = resaleFrm;
  const modelCar = car.value;
  const priceCar = Number(price.value);
  listCar.push({ name: modelCar, price: priceCar });
  console.log(listCar);
  resaleFrm.list.dispatchEvent(new Event("click"));
  resaleFrm.reset();
});

//List Car
resaleList.addEventListener("click", () => {
  if (listCar.length == 0) {
    alert("Não há carros cadastrados");
    return;
  }
  const list = listCar.reduce(
    (accumulator, car) =>
      accumulator + car.name + " - R$: " + currencyFormat(car.price) + "\n",
    "",
  );
  resaleResp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${list}`;
});

//Filter Cars
resaleFilter.addEventListener("click", () => {
  const priceOffer = Number(
    prompt("Qual o valor máximo que o cliente deseja pagar?"),
  );
  // console.log(priceOffer);

  const filterList = listCar.filter((car) => car.price <= priceOffer);

  if (filterList.length == 0) {
    alert(`Não há carros com preço inferior ou igual as ${priceOffer}`);
    return;
  }

  let list = "";

  for (const car of filterList) {
    const { name, price } = car;
    list += `${name} - R$: ${currencyFormat(price)}\n`;
  }
  resaleResp.innerText = `Carros até R$: ${currencyFormat(priceOffer)}\n${"-".repeat(40)}\n${list}`;
});

//Simulate Cars
resaleSimulate.addEventListener("click", () => {
  const discount = Number(prompt("Qual o percentual de desconto: "));
  // console.log(discount);
  if (discount == 0 || isNaN(discount)) {
    return;
  }

  const discountCar = listCar.map((car) => ({
    model: car.name,
    price: car.price - (car.price * discount) / 100,
  }));

  let list = "";

  discountCar.forEach((car) => {
    const { model, price } = car;
    list += `${model} - R$ ${currencyFormat(price)}\n`;
  });

  resaleResp.innerText = `Carros com desconto: ${discount}%\n${"-".repeat(40)}\n${list}`;
});

// Toys Program - Eg_6.9

const toy = h.qs(".toy");

const toySelectors = {
  toyFrm: h.qsChild("form", toy),
  toyResp: h.qsChild("pre", toy),
  toyList: h.qsChild("#list", toy),
  toyFilter: h.qsChild("#filter", toy),
};

const { toyFrm, toyResp, toyFilter, toyList } = toySelectors;
let list = [];

toyFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name, age } = toyFrm;
  const child = name.value;
  const ageInput = Number(age.value);
  list.push({ name: child, age: ageInput });

  const showList = h.reduceList(list);

  toyResp.innerText = showList;
  toyFrm.reset();
  toyFrm.name.focus();
});

toyList.addEventListener("click", () => {
  if (list.length == 0) {
    alert(`Adicione uma criança`);
    toyFrm.name.focus();
    return;
  }

  const showList = h.reduceList(list);

  toyResp.innerText = showList;
  toyFrm.reset();
});

toyFilter.addEventListener("click", () => {
  if (list.length == 0) {
    alert(`Adicione uma criança`);
    toyFrm.name.focus();
    return;
  }

  const finalResult = h.generateReport(list);

  toyResp.innerText = finalResult;
});

// Playoff Games - Eg_6.14.a

const playoff = h.qs(".playoff");

const playoffSelectors = {
  playoffFrm: h.qsChild("form", playoff),
  playoffList: h.qsChild("#list", playoff),
  playoffFilter: h.qsChild("#filter", playoff),
  playoffResp: h.qsChild("pre", playoff),
};

const { playoffFrm, playoffList, playoffFilter, playoffResp } =
  playoffSelectors;

const clubs = [];

playoffFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  let showList = "";
  const club = playoffFrm.name.value;
  clubs.push(club);

  clubs.forEach((club) => (showList += `${club}\n`));
  playoffResp.innerText = showList;
  playoffFrm.reset();
  playoffFrm.name.focus();
});

playoffList.addEventListener("click", () => {
  let showList = "";
  if (clubs.length == 0) {
    alert(`Insira um clube na lista?`);
    playoffFrm.name.focus();
    return;
  } else {
    clubs.forEach((club) => (showList += `${club}\n`));
    playoffResp.innerText = showList;
  }
});

playoffFilter.addEventListener("click", () => {
  const listGames = [...clubs];
  let showGames = "";

  if (listGames.length % 2 == 0) {
    showGames = h.prepareGames(listGames);
    playoffResp.innerText = showGames;
  } else {
    alert(`Favor incluir mais 1 time!`);
    playoffFrm.name.focus();
    return;
  }
});

// Program to Sort Numbers - Eg_6.14.b

const sort = h.qs(".sort");

const sortSelectors = {
  sortFrm: h.qsChild("form", sort),
  sortFilter: h.qsChild("#filter", sort),
  sortResp: h.qsChild("pre", sort),
};

const { sortFrm, sortFilter, sortResp } = sortSelectors;

const listNumber = [];

sortFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = Number(sortFrm.number.value);
  if (listNumber.includes(number)) {
    alert("Número já existe na lista, favor incluir o próximo número!");
    sortFrm.number.value = "";
    sortFrm.number.focus();
    return;
  } else {
    listNumber.push(number);
    sortFrm.number.focus();
    sortResp.innerHTML = `Números: ${listNumber.join(", ")}\n\n<i>Atenção...Números não estão em ordem crescente</i>`;
    sortFrm.reset();
  }
});

sortFilter.addEventListener("click", () => {
  listNumber.sort((a, b) => a - b);
  sortResp.innerHTML = `Números: ${listNumber.join(", ")}\n\n<i>Números estão em ordem crescente</i>`;
  sortFrm.reset();
});

// Game Show - Eg_6.14.c

const gameShow = h.qs(".gameShow");

const gameShowSelectors = {
  gameShowFrm: h.qsChild("form", gameShow),
  gameShowList: h.qsChild("#list", gameShow),
  gameShowFilter: h.qsChild("#filter", gameShow),
  gameShowResp: h.qsChild("pre", gameShow),
};

const { gameShowFrm, gameShowList, gameShowFilter, gameShowResp } =
  gameShowSelectors;

const listUser = [];

gameShowFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  let showList = "";
  const name = gameShowFrm.name.value;
  const grade = Number(gameShowFrm.grade.value);
  listUser.push({ name: name, grade: grade });

  listUser.forEach(
    ({ name, grade }) => (showList += `${name} - ${grade} acertos\n`),
  );
  gameShowFrm.reset();
  gameShowFrm.name.focus();

  gameShowResp.innerText = showList;
});

gameShowList.addEventListener("click", () => {
  let showList = "";
  listUser.forEach(
    ({ name, grade }) => (showList += `${name} - ${grade} acertos\n`),
  );
  gameShowFrm.reset();
  gameShowFrm.name.focus();

  gameShowResp.innerText = showList;
});

gameShowFilter.addEventListener("click", () => {
  let showList = "";
  const gradeMinimum = Number(prompt("Número de Acertos para Aprovação?"));
  const approved = listUser.filter(({ grade }) => grade >= gradeMinimum);
  approved.sort((a, b) => a - b);
  approved.forEach(
    ({ name, grade }) => (showList += `${name} - ${grade} acertos\n`),
  );
  gameShowFrm.reset();
  gameShowFrm.name.focus();

  gameShowResp.innerText = `Aprovados para 2° Fase\n${"-".repeat(40)}\n${showList}`;
});
