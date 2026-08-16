// code from here: https://github.com/biancarosa/lastfm-last-played

let url = "https://lastfm-last-played.biancarosa.com.br/lakiitu/latest-song";
const content = document.querySelector("#lastfm-content");
const heading = document.querySelector("h2#lastfm");
const p = document.querySelector("p#lastfm-p");

let songName = document.createElement("span");
let artistName = document.createElement("span");
let albumName = document.createElement("span");
let albumContent = document.createElement("div");
albumContent.setAttribute("class", "album-content");
let infoContent = document.createElement("div");
infoContent.setAttribute("class", "info-content");
let albumImg = document.createElement("img");
albumImg.setAttribute("class", "album-cover");
let linkP = document.createElement("span");
let link = document.createElement("a");

console.log("hai");

// https://maxpixels.moe/resources/lastfm-widget/ or more info and reference

fetch(url)
	.then(function (response) {
		return response.json();
	})
	.then(function (json) {
		let isPlaying = json["track"]["@attr"]?.nowplaying || false;
		if (isPlaying) {
			heading.textContent = "currently listening to...";
		}
		let albumCover = json["track"]["image"][3]["#text"];
		let track = json["track"]["name"];
		let album = json["track"]["album"]["#text"];
		let artist = json["track"]["artist"]["#text"];
		let trackLink = json["track"]["url"];
		content.textContent = "";

		// in case there's no album info
		albumName.textContent = "🖼️ ";
		if (!album) {
			albumContent.innerHTML =
				"<span>album cover not available<br>(´•︵•`)</span>";
			albumName.textContent += "N/A";
		} else {
			albumName.textContent += album;
			albumImg.setAttribute("src", albumCover);
			albumImg.setAttribute("alt", `${album} album cover`);
			albumContent.append(albumImg);
		}

		// track
		songName.textContent = "🎵 " + track;
		infoContent.append(songName);

		// artist
		artistName.textContent = "👤 " + artist;
		infoContent.append(artistName);

		// album title
		infoContent.append(albumName);

		// lastfm link
		link.setAttribute("href", trackLink);
		link.textContent = `listen on lastFM`;
		linkP.append("📻 ");
		linkP.append(link);
		infoContent.append(linkP);

		// add the final 2 blocks
		content.append(infoContent);
		content.append(albumContent);
	});
