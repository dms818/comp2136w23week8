"use strict";

const $ = (selector) => document.querySelector(selector);
const division = ()=>{

    var Result = ($("#division_1").value / $("#division_2").value);
    
    $("#division_result").value = Result;
    $("#int_division_result").value = parseInt(Result);
    $("#floor_division_result").value = Math.floor(Result);
    $("#ceiling_division_result").value = Math.ceil(Result);
    $("#rounded_division_result").value = Math.round(Result);


}
//Add all calculation functions
document.addEventListener("DOMContentLoaded", () => {});
$("#division_btn").addEventListener("click", division);

const modulo = ()=>{
    var Result = ($("#modulo_1").value % $("#modulo_2").value);
    $("#modulo_result").value = Result;
}
$("#modulo_btn").addEventListener("click", modulo);


const forloop = ()=>{
var loop_length = $("#for_limit").value
var loop_counter = parseFloat($("#for_counter").value)
var loop_increment = parseFloat($("#for_increment").value)

    if ($("#for_increment_direction").value == "positive")
    {
        for (let i=0; i<loop_length;i++)
        {

            loop_counter = loop_counter + loop_increment
        
        }

         }
    else
    {

    for (let i=0; i<loop_length;i++)
    {

        loop_counter = loop_counter - loop_increment
    }

    }
        $("#for_result").value = loop_counter;
}
$("#for_loop_btn").addEventListener("click", forloop);






