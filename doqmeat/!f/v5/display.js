piclogWidth();
changeBackgroundColor();

// use: change body background color depending on the month!
function changeBackgroundColor() {
	let body = document.querySelector("body"); // target homepage body
	const myDate = new Date(); // create date object

	// switch background color depending on the month
	switch (myDate.getMonth()) {
		case 0: // jan
			body.style.backgroundColor = "rgb(229, 237, 229)";
			break;
		case 1: // february
			body.style.backgroundColor = "#ffeaf6";
			break;
		case 2: // march
			body.style.backgroundColor = "rgb(236, 245, 211)";
			break;
		case 3: // april
			body.style.backgroundColor = "rgb(228, 224, 251)";
			break;
		case 4: // may
			body.style.backgroundColor = "rgb(232, 243, 232)";
			break;
		case 5: // june
			body.style.backgroundColor = "#FFF5D3";
			break;
		case 6: // july
			body.style.backgroundColor = "#f9f0e6";
			break;
		case 7: // august
			body.style.backgroundColor = "rgb(249, 230, 230)";
			break;
		case 8: // sep
			body.style.backgroundColor = "rgb(226, 244, 244)";
			break;
		case 9: // oct
			body.style.backgroundColor = "rgb(251, 235, 205)";
			break;
		case 10: //nov
			body.style.backgroundColor = "rgb(253, 234, 250)";
			break;
		case 11: // dec
			body.style.backgroundColor = "#ebf2fb";
			break;
	}
}

// changes position and width of the element depending on the ratio of the img inside of it :p
function piclogWidth() {
	let piclog = document.getElementById("piclog");
	let image = document.querySelector("#piclog img");
	let tape = document.querySelector("#tape");
	if (image.naturalWidth > image.naturalHeight) {
		// if width is bigger than height
		tape.style.left = "30%";
		piclog.style.width = "300px";
		piclog.style.height = "295px";
	} else if (image.naturalWidth == image.naturalHeight) {
		// if its a 1:1 ratio
		piclog.style.width = "260px";
		piclog.style.height = "299px";
	} else {
		// if height is bigger than width
		piclog.style.width = "250px";
		piclog.style.height = "360px";
	}
}
