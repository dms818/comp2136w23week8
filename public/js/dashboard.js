"use strict";

const $ = (selector) => document.querySelector(selector);

const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

const onReset = (evt) => {
  //TODO:: Reset the reset-able fields
};

const onSubmit = (evt) => {
  //TODO::Reset any errors before submitting

  //TODO:: Set notifications since it doesn't need to be validated

  //TODO:: Set lighting mode with a for loop since it doesn't need to be validated

  //TODO:: Validate the postal code with the Regular Expression,
  //TODO:: Display an error if not valid

  //TODO:: Validate the temperature by checking the range and if it's a number
  //TODO:: Display an error if not valid

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  //TODO:: Add current date
  //TODO:: Add Reset Form listener
  //TODO:: Add Submit Form listener
});
