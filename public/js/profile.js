"use strict";

const $ = (selector) => document.querySelector(selector);

const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

const onReset = (evt) => {
  //TODO:: Reset the reset-able fields
  evt.preventDefault();
  resetErrors();
  $("#first_name").value = "";
  $("#last_name").value = "";
  $("#email").value = "";
  $("#dob").value = "1991-02-07"
  $("#password").value = "";
  $("#confirm_password").value = "";
};

function resetErrors() 
{
  $("#name_error").textContent = "";
  $("#email_error").textContent = "";
  $("#password_error").textContent = "";
  $("#confirm_password_error").textContent = "";
}


const onSubmit = (evt) => {
  resetErrors();
  
  evt.preventDefault();

  //TODO:: Use this boolean to keep track of any errors because you need to prevent the settings
  //       from updating if even one field is wrong
  let formErrors = false;

  //TODO:: Make sure name fields are not empty
  if (($("#first_name").value == "" )|| ($("#last_name").value == ""))
  {
formErrors = true;
$("#name_error").textContent = "Please enter a real name";
  }

  //TODO:: Validate email with the Regular Expression
 var email_ok = emailRegEx.test($("#email").value);

 if (!email_ok)
 {
  formErrors = true;
  $("#email_error").textContent = "Please enter a real E-mail";
 }

  //TODO:: Validate password with the Regular Expression

  var password_ok = passwordRegEx.test($("#password").value);

  if (!password_ok)
  {
    formErrors = true;
  $("#password_error").textContent = "Password must be at least 8 characters and include a number and a capital letter";
  }
  //TODO:: Validate passwords to be matching
  if ($("#password").value != $("#confirm_password").value)
  {
    formErrors = true;
    $("#confirm_password_error").textContent = "Passwords do not match";
  }

  //TODO:: Make sure date of birth is in the past.
  
let currentdate = new Date();
let inputdate = new Date($("#dob").value);

if (currentdate.setHours(0,0,0,0) < inputdate.getDate)
{
  formErrors = true;
  $("#dob_error").textContent = "date input invalid";

}
  

  //TODO:: check you formErrors boolean and update the fields if still false
  if (!formErrors)
  {
    let today = new Date();
    var dob = new Date($("#dob").value)
    $("#user_first_name").textContent = $("#first_name").value;
    $("#user_last_name").textContent = $("#last_name").value;
    $("#user_email").textContent = $("#email").value;
    $("#user_dob").textContent = dob.toDateString();
    $("#user_password_last_changed").textContent = dob.toDateString();

  }

};

document.addEventListener("DOMContentLoaded", () => {
  $("#update_profile").addEventListener("click", onSubmit);

  $("#reset_form").addEventListener("click", onReset);
});
