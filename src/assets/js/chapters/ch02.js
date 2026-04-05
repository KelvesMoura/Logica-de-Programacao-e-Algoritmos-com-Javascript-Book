import * as h from "../helper.js";
import * as c from "../constant.js";

// Cine JS Program - Now Playing - Eg_2.9
const cine = h.qs(".cine");

const cineSelectors = {
  cineFrm: h.qsChild("form", cine),
  cineResph3: h.qsChild("h3", cine),
  cineResph4: h.qsChild("h4", cine),
};

const { cineFrm, cineResph3, cineResph4 } = cineSelectors;

cineFrm.addEventListener("submit", (e) => {
  const cineInput = {
    nameMovie: cineFrm.movie.value,
    durationMovie: Number(cineFrm.duration.value),
  };

  const { nameMovie, durationMovie } = cineInput;

  const hours = Math.floor(durationMovie / 60);
  const minutes = durationMovie % 60;

  cineResph3.innerText = nameMovie;
  cineResph4.innerText = `${hours} horas(s) ${minutes} minuto(s)`;
  e.preventDefault();
});

cineFrm.addEventListener("reset", () => {
  h.resetFull(cineSelectors);
});

// JS Vehicle Resale Program - Eg_2.9.b
const car = h.qs(".car");

const carSelectors = {
  carFrm: h.qsChild("form", car),
  carVehiclesName: h.qsChild("h3", car),
  carInstallmentPrice: h.qsChild("#installmentPrice", car),
  carPrice: h.qsChild("#inputPrice", car),
};

const { carFrm, carVehiclesName, carInstallmentPrice, carPrice } = carSelectors;

carFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const carInput = {
    model: carFrm.vehicles.value,
    priceInput: Number(carFrm.price.value),
  };

  const { model, priceInput } = carInput;

  const halfPrice = h.half(priceInput);
  const parcelValue = (priceInput - halfPrice) / c.carParcel;

  carVehiclesName.innerText = `Promoção: ${model}`;
  carPrice.innerText = `Entrada de R$ ${h.currencyFormat(halfPrice)}`;
  carInstallmentPrice.innerText = `+12x R$ ${h.currencyFormat(parcelValue)}`;
});

carFrm.addEventListener("reset", () => {
  h.resetFull(carSelectors);
});

// JS Restaurant Program - Eg_2.9.c
const restaurant = h.qs(".restaurant");

const restaurantSelectors = {
  restaurantFrm: h.qsChild("form", restaurant),
  restaurantResp: h.qsChild("h3", restaurant),
};

const { restaurantFrm, restaurantResp } = restaurantSelectors;

restaurantFrm.addEventListener("submit", (e) => {
  const restaurantInput = {
    priceFood: Number(restaurantFrm.price.value),
    amountFood: Number(restaurantFrm.amount.value),
  };

  const { priceFood, amountFood } = restaurantInput;

  const priceTotal = (priceFood * amountFood) / c.kiloToGram;

  restaurantResp.innerText = `Valor a pagar R$ ${h.currencyFormat(priceTotal)}`;

  e.preventDefault();
});

restaurantFrm.addEventListener("reset", (e) => {
  h.resetFull(restaurantSelectors);
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
  e.preventDefault();
  const drugInput = {
    priceFinal: Math.floor(drugFrm.amount.value * 2),
    inputName: drugFrm.product.value,
  };

  const { priceFinal, inputName } = drugInput;

  drugRespNameProduct.innerText = `Promoção de ${inputName}`;
  drugRespDiscountProduct.innerText = `Leve 2 por apenas R$ ${h.currencyFormat(priceFinal)}`;
});

drugFrm.addEventListener("reset", (e) => {
  h.resetFull(drugSelectors);
});

// Lan House JS Program- Eg_2.10.b
const lan = h.qs(".lan");

const lanSelectors = {
  lanFrm: h.qsChild("form", lan),
  lanResp: h.qsChild("h3", lan),
};

const { lanFrm, lanResp } = lanSelectors;

lanFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const lanInput = {
    time: Math.ceil(Number(lanFrm.time.value) / 15),
    price: Number(lanFrm.amount.value),
  };

  const { time, price } = lanInput;

  const totalPrice = time * price;
  lanResp.innerText = `Valor total á Pagar: R$ ${h.currencyFormat(totalPrice)}`;
});

lanFrm.addEventListener("reset", (e) => {
  h.resetFull(lanSelectors);
});

// JS Supermarket Program - Eg_2.10.c

const market = h.qs(".market");

const marketSelectors = {
  marketFrm: h.qsChild("form", market),
  marketRespOffer: h.qsChild("h3", market),
};

const { marketFrm, marketRespOffer } = marketSelectors;

marketFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const marketInput = {
    nameProduct: marketFrm.product.value,
    priceProduct: Number(marketFrm.price.value),
  };

  const { nameProduct, priceProduct } = marketInput;

  const offer = priceProduct * c.double + priceProduct / c.half;

  marketRespOffer.innerText = `Leve 3 ${nameProduct} e pague somente R$ ${h.currencyFormat(offer)}`;
});

marketFrm.addEventListener("reset", (e) => {
  h.resetFull(marketSelectors);
});
