const urlParams = new URLSearchParams(window.location.search);
const charParam = urlParams.get('karakter');


const json_data = { /* Karakter információji*/
    
    
    
 
   
    

    
    
    
   
    
   
    
    
    
    
    
    
    

    
}
    
function updateHTML(data) {
    document.getElementById("storyszoveg").innerHTML = data.story;
    document.getElementById("lane").innerHTML = data.lane;
    document.getElementById("role").innerHTML = data.role;
    document.getElementById("badmatchup1").innerHTML = data.badmatchup1;
    document.getElementById("badmatchup2").innerHTML = data.badmatchup2;
    document.getElementById("badmatchup3").innerHTML = data.badmatchup3;
    document.getElementById("goodmatchup1").innerHTML = data.goodmatchup1;
    document.getElementById("goodmatchup2").innerHTML = data.goodmatchup2;
    document.getElementById("goodmatchup3").innerHTML = data.goodmatchup3;
    document.getElementById("title").innerHTML = data.title;

    document.getElementById("video0").src = data.video0;
    document.getElementById("video1").src = data.video1;
    document.getElementById("video2").src = data.video2;
    document.getElementById("video3").src = data.video3;
    document.getElementById("video4").src = data.video4;

    


    const backgroundElement = document.getElementById("background");
    backgroundElement.src = data.background;
    backgroundElement.alt = data.title;
    
    const passiveElement = document.getElementById("passiveimage");
    passiveElement.src = data.passiveimage;

    const QElement = document.getElementById("Qimage");
    QElement.src = data.Qimage;

    const WElement = document.getElementById("Wimage");
    WElement.src = data.Wimage;

    const EElement = document.getElementById("Eimage");
    EElement.src = data.Eimage;

    const RElement = document.getElementById("Rimage");
    RElement.src = data.Rimage;
}

document.addEventListener('DOMContentLoaded', function () {
    fetch(`./characters/${charParam}.json`)
        .then(response => response.json())
        .then(data => {
            // Use the data from the JSON file here
            console.log(data);

            // Call the updateHTML function with the retrieved data
            updateHTML(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    for (let i = 0; i < 5; i++) {
        const videoId = "video" + i;
        const imageId = "image" + i;

        const imageElement = document.getElementById(imageId);
        if (imageElement) {
            imageElement.addEventListener("click", function () {
                playVideo(videoId);
            });
        }
    }
});

var video = document.getElementById("video1");
video.addEventListener("click", function () {
    video.play();
}
);


function isVideoSourceSupported(src) {
    const video = document.createElement('video');
    return video.canPlayType && video.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, '');
}

function playVideo(videoId) {
    for (let i = 0; i < 5; i++) {
        const currentVideoId = "video" + i;
        const videoElement = document.getElementById(currentVideoId);

        if (videoElement) {
            if (currentVideoId === videoId) {
                if (isVideoSourceSupported(videoElement.src)) {
                    videoElement.style.display = 'block';
                    videoElement.play();
                } else {
                    console.error('Video source is not supported');
                }
            } else {
                videoElement.style.display = 'none';
                videoElement.pause();
            }
        }
    }
}
