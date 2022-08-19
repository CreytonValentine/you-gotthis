// create function for current day
var todaysDate = new Date()
//try to create a variable to stringify and set time in local storage
//create another variable to get time from local storage?
// how to use today variable to display day after set and get 
var today = document.querySelector("#currentDay");
today = new Date();

//window.localStorage.setItem("date", JSON.stringify(date));



/*
var currentDay = {
    day:"today",
    month:"month",
    date:"present",
}
*/

//window.localStorage.setItem("date", JSON.stringify(date));



var today = document.querySelector("#currentDay");
today = function() {
    var todaysDate = new Date(); //this will not work
    todaysDate.getDay(); // neither will this. json wont read function 
};

console.log(today);

