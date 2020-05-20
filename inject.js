var videos = document.getElementsByTagName('video');

Array.from(videos).forEach((video) => {
    if (video.paused) {
        video.play();
    }
    else {
	    console.log('video is already playing');
    }
});