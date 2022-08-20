// create function for current day
//var todaysDate = new Date()
//try to create a variable to stringify and set time in local storage
//create another variable to get time from local storage?
// how to use today variable to display day after set and get 
//var today = document.querySelector("#currentDay");
//today = new Date();
//window.localStorage.setItem("date", JSON.stringify(date));
/*
var currentDay = {
    day:"today",
    month:"month",
    date:"present",
}
*/
//window.localStorage.setItem("date", JSON.stringify(date));
//var today = document.querySelector("#currentDay");
/*
today = function() {
    var todaysDate = new Date(); //this will not work
    todaysDate.getDay(); // neither will this. json wont read function 
};
*/

//console.log(today);

//create button for rows dynamically.
//button class="btn"
//use appendChild to assign button to .col-sm-2 (furthest to right)
//create array with variable name eventInput (empty array?) to store event input
//JSON stringify inputs and use windows.localStorage.setItem()
//use addEventListener for save button click event 
//when button is clicked I want the event to stay displayed on event column
//create eventHandler function with addEventListener in it
//create function expression with name userInput. (use eventHandler as parameter?) use if statement with array, localStorage.getItem(), and return() to store on event column
var buttonColumn = "#btn-column";
var btn = document.createElement("button");
btn.textContent = "save";

buttonColumn.appendChild(btn);




