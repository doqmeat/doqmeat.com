//    code from here: https://github.com/biancarosa/lastfm-last-played
let user = 'lakiitu';
let url = 'https://lastfm-last-played.biancarosa.com.br/' + user + '/latest-song';
let song = document.querySelector('#song');
fetch(url)
	.then(function (response) {
		return response.json()
	}).then(function (json) {
		song.innerHTML = '<a href="' + json['track']['url'] + '">' + json['track']['name'] + '</a>' + ' by ' + json['track']['artist']['#text'];
	});
