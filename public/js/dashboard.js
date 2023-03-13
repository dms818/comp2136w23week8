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
evt.preventDefault();



};

const onSubmit = (evt) => {
  //TODO::Reset any errors before submitting

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

  //TODO:: Validate the postal code with the Regular Expression,
  postal_ok = postalRegEx.test($("#location").value )
  if (postal_ok)
  {
    $("#setting_location").value = $("#location").value;
  }

  //TODO:: Display an error if not valid
else
{
  $("#location").value = "ERROR";
}
  //TODO:: Validate the temperature by checking the range and if it's a number
  //TODO:: Display an error if not valid

  if ( ($("#temperature").value = !isNaN) && (15 <$("#temperature").value < 25))
  {
    $("#setting_temperature").value = $("#temperature").value;

  }
  else
  {
    $("#temperature").value = "ERROR"
  }

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  //TODO:: Add current date

  
  $("#date_display").textContent = new Date().toDateString();


  //TODO:: Add Reset Form listener

  $("#reset_form").addEventListener("reset", onReset);
  //TODO:: Add Submit Form listener
  $("#update_settings").addEventListener("click", onSubmit);
});
