var currentTime = new Date();
var ramzanTime = prompt("Enter ramzan date", "23-Mar-2023 00:00:00");
var ramzanDate = new Date(ramzanTime);
var diff = ramzanDate.getTime() - currentTime.getTime();
var diffDays = diff / (1000 * 60 * 60 * 24);
var diffhours = diff / (1000 * 60 * 60) % 24;
var diffminutes = diff / (1000 * 60) % 60;
var diffseconds = diff / 1000 % 60;

var days = document.querySelector("#days");
days.innerHTML = Math.round(diffDays);
var hours = document.querySelector("#hours");
hours.innerHTML = Math.round(diffhours);
var minutes = document.querySelector("#minutes");
minutes.innerHTML = Math.round(diffminutes);
var seconds = document.querySelector("#seconds");
seconds.innerHTML = Math.round(diffseconds);
// console.log(Math.round(diffminutes));
// console.log(ramzanDate);



