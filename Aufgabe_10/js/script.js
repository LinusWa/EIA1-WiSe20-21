// Objektarray
var todosObject = [
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
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var openTasksDOMElement;
var doneTasksDOMElement;
var activateartiyom = false;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openTasksDOMElement = document.querySelector("#open");
    doneTasksDOMElement = document.querySelector("#done");
    addButtonDOMElement.addEventListener("click", function () {
        addTodo(inputDOMElement.value);
    });
    drawListToDOM();
});
// "Zusammenbau" der Aufgaben
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index_1) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todosObject[index_1].checked + "'><i class='fas fa-check'></i></span>"
            + todosObject[index_1].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index_1);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index_1);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index_1 = 0; index_1 < todosObject.length; index_1++) {
        _loop_1(index_1);
    }
    updateCounter();
}
var done = 1;
var openTask = 2;
// Update der Aufgabenzähler
function updateCounter() {
    counterDOMElement.innerHTML = todosObject.length + " in total";
    openTasksDOMElement.innerHTML = openTask + " tasks open";
    doneTasksDOMElement.innerHTML = done + " tasks done";
}
// Spracheingabe
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        smart: true,
        indexes: ["Neue Aufgabe *"],
        action: function (i, wildcard) {
            activateartiyom = true;
            addTodo(wildcard); // Wildcard ist das, was gesagt wurde und ist der Text für die Aufgabe
        }
    });
    document.querySelector("#start-voice").addEventListener("click", function () {
        startArtyom();
        artyom.say("Gebe Aufgaben per Spracheingabe mit dem Befehl Neue Aufgabe ein");
    });
    document.querySelector("#stop-voice").addEventListener("click", function () {
        stopArtyom();
    });
    function startArtyom() {
        artyom.initialize({
            lang: "de-DE",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true,
            speed: 1
        });
    }
    function stopArtyom() {
        artyom.fatality();
    }
});
// Hinzufügen der Aufgabe
function addTodo(text) {
    if (inputDOMElement.value != "") {
        todosObject.unshift({
            text: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        openTask++;
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
function toggleCheckState(index) {
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
function deleteTodo(index) {
    if (todosObject[index].checked == true) {
        done--;
    }
    else if (todosObject[index].checked == false) {
        openTask--;
    }
    todosObject.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map