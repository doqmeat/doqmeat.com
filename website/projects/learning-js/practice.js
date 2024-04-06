const button1 = document.querySelector("#button1");

const pa1 = document.querySelector("#pa1");

const cats = [

	{
		"p text": 'meow :3 <br> <img src="/collection/cats/!g/icecat.jpg">',
		"button text": "stop it",
		"button function": stopMeow
	},

	{
		"p text": 'okay...... <br> <img src="/collection/cats/!g/gulpcat.gif">',
		"button text": "wait do it again",
		"button function": reallyMeow
	},

	{
		"p text": 'really? <br> <img src="/collection/cats/!g/surprised.jpg">',
		"button text": "yes",
		"button function": startMeow
	}

]

button1.onclick = startMeow;


function update(cats) {
	pa1.innerHTML = cats['p text'];
	button1.innerText = cats['button text'];
	button1.onclick = cats['button function'];
}

function startMeow() {
	update(cats[0]);
}

function stopMeow() {
	update(cats[1]);
}

function reallyMeow() {
	update(cats[2])
}
