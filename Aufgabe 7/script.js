var button0 = new Audio('assets/A.mp3');
var button1 = new Audio('assets/C.mp3');
var button2 = new Audio('assets/F.mp3');
var button3 = new Audio('assets/G.mp3');
var button4 = new Audio('assets/hihat.mp3');
var button5 = new Audio('assets/kick.mp3');
var button6 = new Audio('assets/laugh-1.mp3');
var button7 = new Audio('assets/laugh-2.mp3');
var button8 = new Audio('assets/snare.mp3');
function playSample(button) {
    button.play();
}
window.addEventListener('load', function () {
    document.querySelector(".button0").addEventListener("click", playSample.bind(null, button0));
});
window.addEventListener('load', function () {
    document.querySelector(".button1").addEventListener("click", playSample.bind(null, button1));
});
window.addEventListener('load', function () {
    document.querySelector(".button2").addEventListener("click", playSample.bind(null, button2));
});
window.addEventListener('load', function () {
    document.querySelector(".button3").addEventListener("click", playSample.bind(null, button3));
});
window.addEventListener('load', function () {
    document.querySelector(".button4").addEventListener("click", playSample.bind(null, button4));
});
window.addEventListener('load', function () {
    document.querySelector(".button5").addEventListener("click", playSample.bind(null, button5));
});
window.addEventListener('load', function () {
    document.querySelector(".button6").addEventListener("click", playSample.bind(null, button6));
});
window.addEventListener('load', function () {
    document.querySelector(".button7").addEventListener("click", playSample.bind(null, button7));
});
window.addEventListener('load', function () {
    document.querySelector(".button8").addEventListener("click", playSample.bind(null, button8));
});
var beat = [button5, button8, button4];
var index = 0;
var speed = 500;
var stopbeat = false;
function speedup() {
    speed = speed - 50;
    if (speed < 250) {
        speed = 50;
    }
}
function slowdown() {
    speed = speed + 50;
    if (speed > 500) {
        speed = 500;
    }
}
function player() {
    var repeat = setInterval(function () {
        beat[index].play();
        index++;
        if (index == 3) {
            index = 0;
        }
        if (stopbeat == true) {
            clearInterval(repeat);
        }
    }, speed);
}
;
window.addEventListener('load', function () {
    document.querySelector(".play").addEventListener("click", function () {
        stopbeat = false;
        player();
    });
});
window.addEventListener('load', function () {
    document.querySelector(".speedup").addEventListener("click", function () {
        speedup();
    });
});
window.addEventListener('load', function () {
    document.querySelector(".slowdown").addEventListener("click", function () {
        slowdown();
    });
});
window.addEventListener('load', function () {
    document.querySelector(".stop").addEventListener("click", function () {
        stopbeat = true;
    });
});
//# sourceMappingURL=script.js.map