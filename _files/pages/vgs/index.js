const popUp = document.getElementById("gaming-socials");
const gamelogs = document.querySelectorAll(".wrapper-vgs a");

// filters for the game log
function toggleGames(className) {
	gamelogs.forEach((game) => {
		game.style.display = "block";
	});
	if (className === "all") return; // get oute here!
	gamelogs.forEach((game) => {
		// if the name doesnt appear on the classlist
		if (!game.classList.contains(className))
			// then hide it!
			game.style.display = "none";
	});
}

// pop up for the modal
function togglePopUp() {
	if (popUp.open) {
		popUp.close();
	} else {
		popUp.showModal();
	}
}
