let boxes = document.getElementsByClassName("box");
let popUp = document.getElementById("pop-up");
let altCaption = document.getElementById("popCap");
let picture = document.querySelector("#pop-up #pic");
let container = document.querySelector("body");
let captions = document.getElementsByClassName("captions");
let buttons = document.querySelectorAll("#sidebar button");
let i;

// adds a listener for when a button is clicked that adds the active class. yay
for (i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function () {
		this.classList.add("active");
	});
}

for (i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener("click", function () {
		// get img link
		picture.src = this.src;
		picture.alt = this.alt;
		// captions
		altCaption.innerText = this.alt;
		container.style.overflow = "hidden";
		popUp.style.display = "block";
		// img width
		if (this.naturalWidth < 500) {
			picture.style.maxWidth = "100%";
		} else if (this.naturalWidth > this.naturalHeight) {
			picture.style.width = "70%";
		} else {
			picture.style.width = "50%";
		}
		if (this.id) {
			let postCap = document.getElementById(this.id + "-caption");
			altCaption.innerHTML = postCap.innerHTML; // injects the div under the pic
		}
	});
}

function showCat(className) {
	let classBox = document.getElementsByClassName(className);
	for (i = 0; i < buttons.length; i++) {
		// removes any prior active button
		buttons[i].classList.remove("active");
	}

	for (i = 0; i < boxes.length; i++) {
		boxes[i].style.display = "none";
	}
	for (i = 0; i < classBox.length; i++) {
		classBox[i].style.display = "inline-block";
	}
}

document.getElementById("default").click();

function closePopUp() {
	container.style.overflow = "auto";
	popUp.style.display = "none";
}
