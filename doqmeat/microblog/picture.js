let pic = document.getElementById("picture");
let picDiv = document.getElementById("picture-win");
let picTitle = document.getElementById("picture-title");
let picCaption = document.getElementById("picture-caption");
let link = document.getElementById("pic-link");

function showPic(img, text, caption) {
	link.href = img;
	pic.src = img;
	pic.alt = text;
	picTitle.innerText = img;
	picCaption.innerText = caption;
	picDiv.style.display = "block";
}

function toggleclick(window) {
	let folderIcon = document.querySelector("#folder img");
	let popup = document.getElementById(window);
	if (popup.style.display === "block") {
		popup.style.display = "none";
		if (window == "notes") {
			folderIcon.src = "folder-closed.png";
		}
	} else {
		popup.style.display = "block";
		if (window == "notes") {
			folderIcon.src = "folder-opened.png";
		}
	}
}

function toggleNote(noteName) {
	let fileName = document.querySelector("#notepad small");
	fileName.innerText = noteName + ".txt";
	let notepad = document.getElementById("notepad");
	notepad.style.display = "block"; // opens notepad div
	let selectedNote = document.getElementById(noteName);
	let notes = document.getElementsByClassName("notes");
	for (let i = 0; i < notes.length; i++) {
		// hides all other notes
		notes[i].style.display = "none";
	}
	selectedNote.style.display = "block"; // shows selected note
}
