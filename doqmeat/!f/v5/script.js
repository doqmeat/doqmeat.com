// changes position and width of the element depending on the ratio of the img inside of it :p
function piclogWidth() {
	let piclog = document.getElementById("piclog");
	let image = document.querySelector("#piclog img");
	let tape = document.querySelector("#tape");
	if (image.naturalWidth > image.naturalHeight) {
		// if width is bigger than height
		tape.style.left = "30%";
		piclog.style.width = "300px";
		piclog.style.height = "295px";
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

// checks for piclog width on page load
piclogWidth();

// the different sections of the notepad
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
	box.style.display = "block";
	event.currentTarget.className += " active";
}

// clicks the default tab on the notepad
document.getElementById("default").click();

// when clicking the 'chatbox' tab, this popup will appear asking you if you agree with the rules
function chatPopup(choice = "none") {
	let agree = localStorage.getItem("messageAgree"); // so it doesn't ask you every time
	let chatbox = document.getElementById("chatbox-frame");
	let dialogBox = document.querySelector("dialog");
	// the pop up will display if the localstorage is false or null
	if (agree === "false" || agree === null) {
		chatbox.style.display = "none";
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
		}
	} else {
		// the popup won't appear and you'll get access to the chat
		chatbox.style.display = "block";
	}
}
