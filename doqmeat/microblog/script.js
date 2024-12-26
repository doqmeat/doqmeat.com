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

let logNum = document.querySelectorAll("#y2024 article");
let log = document.getElementById("logs2024");
log.innerText = "total logs: " + logNum.length;

goToYear("y2024");
