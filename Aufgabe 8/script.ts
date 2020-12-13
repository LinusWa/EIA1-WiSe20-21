var button0: HTMLAudioElement = new Audio("assets/A.mp3");
var button1: HTMLAudioElement = new Audio("assets/C.mp3");
var button2: HTMLAudioElement = new Audio("assets/F.mp3");
var button3: HTMLAudioElement = new Audio("assets/G.mp3");
var button4: HTMLAudioElement = new Audio("assets/hihat.mp3");
var button5: HTMLAudioElement = new Audio("assets/kick.mp3");
var button6: HTMLAudioElement = new Audio("assets/laugh-1.mp3");
var button7: HTMLAudioElement = new Audio("assets/laugh-2.mp3");
var button8: HTMLAudioElement = new Audio("assets/snare.mp3");


function playSample(button: HTMLAudioElement): void {
    button.play();
    recordBeat(button);
}

window.addEventListener("load", function (): void {
    document.querySelector(".button0").addEventListener("click", playSample.bind(null, button0));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button1").addEventListener("click", playSample.bind(null, button1));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button2").addEventListener("click", playSample.bind(null, button2));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button3").addEventListener("click", playSample.bind(null, button3));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button4").addEventListener("click", playSample.bind(null, button4));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button5").addEventListener("click", playSample.bind(null, button5));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button6").addEventListener("click", playSample.bind(null, button6));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button7").addEventListener("click", playSample.bind(null, button7));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button8").addEventListener("click", playSample.bind(null, button8));
});

var startrecording: HTMLElement = document.querySelector(".buttonrecord");
var deleterecording: HTMLElement = document.querySelector(".buttondelete");

// Array für den Beat, + mit .push, - mit .splice
var beat: HTMLAudioElement [] =  [ button5, button8, button4];
var recording: boolean;
var playthebeat: HTMLElement = document.querySelector (".buttonplay");
var stopthebeat: HTMLElement = document.querySelector (".buttonstop");
var beatinterval: any;
var index: number; 

function deleteBeat (): void {
    beat.splice(0, beat.length);
}

document.querySelector(".buttonrecord").addEventListener("click", () => {
    if (startrecording.classList.contains("currentlyrecording")) {
        startrecording.classList.remove("currentlyrecording");
        recording = false;
    }
    else {
        startrecording.classList.add("currentlyrecording");
        recording = true;
    }
});

document.querySelector(".buttondelete").addEventListener("click", () => {
    deleteBeat();
});

function recordBeat (button: HTMLAudioElement): void {
    if (recording == true) {
        beat.push(button);
    }
}



document.querySelector(".buttonplay").addEventListener("click",  () => {      
        beatinterval = setInterval( () => {     
            if (index < beat.length) {   
            playSample(beat[index]);
            index++;
            }
            else {
                index = 0; 
            }
         },                         500);
        if (playthebeat.classList.contains("inactive")) {
                playthebeat.classList.remove("inactive");
                stopthebeat.classList.add("inactive");
             }
             else {
                 stopthebeat.classList.remove("inactive");
                 playthebeat.classList.add("inactive");
             }
 });
 
document.querySelector(".buttonstop").addEventListener("click", () => {
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
