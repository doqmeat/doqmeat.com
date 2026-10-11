/*
last edited: 16.jan.26
*/

const sections = document.querySelectorAll("#blog section"); // gets all year sections
const url = document.getElementById("address");

const date = new Date(); // get date
let current_year = date.getFullYear(); // gets current year!

// shows selection of years
function goHome() {
	let home = document.getElementById("home");
	for (i = 0; i < sections.length; i++) {
		sections[i].style.display = "none";
	}
	home.style.display = "block";
	url.textContent = "https://doqmeat.com/microblog/menu";
}

// input: year!!
// shows current year articles
function goToYear(year) {
	let yearSelected = "y" + year; // i will not be blogging at 2100 i can assure you that
	let yearSection = document.getElementById(yearSelected); // get year section
	for (i = 0; i < sections.length; i++) {
		// loops the different year sections
		sections[i].style.display = "none"; // hides them
	}
	yearSection.style.display = "block"; // shows
	url.textContent = "https://doqmeat.com/microblog/" + year;
}

goToYear(current_year); // loads the page on the current year

// shows the total of logs i've made
function totalLog(year) {
	let articles = "#y" + year + " article";
	let articlesSelected = document.querySelectorAll(articles);
	let currentSpan = "logs" + year;
	let currentSpanSelected = document.getElementById(currentSpan);
	currentSpanSelected.innerText = "total logs: " + articlesSelected.length;
}

// i will eventually find a way of how to loop this? so i don't have to write the same code over and over again... every year??
// edit: i did it!!!!

for (let i = 2024; i <= current_year; i++) {
	i = i.toString(); // converts i to string
	totalLog(i); // calls function
}
