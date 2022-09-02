document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#speed-up').onclick = speedUp;
document.querySelector('#speed-down').onclick = speedDown;
document.querySelector('#speed-normal').onclick = speedNormal;
document.querySelector('#volume').oninput = videoVolume;

let video;
let display;

video = document.querySelector('#video_player')

function play() {
	video.play()
}
function pause() {
	video.pause()
}
function stop() {
	video.pause()
	video.currentTime = 0
}
function speedUp() {
	video.play();
	video.playbackRate = 3
}
function speedDown() {
	video.play();
	video.playbackRate = 0.5
}
function speedNormal() {
	video.play();
	video.playbackRate = 1
}
function videoVolume() {
	let val = this.value;
	video.volume = val / 100
}