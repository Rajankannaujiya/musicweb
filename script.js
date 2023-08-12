console.log("welcome to Mymusic");

// initialising the variable
// let songindex = 0;
let audioElement = new Audio('song/0.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('Myprogressbar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let song = [
    { songname: "let me love you", filePath: "song/0.mp3", coverPath: "image1/th...jpeg" },
    { songname: "tum hi ho", filePath: "song/1.mp3", coverPath: "image1/cover.jpeg" },
    { songname: "baaton ko teri", filePath: "song/4.mp3", coverPath: "image1/cover2.jpeg" },
    { songname: "Sawan Aaya hai", filePath: "song/3.mp3", coverPath: "image1/cover2.jpeg" },
    { songname: "jiya", filePath: "song/2.mp3", coverPath: "image1/cover3.jpeg" },
    { songname: "let me love you", filePath: "song/5.mp3", coverPath: "image1/cover2.jpeg" },
    { songname: "let me love you", filePath: "song/6.mp3", coverPath: "image1/cover2.jpeg" },
    { songname: "let me love you", filePath: "song/7.mp3", coverPath: "image1/cover.jpeg" },
]
songitem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = song[i].songname;
})
// audioElement.play();
// handle play pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});
// listen to events
audioElement.addEventListener('timeupdate', () => {
    // update seeking
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
});
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = (myprogressbar.value * audioElement.duration) / 100;
});
const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songindex}.mp3`;
        // masterSongname.innerText = song[songindex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    });
});
// Document.getElementById('next')
document.getElementById('next').addEventListener('click', () => {
    if (songindex > 7) {
        songindex = 0;
    }
    else {
        songindex = songindex + 1;
    }
    audioElement.src = `song/${songindex}.mp3`;
    // masterSongname.innerText = song[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex = songindex - 1;
    }
    audioElement.src = `song/${songindex}.mp3`;
    // masterSongname.innerText = song[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})