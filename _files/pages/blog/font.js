// selects the :root
const root = document.documentElement;
const body = document.querySelector("body");

function switchFont(font = localStorage.getItem("fontSwitchBlog")) {
	// declare variable for selected font
	console.log(localStorage.getItem("fontSwitchBlog"));
	switch (font) {
		case "basiic":
			root.style.setProperty("--fonts", "arial");
			body.style.setProperty("font-size", "16px");
			localStorage.setItem("fontSwitchBlog", "arial");
			break;
		case "arial":
			root.style.setProperty("--fonts", "basiic");
			body.style.setProperty("font-size", "18px");
			localStorage.setItem("fontSwitchBlog", "basiic");
			break;
	}
	// saves the font that was selected
}

function loadFont() {
	let fontSaved = localStorage.getItem("fontSwitchBlog");

	// if there's no font saved, it saves the default
	if (!fontSaved) localStorage.setItem("fontSwitchBlog", "basiic");
	// else, it gets set to the font saved in local storage
	else {
		root.style.setProperty("--fonts", fontSaved);
		if (fontSaved == "arial") body.style.setProperty("font-size", "16px");
	}
}

// loads the saved font on reload
loadFont();
