// use: change body background color depending on the month!
function changeBackgroundColor() {
	let body = document.querySelector("body"); // target homepage body
	const myDate = new Date(); // create date object

	// switch background color depending on the month
	switch (myDate.getMonth()) {
		case 0: // jan
			body.style.backgroundColor = "rgb(229, 237, 229)";
			break;
		case 1: // february
			body.style.backgroundColor = "#ffeaf6";
			break;
		case 2: // march
			body.style.backgroundColor = "rgb(236, 245, 211)";
			break;
		case 3: // april
			body.style.backgroundColor = "rgb(228, 224, 251)";
			break;
		case 4: // may
			body.style.backgroundColor = "rgb(232, 243, 232)";
			break;
		case 5: // june
			body.style.backgroundColor = "#FFF5D3";
			break;
		case 6: // july
			body.style.backgroundColor = "#f9f0e6";
			break;
		case 7: // august
			body.style.backgroundColor = "rgb(249, 230, 230)";
			break;
		case 8: // sep
			body.style.backgroundColor = "rgb(226, 244, 244)";
			break;
		case 9: // oct
			body.style.backgroundColor = "rgb(251, 235, 205)";
			break;
		case 10: //nov
			body.style.backgroundColor = "rgb(253, 234, 250)";
			break;
		case 11: // dec
			body.style.backgroundColor = "#ebf2fb";
			break;
	}
}

// changes position and width of the element depending on the ratio of the img inside of it :p
function piclogWidth() {
	let piclog = document.getElementById("piclog");
	let image = document.querySelector("#piclog img");
	let tape = document.querySelector("#tape");
	if (image.naturalWidth > image.naturalHeight) {
		// if width is bigger than height
		tape.style.left = "30%";
		piclog.style.width = "300px";
		piclog.style.height = "auto";
	} else if (image.naturalWidth == image.naturalHeight) {
		// if its a 1:1 ratio
		piclog.style.width = "260px";
		piclog.style.height = "299px";
	} else {
		// if height is bigger than width
		piclog.style.width = "250px";
		piclog.style.height = "360px";
	}
}

// use: displays the different sections of the notepad
function showBox(boxID) {
	let box = document.getElementById(boxID);
	let allBoxes = document.getElementsByClassName("notepad-boxes");
	let tabs = document.querySelectorAll("#tabs button");
	let i;

	for (i = 0; i < allBoxes.length; i++) {
		allBoxes[i].style.display = "none";
	}

	for (i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove("active");
	}

	for (i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("click", function () {
			// can't use arrow functions here bc of the this
			this.classList.add("active");
		});
	}

	box.style.display = "block";
}
// hides the notice that tells you to turn on JS
document.getElementById("notepad-notice").style.display = "none";
// clicks the default tab on the notepad by default on load
document.getElementById("default").click();
// and activates active class
document.getElementById("default").classList.add("active");

// use: when clicking the 'chatbox' tab, this popup will appear asking you if you agree with the rules
function chatPopup(choice = "none") {
	let agree = localStorage.getItem("messageAgree"); // so it doesn't ask you every time
	let chatbox = document.getElementById("chatbox-frame");
	let dialogBox = document.querySelector("dialog");
	// the pop up will display if the localstorage is false or null
	if (agree === "false" || agree === null) {
		chatbox.style.display = "none";
		// i LOVE switch statements
		switch (choice) {
			case "none":
				dialogBox.showModal();
				break;
			case "okay":
				dialogBox.close();
				chatbox.style.display = "block";
				localStorage.setItem("messageAgree", true);
				break;
			case "nope":
				localStorage.setItem("messageAgree", false);
				window.location.replace("/collection/cats/!g/sideeye.jpg");
				break;
			case "close":
				dialogBox.close();
				localStorage.setItem("messageAgree", false);
				break;
		}
	} else {
		// the popup won't appear and you'll get access to the chat
		chatbox.style.display = "block";
	}
}

document.addEventListener("DOMContentLoaded", () => {
	piclogWidth();
	changeBackgroundColor();
});
