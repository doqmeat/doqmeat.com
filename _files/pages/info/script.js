const spanE = document.querySelector("span.laptop-age");
const date1 = new Date(2022, 2, 25);
const date2 = Date.now();

// 24 hours, 60 mins, 60 secs, 1000ms
const msPerDay = 24 * 60 * 60 * 1000;

let completeDays = Math.floor((date2 - date1) / msPerDay);
console.log(completeDays);
// let years = Math.floor(completeDays / 365);
// let months = years % 360;

spanE.textContent = `my laptop is ${completeDays} days old!`;
