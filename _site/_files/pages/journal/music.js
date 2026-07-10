const playlist = [
	{
		title: "fish in the pool - yeule",
		cover: "fish-in-the-pool.png",
		id: "xcWl8VlxGpA",
	},
	{
		title: "blind waltz - aseul",
		cover: "new-pop.png",
		id: "3PdXutKeaBA",
	},
	{
		title: "zweiton - c418",
		cover: "zweiton.png",
		id: "feYMk063DNU",
	},
	{
		title: "sleepless - c418",
		cover: "circle.png",
		id: "BxD6yVYX9bI",
	},
	{
		title: "ムーンサイドへようこそ (welcome to the moonside) - siinamota",
		cover: "moonside.png",
		id: "TXSu0K6iH5A",
	},
];

let currentIndex = 0;
let currentlyPlaying = false;
let player;
let title = document.getElementById("song-title");
let albumCover = document.createElement("img");
let link = document.createElement("a");
let playbtn = document.querySelector("button[onclick='playPause()']");

albumCover.setAttribute("width", "90px");
albumCover.setAttribute("height", "90px");

link.setAttribute("target", "_blank");
link.classList.add("no-arrow");
link.setAttribute("title", "view song on youtube!");

title.after(link);
link.append(albumCover);

function onYouTubeIframeAPIReady() {
	player = new YT.Player("player", {
		height: "0",
		width: "0",
		videoId: playlist[currentIndex].id,
		events: {
			onReady: updateTitle,
			onStateChange: onStateChange,
		},
	});
}

function playPause() {
	if (currentlyPlaying) {
		player.pauseVideo();
		currentlyPlaying = false;
		playbtn.innerText = "▶";
	} else {
		player.playVideo();
		currentlyPlaying = true;
		playbtn.innerText = "❚❚";
	}
}

function prevSong() {
	currentIndex = (currentIndex - 1) % playlist.length;
	loadSong(currentIndex);
}

function nextSong() {
	currentIndex = (currentIndex + 1) % playlist.length;
	loadSong(currentIndex);
}

function loadSong(i) {
	currentIndex = i;
	currentlyPlaying = true;
	playbtn.innerText = "❚❚";
	player.loadVideoById(playlist[currentIndex].id);
	updateTitle();
}

function updateTitle() {
	title.textContent = playlist[currentIndex].title;
	albumCover.setAttribute(
		"src",
		"/_files/pages/journal/assets/music/" + playlist[currentIndex].cover,
	);
	albumCover.setAttribute("alt", playlist[currentIndex].title + " album cover");
	link.setAttribute(
		"href",
		"https://www.youtube.com/watch?v=" + playlist[currentIndex].id,
	);
}

function onStateChange(event) {
	if (event.data === 0) {
		nextSong();
	}
}
