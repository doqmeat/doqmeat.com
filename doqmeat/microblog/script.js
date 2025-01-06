let home = document.getElementById("home");
let sections = document.querySelectorAll("#blog section");
function goHome() {
  for (i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  home.style.display = "block";
}

function goToYear(year) {
  let yearSelected = document.getElementById(year);
  for (i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  yearSelected.style.display = "block";
}

let logNum24 = document.querySelectorAll("#y2024 article");
let log24 = document.getElementById("logs2024");
log24.innerText = "total logs: " + logNum24.length;
// i will eventually find a way of how to loop this? so i don't have to write the same code over and over again
let logNum25 = document.querySelectorAll("#y2025 article");
let log25 = document.getElementById("logs2025");
log25.innerText = "total logs: " + logNum25.length;

goToYear("y2025");
