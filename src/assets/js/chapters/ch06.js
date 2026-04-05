import * as h from "../helper.js";

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
      accumulator + car.name + " - R$: " + h.currencyFormat(car.price) + "\n",
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
    list += `${name} - R$: ${h.currencyFormat(price)}\n`;
  }
  resaleResp.innerText = `Carros até R$: ${h.currencyFormat(priceOffer)}\n${"-".repeat(40)}\n${list}`;
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
    list += `${model} - R$ ${h.currencyFormat(price)}\n`;
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

  const gameShowInput = {
    name: gameShowFrm.name.value,
    grade: Number(gameShowFrm.grade.value),
  };

  const { name, grade } = gameShowInput;

  let showList = "";
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
