import * as c from "./constant.js";

// Global Functions

export const half = (valueInput) => valueInput / 2;

export const qs = (selector) => document.querySelector(selector);

export const qsChild = (selector, parent = document) =>
  parent.querySelector(selector);

export const qsChildAll = (selector, parent = document) =>
  parent.querySelectorAll(selector);

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

// Toys Program - Eg_6.9

export const generateReport = (list) => {
  const group = Object.groupBy(list, (child) => child.age);

  let result = "";

  for (let age in group) {
    const ageRead = group[age];
    const qtdChild = ageRead.length;
    const qtdList = list.length;
    const perc = (qtdChild / qtdList) * c.perct;
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

// Playoff Games - Eg_6.14.a

export const prepareGames = (list) => {
  let games = "";
  while (list.length > 0) {
    const lastTeam = list.pop();
    const firstTeam = list.shift();
    games += `${firstTeam} x ${lastTeam}\n`;
  }
  return games;
};

// Traffic Ticket - Eg_7.10.c

export const dateFormat = (date) => {
  const finalDate = new Date(date.getTime() + c.daytoMs * 90);

  const dayZero = addZero(finalDate.getDate());
  const monthZero = addZero(finalDate.getMonth() + 1);
  const year = addZero(finalDate.getFullYear());

  return `${dayZero}/${monthZero}/${year}`;
};

export const addZero = (value) => {
  return value < 10 ? `0${value}` : value;
};

// Car Dealership - Eg_8.3

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

  const priceInput =
    classifyModel == "Novo" ? price * c.perct50 : price * c.perct30;
  const priceParcel = (price - priceInput) / 10;

  return `${model} - ${classifyModel}\n\nEntrada: R$: ${currencyFormat(priceInput)}\n\n+10x de R$ ${currencyFormat(priceParcel)}`;
};

// Swimming Club - Eg_8.8.a

export const dashName = (userName) => {
  let newOutput = "";

  for (const letter of userName) {
    if (letter != " ") {
      newOutput += "-";
    } else {
      newOutput += " ";
    }
  }

  return newOutput;
};

export const categoryFilter = (ageUser) => {
  let category = "";
  if (ageUser <= c.childAge) {
    category = "Infantil";
  } else if (ageUser >= c.youngAge && ageUser <= c.adultAge) {
    category = "Juvenil";
  } else {
    category = "Adulto";
  }
  return category;
};

// Initial Password Program - Eg_8.8.b

export const validName = (userName) => {
  let output = "";
  if (userName.length > 0) {
    output = true;
  } else {
    output = false;
  }
  return output;
};

export const lastName = (userLastName) => {
  const listName = userLastName.split(" ");

  return listName.at(-1).toLowerCase();
};

export const qtdVowel = (userName) => {
  const qtd = userName.match(/[aeiou]/gi).length;
  return addZero(qtd);
};

// Pet Avenue - Eg_8.8.c

export const discountCalculate = (value, plan) => {
  const listDiscount = {
    health: c.perct50,
    friend: c.perct20,
    noplan: c.perct10,
  };

  return value * listDiscount[plan];
};

// Football Club - Eg_9.2 e Eg_9.6.a

export const changeClub = (clubSelected) => {
  let club = clubSelected.target.id.split("_")[1];
  let clubLowerCase = club.toLowerCase();
  const parent = clubSelected.target.closest(".container");

  if (clubLowerCase == "none") {
    localStorage.removeItem("club");
    delete parent.dataset.club;
    parent.querySelector("#imgClub").removeAttribute("alt");
    parent.querySelector("#imgClub").src =
      `./src/assets/image/Eg_8.8.c_${clubLowerCase}.png`;
  } else {
    parent.dataset.club = clubLowerCase;

    localStorage.setItem("club", clubLowerCase);

    changePhoto(parent, clubLowerCase, club);
  }
};

export const checkClub = (clubStorage) => {
  if (localStorage.getItem("club")) {
    const clubActive = localStorage.getItem("club");

    clubStorage.forEach((clubs) => {
      let clubSet = clubs.id.split("_")[1];
      let clubSetLowerCase = clubSet.toLowerCase();

      if (clubActive == clubSetLowerCase) {
        const parent = clubs.closest(".container");
        parent.dataset.club = clubSetLowerCase;

        clubs.checked = true;

        changePhoto(parent, clubSetLowerCase, clubSet);
      }
    });
  } else {
    clubStorage[0].closest(".container").querySelector("#imgClub").src =
      `./src/assets/image/Eg_8.8.c_none.png`;
  }
};

function changePhoto(parent, lowerCase, clubActived) {
  parent.querySelector("#imgClub").src =
    `./src/assets/image/Eg_8.8.c_${lowerCase}.png`;

  parent.querySelector("#imgClub").alt = `Símbolo do ${clubActived}`;
}

export const checkUser = (club) => {
  const output = qsChild("pre", club);
  let count;

  if (localStorage.getItem("counter")) {
    count = Number(localStorage.getItem("counter")) + 1;
    localStorage.setItem("counter", count);
    output.innerText = `Que bom que você voltou! Esta é a sua visita de número ${count} ao nosso site.\n\nAperte Ctrl + Shift + Q para resetar o contador`;
  } else {
    count += 1;
    localStorage.setItem("counter", count);
    output.innerText = `Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.`;
  }
};

export const resetUser = (e, club) => {
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() == "q") {
    const output = qsChild("pre", club);
    e.preventDefault();
    localStorage.removeItem("counter");
    localStorage.setItem("counter", 1);
    output.innerText = `Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.`;
  }
};

// How much does a watermelon weigh? - Eg_9.5

export const weightBet = (weight) => {
  if (localStorage.getItem("weight")) {
    const weightLocal = localStorage.getItem("weight").split(";");
    return weightLocal.includes(weight.toString());
  } else {
    return false;
  }
};

export const addBet = (user, weight) => {
  if (localStorage.getItem("name")) {
    const addName = `${localStorage.getItem("name")};${user}`;
    const addWeight = `${localStorage.getItem("weight")};${weight}`;
    localStorage.setItem("name", addName);
    localStorage.setItem("weight", addWeight);
  } else {
    localStorage.setItem("name", user);
    localStorage.setItem("weight", weight);
  }
};

export const showBet = (output) => {
  let bets = "";

  if (!localStorage.getItem("name")) {
    output.innerText = "";
    return;
  }

  const name = localStorage.getItem("name").split(";");
  const weight = localStorage.getItem("weight").split(";");

  name.forEach((user, i) => (bets += `${user} - ${weight[i]}gr\n`));

  output.innerText = bets;
};

export const checkWinner = () => {
  if (!localStorage.getItem("name")) {
    alert("Não há apostas cadastradas");
    return;
  }

  const correctWeight = Number(prompt("Qual o peso correto da Melancia?"));

  if (correctWeight == 0 || isNaN(correctWeight)) {
    return;
  }

  const names = localStorage.getItem("name").split(";");
  const weight = localStorage.getItem("weight").split(";");

  let nameWinner = names[0];
  let weightWinner = Number(weight[0]);

  for (let i = 1; i < names.length; i++) {
    const difWeightWinner = Math.abs(weightWinner - correctWeight);
    const difWeightBet = Math.abs(Number(weight[i] - correctWeight));

    if (difWeightBet < difWeightWinner) {
      nameWinner = names[i];
      weightWinner = Number(weight[i]);
    }
  }

  let mensagem = `Resultado - Peso Correto: ${correctWeight}gr\n${"-".repeat(40)}\nVencedor: ${nameWinner}\nAposta: ${weightWinner}gr`;
  alert(mensagem);
};

export const cleanBet = (form) => {
  if (confirm("Confirmar exclusão de todas apostas")) {
    localStorage.removeItem("name");
    localStorage.removeItem("weight");
    showBet(form);
  }
};

// Weekly Groceries - Eg_9.6.b

export const addProduct = (product) => {
  if (!product) {
    alert("Digite um produto para ser cadastrado");
    return;
  }

  if (localStorage.getItem("list")) {
    const addProduct = `${localStorage.getItem("list")};${product}`;
    localStorage.setItem("list", addProduct);
  } else {
    localStorage.setItem("list", product);
  }
};

export const showProduct = (output) => {
  let showList = "";

  if (!localStorage.getItem("list")) {
    output.innerText = "";
    return;
  }

  const products = localStorage.getItem("list").split(";");

  products.sort();

  showList = `Produtos Adicionados\n${"-".repeat(20)}\n`;

  products.forEach((item) => (showList += `${item}\n`));

  output.innerText = showList;
};

export const cleanProducts = (form) => {
  if (confirm("Confirmar exclusão de todos produtos")) {
    localStorage.removeItem("list");
    showProduct(form);
  }
};

// Vehicles Control Services - Eg_9.6.c

export const addService = (form) => {
  const newService = form.service.value;

  if (!newService) {
    alert("Favor primeiro registrar o serviço!");
    form.service.focus();
    return;
  }

  if (localStorage.getItem("services")) {
    const addService = `${localStorage.getItem("services")};${newService}`;
    localStorage.setItem("services", addService);
  } else {
    localStorage.setItem("services", newService);
  }
};

export const countService = (form) => {
  const outputCounter = qsChild("#counter", form);

  if (!localStorage.getItem("services")) {
    outputCounter.innerText = "";
    return;
  }

  const serviceList = localStorage.getItem("services").split(";");

  const counter = Number(serviceList.length);

  const resp = `Serviço Pendentes: ${counter}`;

  outputCounter.innerText = resp;
};

export const executeService = (form) => {
  const outputService = qsChild("#serviceResp", form);

  if (!localStorage.getItem("services")) {
    outputService.innerText = "";
    return;
  }

  const outputCounter = qsChild("#counter", form);

  const serviceList = localStorage.getItem("services").split(";");

  const serviceDoing = serviceList.splice(0, 1);

  const resp = serviceDoing[0];

  localStorage.setItem("services", serviceList.join(";"));

  if (serviceList[0] === "") {
    localStorage.removeItem("services");
    outputCounter.innerText = "";
  } else {
    countService(form);
    outputService.innerText = resp;
  }
};

// To Do List - Eg_10.1

export const addTaskList = (section) => {
  const taskFrm = qsChild("form", section);
  const taskInput = taskFrm.tasks.value;

  const h5 = document.createElement("h5");
  const textTask = document.createTextNode(taskInput);

  const list = qsChild(".divContent", section) || createDiv(section);

  list.appendChild(h5);
  h5.appendChild(textTask);

  taskFrm.tasks.value = "";
  taskFrm.tasks.focus();
};

const createDiv = (section) => {
  const content = qsChild(".content", section);

  const div = document.createElement("div");
  div.className = "divContent mt-6 font-bold text-wrap";

  return content.appendChild(div);
};

export const taskSelected = (section) => {
  const tasks = qsChildAll("h5", section);

  if (tasks.length == 0) {
    alert("Não há tarefas para selecionar");
    return;
  }

  let aux = -1; //to avoid an undefined error if no h5 is found

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].className == "selected") {
      tasks[i].className = "normal";
      aux = i;
      break;
    }
  }

  if (aux == tasks.length - 1) {
    aux = -1;
  }

  tasks[aux + 1].className = "selected";
};

export const taskDeleted = (section) => {
  const tasks = qsChildAll("h5", section);

  let aux = -1;

  tasks.forEach((task, i) => {
    if (tasks[i].className == "selected") {
      aux = i;
    }
  });

  if (aux == -1) {
    alert("Selecione uma tarefa para removê-la...");
    return;
  }

  if (confirm(`Confirma Exclusão de ${tasks[aux].innerText}`)) {
    const taskList = qsChild(".divContent", section);
    taskList.removeChild(tasks[aux]);
  }
};

export const taskSaved = (section) => {
  const tasks = qsChildAll("h5", section);

  if (tasks.length == 0) {
    alert("Não há tarefas para serem salvas");
    return;
  }

  let dados = "";

  tasks.forEach((task) => (dados += `${task.innerText};`));

  localStorage.setItem("task", dados.slice(0, -1));

  if (localStorage.getItem("task")) {
    alert("Tarefas Salvas com Sucesso");
  }
};

export const showTasks = (section) => {
  if (localStorage.getItem("task")) {
    createDiv(section);

    const dados = localStorage.getItem("task").split(";");

    dados.forEach((task) => addTaskListStorage(task, section));
  }
};

const addTaskListStorage = (task, section) => {
  const h5 = document.createElement("h5");
  const textTask = document.createTextNode(task);

  const list = qsChild(".divContent", section) || createDiv(section);

  list.appendChild(h5);
  h5.appendChild(textTask);
};

// Guess Amount Game - Eg_10.2

export const addCoins = (section) => {
  const container = qsChild(".container-coins", section);

  const coins = [
    {
      qtd: randomCoins(),
      img: "1_00.png",
      alt: "Moedas de um real",
      class: "moeda100",
    },
    {
      qtd: randomCoins(),
      img: "0_50.png",
      alt: "Moedas de cinquenta centavos",
      class: "moeda050",
    },
    {
      qtd: randomCoins(),
      img: "0_25.png",
      alt: "Moedas de vinte e cinco centavos",
      class: "moeda025",
    },
    {
      qtd: randomCoins(),
      img: "0_10.png",
      alt: "Moedas de dez centavos",
      class: "moeda010",
    },
  ];

  createCoins(container, coins);
};

const randomCoins = () => Math.ceil(Math.random() * 5);

const createCoins = (div, coins) => {
  coins.forEach((item) => {
    for (let i = 0; i < item.qtd; i++) {
      const newCoins = document.createElement("img");
      newCoins.src = `./src/assets/image/Eg_10.2_${item.img}`;
      newCoins.alt = item.alt;
      newCoins.classList.add(item.class);
      div.appendChild(newCoins);
    }
    const divLine = document.createElement("div");
    divLine.className = "line w-full";
    div.appendChild(divLine);
  });

  return div;
};

export const checkCoins = (section) => {
  const frm = qsChild("form", section);
  const value = Number(qsChild("form #value", section).value);
  const imgCoins = qsChild(".container-coins", section);
  const sumCoins = qsChildAll("img", imgCoins);

  let totalCoins = 0;

  const valueCoins = {
    moeda100: 1,
    moeda050: 0.5,
    moeda025: 0.25,
    moeda010: 0.1,
  };

  sumCoins.forEach((item) => {
    if (item.className in valueCoins) {
      totalCoins += Number(valueCoins[item.className]);
    }
  });

  const resp = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.className = "font-bold text-2xl";

  let message;

  if (totalCoins.toFixed(2) == value) {
    message = `Parabéns! Você acertou!`;
  } else {
    message = `Ops.. A resposta correta é ${totalCoins.toFixed(2)}`;
  }

  const outputMessage = document.createTextNode(message);

  h3.appendChild(outputMessage);
  resp.appendChild(h3);
  imgCoins.appendChild(resp);

  frm.submit.disabled = true;
};

export const resetCoins = (section) => {
  const gmFrm = qsChild("form", section);
  const gmCoins = qsChild(".container-coins", section);

  gmCoins.innerHTML = "";
  addCoins(section);
  gmFrm.submit.disabled = false;
  gmFrm.reset();
};

// Favorite Movie - Eg_10.3

export const insertMovie = (movie, genre, table) => {
  const line = table.insertRow(-1);

  const col1 = line.insertCell(0);
  const col2 = line.insertCell(1);
  const col3 = line.insertCell(2);

  const cols = [col1, col2, col3];

  cols.forEach((item) => (item.className = "p-2 text-left"));

  col1.innerText = movie;
  col2.innerText = genre;
  col3.innerHTML = `<i class="exclui" title="Excluir">&#10008;</i>`;
};

export const saveMovie = (movie, genre) => {
  if (localStorage.getItem("movie")) {
    const addMovie = `${localStorage.getItem("movie")};${movie}`;
    const addGenre = `${localStorage.getItem("genre")};${genre}`;

    localStorage.setItem("movie", addMovie);
    localStorage.setItem("genre", addGenre);
  } else {
    localStorage.setItem("movie", movie);
    localStorage.setItem("genre", genre);
  }
};

export const showMovies = (table) => {
  if (localStorage.getItem("movie")) {
    const movies = localStorage.getItem("movie").split(";");
    const genre = localStorage.getItem("genre").split(";");

    let list = "";

    movies.forEach((movie, i) => (list = insertMovie(movie, genre[i], table)));
  }
};

export const removeMovie = (e, tableList) => {
  if (e.target.classList.contains("exclui")) {
    const title = e.target.parentElement.parentElement.children[0].innerText;

    if (confirm(`Confirma a Exclusão do Filme ${title}`)) {
      e.target.parentElement.parentElement.remove();
      localStorage.removeItem("movie");
      localStorage.removeItem("genre");

      // Start with 1 due to Header
      for (let i = 1; i < tableList.rows.length; i++) {
        const movie = tableList.rows[i].cell[0].innerText;
        const genre = tableList.rows[i].cell[1].innerText;

        saveMovie(movie, genre);
      }
    }
  }
};


// Birthday candlese - Eg_10.4.a