//code taken from this site! https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript//

let fontImg = document.getElementById("font-btn");
var sheet = document.getElementsByClassName("theme")[0];
console.log(fontImg);

function toggleTheme(theme = localStorage.getItem("themeBlog")) {
	if (theme == "/blog/light.css") {
		sheet.setAttribute("href", "/blog/dark.css");
		fontImg.src = "/blog/font-dark.png";
		localStorage.setItem("themeBlog", "/blog/dark.css");
	} else {
		sheet.setAttribute("href", "/blog/light.css");
		fontImg.src = "/blog/font-light.png";
		localStorage.setItem("themeBlog", "/blog/light.css");
	}
}

function checkTheme() {
	let sheet = document.getElementsByClassName("theme")[0];
	let localTheme = localStorage.getItem("themeBlog");
	if (!localTheme) {
		sheet.setAttribute("href", "/blog/light.css");
	} else {
		sheet.setAttribute("href", localTheme);
		if (localTheme == "/blog/dark.css") fontImg.src = "/blog/font-dark.png";
	}
}

checkTheme();
