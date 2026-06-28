// school of fish
const school = document.querySelectorAll("fish");
const fishLeft = school[0];
const fishRight = school[1];

const dialogBox = document.querySelector("dialog#kiss");

let closeModal = (modal) => {
	let modalSelect = "dialog#" + modal;
	document.querySelector(modalSelect).close();
};

// edgar says fish love on load
let fishloveMP3 = new Audio("assets/fish-love.mp3");
fishloveMP3.volume = 0.5;
fishloveMP3.play();

// checks if the fish are kissing, returns true if so
function checkKiss() {
	let fish1Area = fishLeft.offsetLeft + fishLeft.offsetWidth;
	let fishX = fish1Area - fishRight.offsetLeft;
	let fishY = Math.abs(fishLeft.offsetTop - fishRight.offsetTop);
	return fishX >= 0 && fishX <= 10 && fishY >= 0 && fishY <= 5;
}

// if fish love is found
let kissMP3 = new Audio("assets/kiss.mp3");
let cheersMP3 = new Audio("assets/cheers.mp3");

function fishLove() {
	kissMP3.volume = 0.5;
	kissMP3.play();
	// waits 1 sec (1000 ms) for the cheers to play
	setTimeout(() => {
		cheersMP3.volume = 0.5;
		cheersMP3.play();
	}, 1000);
}

// for moving the fish
function startDrag(evt) {
	let diffX = evt.clientX - this.offsetLeft;
	let diffY = evt.clientY - this.offsetTop;
	const that = this; // reference to current "this"

	// moves the fish
	let loveFound = false; // necessary
	function moveAlong(evt) {
		// updates fish
		that.style.left = evt.clientX - diffX + "px";
		that.style.top = evt.clientY - diffY + "px";
		// checks on every move if fish are on the kissing radius
		if (checkKiss() && !loveFound) {
			fishLove();
			loveFound = true;
		}
	}

	// what happens when you move the mouse
	document.addEventListener("mousemove", moveAlong);

	// stops moving the fish
	function stopDrag() {
		document.removeEventListener("mousemove", moveAlong);
		document.removeEventListener("mouseup", stopDrag);
		if (loveFound) {
			dialogBox.showModal();
			dialogBox.addEventListener("click", () => closeModal("kiss"));
		}
	}

	// tells the doc to stop dragging when you stop pressing the mouse button
	document.addEventListener("mouseup", stopDrag);
}

// adds to the event listener to every fish
for (var i = 0; i < school.length; i++) {
	school[i].addEventListener("mousedown", startDrag);
}
