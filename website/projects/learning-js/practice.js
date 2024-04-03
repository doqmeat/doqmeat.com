const button1 = document.querySelector("#button1");

const pa1 = document.querySelector("#pa1");

button1.onclick = changePa1;

function changePa1() {
	pa1.innerText = "meow :3";

	button1.innerText = "meow!!!!!";

	button1.onclick = revertPa1;
}

function revertPa1() {
	pa1.innerText = "okay i'm normal";

	button1.innerHTML = "meow again?";

	button1.onclick = changePa1;
}
