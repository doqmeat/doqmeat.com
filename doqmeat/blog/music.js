// taken from this template https://www.tumblr.com/compassionately/688695677850714112/1999-neocities-layout-by-me-emotion-preview?source=share

let player = document.getElementById("music"); //the audio id
let btn = document.getElementById("music-btn"); //the button id
let isPlaying = false; //set to false because it is not playing yet

console.log(isPlaying);
console.log(!isPlaying);

function playpause() {
  if (isPlaying) {
    // if isPlaying == false... then do pause()
    pause();
  } else {
    play();
  } //if isPlaying == true, then do play() which plays the music
}

function play() {
  player.play(); //play the music
  isPlaying = true; //set to true because the music is playing
  btn.innerHTML = '<img src="/!g/pix/beat.gif">'; //change the git to play
}

function pause() {
  player.pause(); //pause the music
  isPlaying = false; //set to false because the music is not playing
  btn.innerHTML = '<img src="/!g/pix/beat-stop.png">'; //change img to beat stop
}

player.onended = function () {
  isPlaying = false; //the song has ended, isPlaying is false
  btn.innerHTML = '<img src="/!g/pix/beat-stop.png">'; //change the img to beat stop
};
