function playVideo() {
    var video = document.getElementById("new-video");
    video.muted = false;
    video.play();
}

function pauseVideo() {
    var video = document.getElementById("new-video");
    video.muted = true;
    video.pause();
}
