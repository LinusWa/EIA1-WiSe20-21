var deleteIcon = document.querySelector(".fas fa-trash-alt");
var listIndex = 0;
var newTask = document.querySelector("#newTasks");
var liElement = document.querySelector(".aufgabe");
function count() {
    document.querySelector("h2").innerHTML = listIndex + " Aufgaben";
}
function emptyInputField() {
    document.getElementById("#newTasks").value = "";
}
function createElement() {
    var myLi = document.createElement("li");
    myLi.className = "aufgabe";
    var deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt";
    var textInput = document.createElement("span");
    textInput.innerHTML = newTask.value;
    newTask.value = "";
    var circleIcon = document.createElement("i");
    circleIcon.className = "fal fa-circle";
    var checkedIcon = document.createElement("i");
    checkedIcon.className = "fas fa-check-square hidden";
    document.querySelector("#listoftasks").appendChild(myLi);
    myLi.appendChild(deleteIcon);
    myLi.appendChild(textInput);
    myLi.appendChild(circleIcon);
    myLi.appendChild(checkedIcon);
    circleIcon.addEventListener("click", function () {
        if (checkedIcon.classList.contains("hidden")) {
            checkedIcon.classList.remove("hidden");
        }
        else {
            checkedIcon.classList.add("hidden");
        }
    });
    deleteIcon.addEventListener("click", function () {
        document.querySelector("#listoftasks").removeChild(myLi);
        listIndex--;
        count();
    });
    listIndex++;
    count();
}
document.querySelector(".add").addEventListener("click", function () {
    createElement();
    emptyInputField();
});
newTask.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
        createElement();
        emptyInputField();
    }
});
//# sourceMappingURL=script.js.map