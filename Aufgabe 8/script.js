var button0 = new Audio("assets/A.mp3");
var button1 = new Audio("assets/C.mp3");
var button2 = new Audio("assets/F.mp3");
var button3 = new Audio("assets/G.mp3");
var button4 = new Audio("assets/hihat.mp3");
var button5 = new Audio("assets/kick.mp3");
var button6 = new Audio("assets/laugh-1.mp3");
var button7 = new Audio("assets/laugh-2.mp3");
var button8 = new Audio("assets/snare.mp3");
function playSample(button) {
    button.play();
    recordBeat(button);
}
window.addEventListener("load", function () {
    document.querySelector(".button0").addEventListener("click", playSample.bind(null, button0));
});
window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("click", playSample.bind(null, button1));
});
window.addEventListener("load", function () {
    document.querySelector(".button2").addEventListener("click", playSample.bind(null, button2));
});
window.addEventListener("load", function () {
    document.querySelector(".button3").addEventListener("click", playSample.bind(null, button3));
});
window.addEventListener("load", function () {
    document.querySelector(".button4").addEventListener("click", playSample.bind(null, button4));
});
window.addEventListener("load", function () {
    document.querySelector(".button5").addEventListener("click", playSample.bind(null, button5));
});
window.addEventListener("load", function () {
    document.querySelector(".button6").addEventListener("click", playSample.bind(null, button6));
});
window.addEventListener("load", function () {
    document.querySelector(".button7").addEventListener("click", playSample.bind(null, button7));
});
window.addEventListener("load", function () {
    document.querySelector(".button8").addEventListener("click", playSample.bind(null, button8));
});
var startrecording = document.querySelector(".buttonrecord");
var deleterecording = document.querySelector(".buttondelete");
// Array für den Beat, + mit .push, - mit .splice
var beat = [button5, button8, button4];
var recording;
var playthebeat = document.querySelector(".buttonplay");
var stopthebeat = document.querySelector(".buttonstop");
var beatinterval;
var index;
function deleteBeat() {
    beat.splice(0, beat.length);
}
document.querySelector(".buttonrecord").addEventListener("click", function () {
    if (startrecording.classList.contains("currentlyrecording")) {
        startrecording.classList.remove("currentlyrecording");
        recording = false;
    }
    else {
        startrecording.classList.add("currentlyrecording");
        recording = true;
    }
});
document.querySelector(".buttondelete").addEventListener("click", function () {
    deleteBeat();
});
function recordBeat(button) {
    if (recording == true) {
        beat.push(button);
    }
}
document.querySelector(".buttonplay").addEventListener("click", function () {
    beatinterval = setInterval(function () {
        if (index < beat.length) {
            playSample(beat[index]);
            index++;
        }
        else {
            index = 0;
        }
    }, 500);
    if (playthebeat.classList.contains("inactive")) {
        playthebeat.classList.remove("inactive");
        stopthebeat.classList.add("inactive");
    }
    else {
        stopthebeat.classList.remove("inactive");
        playthebeat.classList.add("inactive");
    }
});
document.querySelector(".buttonstop").addEventListener("click", function () {
    clearInterval(beatinterval);
    if (playthebeat.classList.contains("inactive")) {
        playthebeat.classList.remove("inactive");
        stopthebeat.classList.add("inactive");
    }
    else {
        stopthebeat.classList.remove("inactive");
        playthebeat.classList.add("inactive");
    }
});
//# sourceMappingURL=script.js.map