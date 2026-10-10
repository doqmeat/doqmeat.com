// school of fish
const school = document.querySelectorAll("fish");
const kissCounterSpan = document.querySelector("p.fish-kiss span");
const fishLeft = school[0];
const fishRight = school[1];
let kissCounter = 0;

let loveFound = false; // necessary
const dialogBox = document.querySelector("dialog#kiss");

let closeModal = (modal) => {
	let modalSelect = "dialog#" + modal;
	document.querySelector(modalSelect).close();
};

// edgar says fish love on load
let fishloveMP3 = new Audio("/_files/pages/fish-love/assets/fish-love.mp3");
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
let kissMP3 = new Audio("/_files/pages/fish-love/assets/kiss.mp3");
let cheersMP3 = new Audio("/_files/pages/fish-love/assets/cheers.mp3");

function fishLove() {
	kissMP3.volume = 0.5;
	kissMP3.play();
	// waits 1 sec (1000 ms) for the cheers to play
	setTimeout(() => {
		cheersMP3.volume = 0.5;
		cheersMP3.play();
	}, 1000);
	kissCounterSpan.textContent = ++kissCounter;
}

// for moving the fish
function startDrag(evt) {
	let diffX = evt.clientX - this.offsetLeft;
	let diffY = evt.clientY - this.offsetTop;
	const that = this; // reference to current "this"

	// moves the fish
	function moveAlong(evt) {
		// updates fish
		that.style.left = evt.clientX - diffX + "px";
		that.style.top = evt.clientY - diffY + "px";
		// checks on every move if fish are on the kissing radius
		console.log(checkKiss());
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
			loveFound = false;
			dialogBox.showModal();
			// resets the fish
			fishLeft.style.top = "270px";
			fishLeft.style.left = "20px";
			fishRight.style.top = "270px";
			fishRight.style.right = "20px";
			fishRight.style.left = "unset";
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
