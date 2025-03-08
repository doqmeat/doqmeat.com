let pic = document.getElementById("picture");
let picDiv = document.getElementById("picture-win");
let picTitle = document.getElementById("picture-title");
let picCaption = document.getElementById("picture-caption");
let link = document.getElementById("pic-link");

function showPic(img, text, caption) {
	link.href = img;
	pic.src = img;
	pic.alt = text;
	picTitle.innerText = img;
	picCaption.innerText = caption;
	picDiv.style.display = "block";
}

function toggleclick(window) {
	let popup = document.getElementById(window);
	if (popup.style.display === "block") {
		popup.style.display = "none";
	} else {
		popup.style.display = "block";
	}
}
