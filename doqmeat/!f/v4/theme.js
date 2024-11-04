function pickTheme(value) {
  var sheet = document.getElementsByClassName("theme")[0];
  if (value == null) {
    if (localStorage.getItem("theme") == null) {
      value = "sunset";
    } else {
      value = localStorage.getItem("theme");
    }
  }
  localStorage.setItem("theme", value);
  sheet.setAttribute("href", "!f/v4/" + value + "/style.css");
}

pickTheme();
