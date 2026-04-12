import * as h from "../helper.js";
import * as c from "../constant.js";

// Football Club - Eg_9.2
const club = h.qs(".club");

const clubSelectors = {
  clubTeam: h.qsChildAll('form input[type="radio"]', club),
};

const { clubTeam } = clubSelectors;

clubTeam.forEach((club) => club.addEventListener("change", h.changeClub));

h.checkClub(clubTeam);
