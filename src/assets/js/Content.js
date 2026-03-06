// Chapter04

// Programa Cálculo de Peso - Eg_4.1
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

// Programa Cálculo de Peso - Eg_4.2
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
