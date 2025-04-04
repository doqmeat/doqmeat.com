// changes position and width depending on the ratio of the img inside of it :p
function piclogWidth() {
	let piclog = document.getElementById("piclog");
	let image = document.querySelector("#piclog img");
	let tape = document.querySelector("#tape");
	if (image.naturalWidth > image.naturalHeight) {
		tape.style.left = "30%";
		piclog.style.width = "300px";
		piclog.style.height = "295px";
	} else if (image.naturalWidth == image.naturalHeight) {
		piclog.style.width = "260px";
		piclog.style.height = "299px";
	} else {
		piclog.style.width = "250px";
		piclog.style.height = "360px";
	}
}

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

function chatPopup() {
	let messageRead = localStorage.getItem("messageRead");
	if (messageRead === "false" || messageRead == null) {
		if (
			confirm(
				"rules:\n\n\t1) spam and rude messages get deleted (ˉ▽ˉ；)...\n\n\t2) for any serious inquiries, send via e-mail\n\n\t3) thank you all for the nice messages (o゜▽゜)o☆ have fun!\n\npress 'OK' to agree with the rules."
			)
		) {
			localStorage.setItem("messageRead", true);
		} else {
			window.location.replace("/collection/cats/!g/sideeye.jpg");
			localStorage.setItem("messageRead", false);
		}
	}
	console.log(messageRead);
}

piclogWidth();
document.getElementById("default").click();
