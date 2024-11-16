let boxes = document.getElementsByClassName("box");
let popUp = document.getElementById("pop-up");
let altCaption = document.getElementById("popCap");
let picture = document.querySelector("#pop-up #pic");
let container = document.querySelector("body");
let captions = document.getElementsByClassName("captions");
let buttons = document.querySelectorAll("#sidebar button");

function showCat(className) {
  let classBox = document.getElementsByClassName(className);
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  event.currentTarget.className += " active";
  for (i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none";
  }
  for (i = 0; i < classBox.length; i++) {
    classBox[i].style.display = "inline-block";
  }
}

document.getElementById("default").click();

for (i = 0; i < boxes.length; i++) {
  let imgClick = boxes[i];
  imgClick.onclick = function (windowpopup) {
    // get img link
    picture.src = this.src;
    picture.alt = this.alt;
    // captions
    altCaption.innerText = this.alt;
    container.style.overflow = "hidden";
    popUp.style.display = "block";
    // img width
    if (this.naturalWidth > this.naturalHeight) {
      picture.style.width = "70%";
    } else {
      picture.style.width = "50%";
    }
    if (this.id == "") {
      return;
    } else {
      let postCap = document.getElementById(this.id + "-caption");
      altCaption.innerHTML = postCap.innerHTML;
    }
    console.log(picture.style.width);
  };
}

function closePopUp() {
  container.style.overflow = "auto";
  popUp.style.display = "none";
}
