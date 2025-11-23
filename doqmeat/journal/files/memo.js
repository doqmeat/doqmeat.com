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

for (i = 0; i < memos.length; i++) {
	let memoClick = memos[i];
	// changes the z-index of the memos as you click on them
	memoClick.onclick = function () {
		let memoID = document.getElementById(this.id);
		memoID.style.zIndex = i++;
	};
}

// if screen is small enough, hide memos by default
if (winSize.matches) {
	closeMemos();
}
