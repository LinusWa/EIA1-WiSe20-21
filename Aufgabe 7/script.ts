var button0: HTMLAudioElement = new Audio("assets/A.mp3");
var button1: HTMLAudioElement = new Audio("assets/C.mp3");
var button2: HTMLAudioElement = new Audio("assets/F.mp3");
var button3: HTMLAudioElement = new Audio("assets/G.mp3");
var button4: HTMLAudioElement = new Audio("assets/hihat.mp3");
var button5: HTMLAudioElement = new Audio("assets/kick.mp3");
var button6: HTMLAudioElement = new Audio("assets/laugh-1.mp3");
var button7: HTMLAudioElement = new Audio("assets/laugh-2.mp3");
var button8: HTMLAudioElement = new Audio("assets/snare.mp3");


function playSSample(button: HTMLAudioElement): void {
    button.play();
}
window.addEventListener("load", function (): void {
    document.querySelector(".button0").addEventListener("click", playSSample.bind(null, button0));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button1").addEventListener("click", playSSample.bind(null, button1));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button2").addEventListener("click", playSSample.bind(null, button2));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button3").addEventListener("click", playSSample.bind(null, button3));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button4").addEventListener("click", playSSample.bind(null, button4));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button5").addEventListener("click", playSSample.bind(null, button5));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button6").addEventListener("click", playSSample.bind(null, button6));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button7").addEventListener("click", playSSample.bind(null, button7));
});
window.addEventListener("load", function (): void {
    document.querySelector(".button8").addEventListener("click", playSSample.bind(null, button8));
});


var beat: HTMLAudioElement [] =  [ button5, button8, button4];
var index: number = 0;
var speed: number = 500;
var stopbeat: boolean = false;


function speedup(): void {
    speed = speed - 50;
    if (speed < 250) {
        speed = 50;
    }
}
function slowdown(): void {
    speed = speed + 50;
    if (speed > 500) {
        speed = 500;
    }
}

function player(): void {
    var repeat: number = setInterval(function (): void {
        beat[index].play();
        index++;
        if (index == 3 ) {
            index = 0;
        }
        if (stopbeat == true) {
            clearInterval(repeat);
        }
        },  
                                     speed );
}

window.addEventListener("load", function (): void {
    document.querySelector(".play").addEventListener("click", function(): void {
            stopbeat = false;
            player ();
        });
});
window.addEventListener("load", function (): void {
    document.querySelector(".speedup").addEventListener("click", function(): void {
        speedup();
        });
});
window.addEventListener("load", function (): void {
    document.querySelector(".slowdown").addEventListener("click", function(): void {
        slowdown();
        });
});
window.addEventListener("load", function (): void {
    document.querySelector(".stop").addEventListener("click", function(): void {
        stopbeat = true;
        });
});