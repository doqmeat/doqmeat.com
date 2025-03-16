//    code from here: https://github.com/biancarosa/lastfm-last-played

let url = "https://lastfm-last-played.biancarosa.com.br/lakiitu/latest-song";
let song = document.querySelector("#song");
let album = document.querySelector("#album");
let songL = document.querySelector("#song-link");
let listeningP = document.querySelector("#listening");

// https://maxpixels.moe/resources/lastfm-widget/

fetch(url)
	.then(function (response) {
		return response.json();
	})
	.then(function (json) {
		let albumCover = json["track"]["image"][2]["#text"];
		let trackName = json["track"]["name"];
		let albumName = json["track"]["album"]["#text"];
		let artist = json["track"]["artist"]["#text"];
		let trackLink = json["track"]["url"];

		// insert thingies into HTML

		songL.href = trackLink;

		songL.title = "listen to " + trackName + " by " + artist + " on last.fm";

		// in case there's no album info
		if (!albumName) {
			album.innerHTML = "<span>album cover not available<br>(´•︵•`)</span>";
			albumName = "N/A";
		} else {
			album.innerHTML = '<img src="' + albumCover + '">';
		}

		song.innerHTML =
			'<span class="icons">🎵</span> ' +
			trackName +
			"<br>" +
			'<span class="icons">👤</span> ' +
			artist +
			'<br> <span class="icons">🖼️</span> ' +
			albumName;
	});
