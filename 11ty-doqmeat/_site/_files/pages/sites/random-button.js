// go to a random button

function randomSite() {
	const buttons = document.querySelectorAll("div.main a");
	let randomNum = Math.floor(Math.random() * buttons.length);
	let randomSite = buttons[randomNum];
	if (confirm("the random site you're about to visit is... " + randomSite.host))
		window.location = randomSite.attributes.href.textContent;
}
