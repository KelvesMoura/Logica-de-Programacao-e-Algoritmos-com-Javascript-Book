import * as h from "../helper.js";
import * as c from "../constant.js";

// Student Status Program - Eg_4.1
const student = h.qs(".student");

const studentSelectors = {
  studentFrm: h.qsChild("form", student),
  studentResph3: h.qsChild("h3", student),
  studentResph4: h.qsChild("h4", student),
};

const { studentFrm, studentResph3, studentResph4 } = studentSelectors;

studentFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const studentInput = {
    name: studentFrm.studentName.value,
    firstGrade: Number(studentFrm.firstGrade.value),
    secondGrade: Number(studentFrm.secondGrade.value),
  };

  const { name, firstGrade, secondGrade } = studentInput;

  const avertoyGrade = (firstGrade + secondGrade) / c.half;
  studentResph3.innerText = `Média das Notas: ${avertoyGrade.toFixed(1)}`;
  if (avertoyGrade >= 7) {
    studentResph4.innerText = `Parabéns ${name}! Você foi aprovado`;
    studentResph4.classList.add("text-green-600");
  } else {
    studentResph4.innerText = `Estude mais ${name}! Você foi reprovado`;
    studentResph4.classList.add("text-red-600");
  }
});

studentFrm.addEventListener("reset", () => {
  h.resetFull(studentSelectors);
});

// Ideal Weight Calculation Program - Eg_4.2
const weight = h.qs(".weight");

const weightSelectors = {
  weightFrm: h.qsChild("form", weight),
  weightResph3: h.qsChild("h3", weight),
};

const { weightFrm, weightResph3 } = weightSelectors;

weightFrm.addEventListener("submit", (e) => {
  const weightInput = {
    nome: weightFrm.name.value,
    masculino: weightFrm.male.checked,
    height: Number(weightFrm.height.value),
  };

  const { nome, masculino, height } = weightInput;

  //   let pesoIdeal = 0;

  //   if (masculino) {
  //     pesoIdeal = 22 * Math.pow(height, 2);
  //   } else {
  //     pesoIdeal = 21 * Math.pow(height, 2);
  //   }

  // Alternativa com Tenário
  const pesoIdeal = masculino
    ? c.indexMale * Math.pow(height, 2)
    : c.indexFemale * Math.pow(height, 2);
  weightResph3.innerText = `${nome}: Seu peso ideal é ${pesoIdeal.toFixed(2)} Kg`;
  e.preventDefault();
});

weightFrm.addEventListener("reset", () => {
  h.resetFull(weightSelectors);
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
  const timeFrance = time + c.hourPlus;
  const timeResp = timeFrance > c.hour24 ? timeFrance - c.hour24 : timeFrance;
  timeZoneRespH3.innerText = `Hora na França: ${timeResp.toFixed(2)}`;
  e.preventDefault();
});

timeZoneFrm.addEventListener("reset", () => {
  h.resetFull(timeZoneSelectors);
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
  const sqrtValue = Math.sqrt(number);

  const result = Number.isInteger(sqrtValue)
    ? sqrtValue
    : `Não há raiz exata para ${number}`;
  sqrtRespH3.innerText = `Raiz: ${result}`;
  e.preventDefault();
});

sqrtFrm.addEventListener("reset", () => {
  h.resetFull(sqrtSelectors);
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

atmFrm.addEventListener("reset", () => {
  h.resetFull(atmSelectors);
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

parkingFrm.addEventListener("reset", () => {
  h.resetFull(parkingSelectors);
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
  const triangleInput = {
    sideA: Number(triangleFrm.sideA.value),
    sideB: Number(triangleFrm.sideB.value),
    sideC: Number(triangleFrm.sideC.value),
  };

  const { sideA, sideB, sideC } = triangleInput;

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

triangleFrm.addEventListener("reset", () => {
  h.resetFull(triangleSelectors);
});
