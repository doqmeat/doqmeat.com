// go to a random button
const buttons = document.querySelectorAll("#button-wall a");
let randomNum, randomSiteLink;
function randomSite() {
	randomNum = Math.floor(Math.random() * buttons.length);
	randomSiteLink = buttons[randomNum];
	if (
		confirm(
			"the random site you're about to visit is... " + randomSiteLink.host,
		)
	)
		window.location = randomSiteLink.attributes.href.textContent;
}
