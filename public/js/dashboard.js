"use strict";

const $ = (selector) => document.querySelector(selector);

const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

const onReset = (evt) => {
  //TODO:: Reset the reset-able fields
  $("#notifications").checked = true;
  $("#eco").checked = true;
  $("#temperature").value = 21;
  $("#location").value = "L7W 4T8";
  $("#location_error").textContent = "";
  $("#temperature_error").textContent = "";
evt.preventDefault();



};

const onSubmit = (evt) => {
  evt.preventDefault();
  //TODO::Reset any errors before submitting
  $("#location_error").textContent = "";
  $("#temperature_error").textContent = "";

  //TODO:: Set notifications since it doesn't need to be validated
  
let notify = $("#notifications").checked
  $("#setting_notifications").textContent = notify ? "On" : "Off";

  

  //TODO:: Set lighting mode with a for loop since it doesn't need to be validated

  let lightingModeOptions = document.querySelectorAll("[name ='lighting_mode']");

  for (let i = 0; i < lightingModeOptions.length; i++)
  {
if (lightingModeOptions[i].checked)
{

$("#setting_lighting_mode").textContent = lightingModeOptions[i].value;



}
    



  }
var postal = $("#location").value;
  //TODO:: Validate the postal code with the Regular Expression,
  var postal_ok = postalRegEx.test(postal)
  if (postal_ok)
  {
    $("#setting_location").textContent = postal;
  }

  //TODO:: Display an error if not valid
else
{
  $("#location_error").textContent = "ERROR";
}
  //TODO:: Validate the temperature by checking the range and if it's a number
  //TODO:: Display an error if not valid

  if ( (15 <$("#temperature").value && $("#temperature").value < 25))
  {
    $("#setting_temperature").textContent = $("#temperature").value;

  }
  else
  {
    $("#temperature_error").textContent = "ERROR"
  }

};

document.addEventListener("DOMContentLoaded", () => {
  //TODO:: Add current date

  
  $("#date_display").textContent = new Date().toDateString();


  //TODO:: Add Reset Form listener

  $("#reset_form").addEventListener("reset", onReset);
  //TODO:: Add Submit Form listener
  $("#update_settings").addEventListener("click", onSubmit);
});
