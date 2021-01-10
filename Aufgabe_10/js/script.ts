interface TodoInterface {
    text: string;
    checked: boolean;
}

// Objektarray
var todosObject: TodoInterface[] = [
    {
        text: "Schaffe",
        checked: true
    },
    {
        text: "Schaffe",
        checked: false
    },
    {
        text: "Häusle baue",
        checked: false
    }

];

var inputDOMElement: HTMLInputElement; 
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var openTasksDOMElement: HTMLElement;
var doneTasksDOMElement: HTMLElement;
var activateartiyom: boolean = false;

window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openTasksDOMElement = document.querySelector("#open");
    doneTasksDOMElement = document.querySelector("#done");

    addButtonDOMElement.addEventListener("click", function(): void {
        addTodo(inputDOMElement.value);
    });

    drawListToDOM();
});
// "Zusammenbau" der Aufgaben
function drawListToDOM(): void {

    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todosObject.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + todosObject[index].checked + "'><i class='fas fa-check'></i></span>"
                            + todosObject[index].text +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

var done: number = 1;
var openTask: number = 2;

// Update der Aufgabenzähler
function updateCounter(): void {
    counterDOMElement.innerHTML = todosObject.length + " in total";
    openTasksDOMElement.innerHTML = openTask + " tasks open";
    doneTasksDOMElement.innerHTML = done + " tasks done";
}



// Spracheingabe
window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    artyom.addCommands({
        smart: true,
        indexes: ["Neue Aufgabe *"], // Befehl der zur Eingabe gesagt werden muss
        action: function (i: any, wildcard: string): void {
            activateartiyom = true;
            addTodo(wildcard); // Wildcard ist das, was gesagt wurde und ist der Text für die Aufgabe
        }
    });

    document.querySelector("#start-voice").addEventListener("click", function(): void { // Button startet Zuhören
        startArtyom();
        artyom.say("Gebe Aufgaben per Spracheingabe mit dem Befehl Neue Aufgabe ein");
    });
    document.querySelector("#stop-voice").addEventListener("click", function(): void { // Button stoppt Zuhören
        stopArtyom();
    });

    function startArtyom(): void {
        artyom.initialize({ // Artyom Einstellungen
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true,
                speed: 1
        });
    }
    function stopArtyom(): void {
        artyom.fatality();
    }
});

// Hinzufügen der Aufgabe
function addTodo(text: string): void {

    if (inputDOMElement.value != "") {
    
        todosObject.unshift({
            text: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        openTask ++;
        drawListToDOM();
    }
    if (activateartiyom == true) {
        todosObject.unshift({
            text: text,
            checked: false
        });
        activateartiyom = false;
        openTask++;
        drawListToDOM();
    }
}

// Änderung von Checked/Unchecked
function toggleCheckState(index: number): void {

    if (todosObject[index].checked == true) {
        todosObject[index].checked = false;
        done--;
        openTask++;
    }
    else if (todosObject[index].checked == false) {
        todosObject[index].checked = true;
        done++;
        openTask--;
    }

    drawListToDOM();
}

// Löschen der Aufgabe
function deleteTodo(index: number): void {

    if (todosObject[index].checked == true) {
        done--;
    }
    else if (todosObject[index].checked == false) {
        openTask--;
    }
    todosObject.splice(index, 1);
    drawListToDOM();
}