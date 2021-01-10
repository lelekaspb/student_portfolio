window.addEventListener("load", start);

let videoScr = document.querySelector("#videoSrc");
let playBtn = document.querySelector("#playBtn");
let stopBtn = document.querySelector("#stopBtn");
let slowerBtn = document.querySelector("#slowerBtn");
let fasterBtn = document.querySelector("#fasterBtn");

function start() {
  playBtn.addEventListener("click", playVideo);
  stopBtn.addEventListener("click", stopVideo);
  slowerBtn.addEventListener("click", slowDownVideo);
  fasterBtn.addEventListener("click", speedUpVideo);
}

function playVideo() {
  console.log("playVideo");
  if (videoScr.paused == true) {
    videoScr.play();
    playBtn.style.backgroundImage = "url(assets/svg/pause.svg)";
    // playBtn.parentElement.title = "pause";
    console.log(videoScr.paused);
    videoScr.addEventListener("ended", stopVideo);
  } else {
    videoScr.pause();
    playBtn.style.backgroundImage = "url(assets/svg/play.svg)";
    // playBtn.parentElement.title = "play";
  }
}

function stopVideo() {
  console.log("stopVideo");
  videoScr.pause();
  videoScr.currentTime = 0;
  playBtn.style.backgroundImage = "url(assets/svg/play.svg)";
  // playBtn.parentElement.title = "play";
  videoScr.load();
}

function slowDownVideo() {
  console.log("slowDownVideo");
  if (videoScr.playbackRate >= 0.25) {
      videoScr.playbackRate -= 0.25;
  }
  console.log(videoScr.playbackRate);
}

function speedUpVideo() {
  console.log("speedUpVideo");
  videoScr.playbackRate += 0.25;
  console.log(videoScr.playbackRate);
}