const boxes = document.getElementsByClassName("draggable");

function closeBox(id) {
  const box = document.getElementById(id);
  box.style.display = "none";
}

for (i = 0; i < boxes.length; i++) {
  const boxesClick = boxes[i];
  boxesClick.onclick = function (indexpos) {
    const boxID = document.getElementById(this.id);
    boxID.style.zIndex = i++;
  };
}
