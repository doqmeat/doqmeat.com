function toggleComm(box) {
	var clickBox = document.getElementById(box);
	var others = document.getElementsByClassName("comm-box");
	var i = 0;
	for (i; i < others.length; i++) {
		others[i].style.display = "none";
	}
	clickBox.style.display = "block";
}

function defaultOpen() {
	toggleComm('webring');
	var button = document.getElementById("default-button");
	button.focus();
}

window.onload = defaultOpen();