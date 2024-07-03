function showWin(win) {
	var i;
	var windowPopUp = document.getElementById(win);
	var otherWin = document.getElementsByClassName("window");
	for (i = 0; i < otherWin.length; i++) {
		otherWin[i].style.display = "none";
	}
	if (windowPopUp.style.display == "none") {
		windowPopUp.style.display = "block";
	}
}
