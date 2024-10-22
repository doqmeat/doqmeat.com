function toggleComm(box) {
  var clickBox = document.getElementById(box);
  var boxes = document.getElementsByClassName("comm-box");
  var buttons = document.getElementsByClassName("comm-b");
  var i;
  for (i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none";
  }
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  clickBox.style.display = "block";
  event.currentTarget.className += " active";
}

document.getElementById("default").click();
