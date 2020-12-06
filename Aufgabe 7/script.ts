var button0: HTMLAudioElement = new Audio('assets/A.mp3');
var button1: HTMLAudioElement = new Audio('assets/C.mp3');
var button2: HTMLAudioElement = new Audio('assets/F.mp3');
var button3: HTMLAudioElement = new Audio('assets/G.mp3');
var button4: HTMLAudioElement = new Audio('assets/hihat.mp3');
var button5: HTMLAudioElement = new Audio('assets/kick.mp3');
var button6: HTMLAudioElement = new Audio('assets/laugh-1.mp3');
var button7: HTMLAudioElement = new Audio('assets/laugh-2.mp3');
var button8: HTMLAudioElement = new Audio('assets/snare.mp3');


function playSample( button: any){
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


var beat: HTMLAudioElement [] =  [ button5, button8, button4];
var index= 0;

function player() {
    setInterval(function () {
        beat[index].play();
        console.log(index);
        index++;
        if (index == 3 ) 
        {
            index = 0;
        }
    }, 350);
};

window.addEventListener('load', function () {
document.querySelector(".play").addEventListener("click", function() {
    player()
    })
});
