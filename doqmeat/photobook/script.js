// header fujifilm button function
function showFujifilm() {
	let picDiv = document.getElementById("cam-pics");
	let btn = document.getElementById("cam-button");
	if (picDiv.style.display == "block") {
		picDiv.style.display = "none";
		btn.title = "click to show cam!";
	} else {
		picDiv.style.display = "block";
		btn.title = "click to hide cam!";
	}
}

// filters

function showPics(tag) {
	let stringTag = "div." + tag;
	let allPics = document.querySelectorAll("div.pic");
	let selectedPics = document.querySelectorAll(stringTag);

	for (i = 0; i < allPics.length; i++) {
		allPics[i].style.display = "none";
	}
	for (i = 0; i < selectedPics.length; i++) {
		selectedPics[i].style.display = "block";
	}
}
