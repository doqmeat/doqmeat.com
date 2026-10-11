let box = document.getElementsByClassName("fit-box");
let pic = document.getElementsByClassName("caption-pic");
let captionBox = document.getElementById("caption-box");
let captionP = document.getElementById("caption");
let winSize = window.matchMedia("(min-width:800px)");

for (var i = 0; i < pic.length; i++) {
  var picClick = pic[i];
  picClick.onclick = function (windowpopup) {
    captionP.innerText = this.title;
    if (this.title == "" || this.title == "click me!" || winSize.matches) {
      captionBox.style.display = "none";
    } else {
      captionBox.style.display = "block";
    }
    winSize.addEventListener("change", function () {
      windowpopup;
    });
  };
}

function showBox(id) {
  for (var i = 0; i < box.length; i++) {
    box[i].style.display = "none";
  }
  let fitBox = document.getElementById(id);
  fitBox.style.display = "block";
}

function closeBox() {
  for (var i = 0; i < box.length; i++) {
    box[i].style.display = "none";
  }
}

// https://www.w3schools.com/howto/howto_js_media_queries.asp
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
