//code taken from this site! https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript//

let fontImg = document.getElementById("font-btn");
var sheet = document.getElementsByClassName("theme")[0];
console.log(fontImg);

function toggleTheme(theme = localStorage.getItem("themeBlog")) {
	if (theme == "/_files/pages/blog/light.css") {
		sheet.setAttribute("href", "/_files/pages/blog/dark.css");
		fontImg.src = "/_files/pages/blog/assets/font-dark.png";
		localStorage.setItem("themeBlog", "/_files/pages/blog/dark.css");
	} else {
		sheet.setAttribute("href", "/_files/pages/blog/light.css");
		fontImg.src = "/_files/pages/blog/assets/font-light.png";
		localStorage.setItem("themeBlog", "/_files/pages/blog/light.css");
	}
}

function checkTheme() {
	let sheet = document.getElementsByClassName("theme")[0];
	let localTheme = localStorage.getItem("themeBlog");
	if (!localTheme) {
		sheet.setAttribute("href", "/_files/pages/blog/light.css");
	} else {
		sheet.setAttribute("href", localTheme);
		if (localTheme == "/_files/pages/blog/dark.css")
			fontImg.src = "/_files/pages/blog/assets/font-dark.png";
	}
}

checkTheme();
