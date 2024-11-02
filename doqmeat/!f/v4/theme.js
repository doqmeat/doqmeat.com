window.onload = checkTheme();

function pickTheme(value) {
  var sheet = document.getElementsByClassName("theme")[0];
  sheet.href = value;
  localStorage.setItem("theme", value);
}

function checkTheme() {
  var sheet = document.getElementsByClassName("theme")[0];
  var localTheme = localStorage.getItem("theme");
  sheet.href = localTheme;
  if (localTheme == null) {
    sheet.href = "!f/v4/sunset/style.css";
  }
}
