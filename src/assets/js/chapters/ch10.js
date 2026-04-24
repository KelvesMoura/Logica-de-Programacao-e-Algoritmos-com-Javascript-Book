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
  frm: h.qsChild("form", movieL),
  movie: h.qsChild("form #movie", movieL),
  genre: h.qsChild("form #genre", movieL),
  tableList: h.qsChild("table", movieL),
};

const { frm, movie, genre, tableList } = movieLSelectors;

const movieFrm = h.qsChild("form", movieL);

movieFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  h.insertMovie(movie.value, genre.value, tableList);
  h.saveMovie(movie.value, genre.value);
  frm.reset();
  movie.focus();
});

window.addEventListener("load", () => h.showMovies(tableList));

tableList.addEventListener("click", (e) => h.removeMovie(e, tableList));

// Birthday Candles - Eg_10.4.a
