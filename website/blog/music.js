let player = document.getElementById("music"); //the audio id
	let btn = document.getElementById("btn"); //the button id
	isPlaying = false; //set to false because it is not playing yet

	function playpause() {
		if (!isPlaying) play(); //if isPlaying is false, then play the music
		else pause(); //if isPlaying is true, then pause the music
	}

	function play() {
		player.play(); //play the music
		isPlaying = true; //set to true because the music is playing
		btn.innerHTML = "pause"; //change the button to say pause
	}

	function pause() {
		player.pause(); //pause the music
		isPlaying = false; //set to false because the music is not playing
		btn.innerHTML = "play"; //change the button to say play
	}

	player.onended = function() {
		isPlaying = false; //the song has ended, isPlaying is false
		btn.innerHTML = "play"; //change the button to say play
	}