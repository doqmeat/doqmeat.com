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
	toggleComm('listing');
	var button = document.getElementById("default-button");
}

window.onload = defaultOpen();
