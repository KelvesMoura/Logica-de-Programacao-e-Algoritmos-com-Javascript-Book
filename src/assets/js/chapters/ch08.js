import * as h from "../helper.js";

// Car Dealership - Eg_8.3

const dealCar = h.qs(".dealCar");

const dealCarSelectors = {
  dealCarFrm: h.qsChild("form", dealCar),
  dealCarResp: h.qsChild("pre", dealCar),
};

const { dealCarFrm, dealCarResp } = dealCarSelectors;

dealCarFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const car = {
    model: dealCarFrm.car.value,
    year: Number(dealCarFrm.year.value),
    price: Number(dealCarFrm.price.value),
  };

  const { model, year, price } = car;

  dealCarResp.innerText = h.dealOutput(model, year, price);
});

dealCarFrm.addEventListener("reset", () => {
  h.resetFull(dealCarSelectors);
});
