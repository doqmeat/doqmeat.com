let memos = document.getElementsByClassName("memo");
let button = document.querySelector("nav button");
let winSize = window.matchMedia("(max-width:1300px)");

function closeMemos() {
  for (i = 0; i < memos.length; i++) {
    let memo = memos[i];
    if (memo.style.display == "none") {
      memo.style.display = "block";
      button.innerHTML = "hide memos";
    } else {
      memo.style.display = "none";
      button.innerHTML = "show memos";
    }
  }
}

// if screen is small enough, hide memos by default
if (winSize.matches) {
  closeMemos();
}
