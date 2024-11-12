let memos = document.getElementsByClassName("memo");
let button = document.querySelector("nav button");

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
