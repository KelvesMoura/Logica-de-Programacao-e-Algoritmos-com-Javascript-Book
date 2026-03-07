// Chapter04

// Programa Cine JS - Filmes em Cartaz - Eg_2.9
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

// Programa Revenda de Veículo JS - Eg_2.9.b
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

// Programa Restaurante JS - Eg_2.9.c
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

// Programa Farmácia JS - Eg_2.10.a
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

// Programa Lan House JS - Eg_2.10.b
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

// Programa Supermercado JS - Eg_2.10.c
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

// Programa Situação do Aluno - Eg_4.1
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

// Programa Cálculo de Peso Ideal - Eg_4.2
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

// Programa Raiz Quadrada - Eg_4.6.a
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

// Programa Raiz Quadrada - Eg_4.6.b
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

// Program de Caixa Eletrônico - Eg_4.6.c
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

// Program Parquímetro - Eg_4.8.c
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

// Programa Lados de Um Triângulo - Eg_4.8.d
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

// Programa de Tabuada - Eg_5.1
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

// Programa de Tabuada - Eg_5.2
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

// Programa de Tabuada - Eg_5.3
const buttonDoWhile = document.querySelector(".break_continue button");

buttonDoWhile.addEventListener("click", (e) => {
  alert("Digite 0 para sair");
  do {
    const value = Number(prompt("Número: "));
    if (value == 0 || isNaN(value)) {
      const sair = confirm("Confirma Saída");
      if (sair) {
        break;
      } else {
        contine;
      }
    }
    if (value % 2 == 0) {
      alert(`O dobro o do ${value} é ${value * 2}`);
    } else {
      alert(`O triplo de ${value} é ${value * 3}`);
    }
  } while (true);
  alert("Bye, bye...");
});
