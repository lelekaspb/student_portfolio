window.addEventListener("load", start);

let videoScr = document.querySelector("#videoSrc");
let playBtn = document.querySelector("#playBtn");
let stopBtn = document.querySelector("#stopBtn");
let slowerBtn = document.querySelector("#slowerBtn");
let fasterBtn = document.querySelector("#fasterBtn");
let speedRate = document.querySelector("#speed_rate");

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
    speedRate.textContent = videoScr.playbackRate + "x";
    playBtn.style.backgroundImage = "url(assets/svg/pause.svg)";
    // playBtn.parentElement.title = "pause";
    console.log(videoScr.paused);
    videoScr.addEventListener("ended", stopVideo);
  } else {
    videoScr.pause();
    playBtn.style.backgroundImage = "url(assets/svg/play.svg)";
    // playBtn.parentElement.title = "play";
    showSpeed();
  }
  
}

function stopVideo() {
  console.log("stopVideo");
  videoScr.pause();
  videoScr.currentTime = 0;
  playBtn.style.backgroundImage = "url(assets/svg/play.svg)";
  // playBtn.parentElement.title = "play";
  videoScr.load();
  showSpeed();
}

function slowDownVideo() {
  console.log("slowDownVideo");
  if (videoScr.playbackRate >= 0.25) {
      videoScr.playbackRate -= 0.25;
  }
  console.log(videoScr.playbackRate);
  showSpeed();
}

function speedUpVideo() {
  console.log("speedUpVideo");
  videoScr.playbackRate += 0.25;
  console.log(videoScr.playbackRate);
  showSpeed();
}

function showSpeed() {
  if (videoScr.currentTime == 0) {
    speedRate.textContent = "";
  } else {
    speedRate.textContent = videoScr.playbackRate + "x";
  }
}