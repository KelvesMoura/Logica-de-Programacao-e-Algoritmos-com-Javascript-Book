import * as h from "../helper.js";

// To Do List - Eg_10.1

const task = h.qs(".task");

const taskSelectors = {
  taskFrm: h.qsChild("form", task),
  taskSelect: h.qsChild("form #select", task),
  taskDelete: h.qsChild("form #delete", task),
  taskSave: h.qsChild("form #save", task),
};

const { taskFrm, taskSelect, taskDelete, taskSave } = taskSelectors;

taskFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  h.addTaskList(task);
});

taskSelect.addEventListener("click", () => {
  h.taskSelected(task);
});

taskDelete.addEventListener("click", () => {
  h.taskDeleted(task);
});

taskSave.addEventListener("click", () => {
  h.taskSaved(task);
});

window.addEventListener("load", () => h.showTasks(task));

// Guess Amount Game - Eg_10.2

const gmoney = h.qs(".gmoney");

const gmSelectors = {
  gmFrm: h.qsChild("form", gmoney),
  gmReset: h.qsChild("form #clean", gmoney),
};

const { gmFrm, gmCoins, gmReset } = gmSelectors;

window.addEventListener("load", () => h.addCoins(gmoney));

gmFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  h.checkCoins(gmoney);
});

gmReset.addEventListener("click", () => h.resetCoins(gmoney));

// Favorite Movie - Eg_10.3
const movieL = h.qs(".movieList");

const movieLSelectors = {
  movieLFrm: h.qsChild("form", movieL),
  movieLMovie: h.qsChild("form #movie", movieL),
  movieLGenre: h.qsChild("form #genre", movieL),
  movieLTableList: h.qsChild("table", movieL),
};

const { movieLFrm, movieLMovie, movieLGenre, movieLTableList } =
  movieLSelectors;

const movieFrm = h.qsChild("form", movieL);

movieFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  h.insertMovie(movieLMovie.value, movieLGenre.value, movieLTableList);
  h.colorLines(movieL);
  h.saveMovie(movieLMovie.value, movieLGenre.value);
  movieLFrm.reset();
  movieLMovie.focus();
});

window.addEventListener("load", () => h.showMovies(movieLTableList));

movieLTableList.addEventListener("click", (e) =>
  h.removeMovie(e, movieLTableList),
);

// Birthday Candles - Eg_10.4.a
const bth = h.qs(".bth");

const bthSelectors = {
  bthFrm: h.qsChild("form", bth),
  bthReset: h.qsChild("form #clean", bth),
};

const { bthFrm, bthReset } = bthSelectors;

bthFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  h.addAge(bth);
});

bthReset.addEventListener("click", () => h.resetAge(bth));

// Colorful Name - Eg_10.4.b

const cName = h.qs(".cName");

const cNameFrm = h.qsChild("form", cName);

cNameFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  h.colorName(cName);
});

//Brazil Cup - Qualifiers - Eg_10.4.c
const bcq = h.qs(".bcq");

const bcqSelectors = {
  bcqTable: h.qsChild("form #table", bcq),
  bcqClean: h.qsChild("form #clean", bcq),
};

const { bcqTable, bcqClean } = bcqSelectors;

bcq.addEventListener("submit", (e) => {
  e.preventDefault();
  h.addClub(bcq);
});

bcqTable.addEventListener("click", () => h.createTable(bcq));

bcqClean.addEventListener("click", () => h.resetClubs(bcq));
