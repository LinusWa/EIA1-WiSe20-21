const deleteIcon: HTMLElement = document.querySelector(".fas fa-trash-alt");
let listIndex: number = 0;
let newTask: HTMLInputElement = document.querySelector("#newTasks");
const liElement: HTMLElement = document.querySelector(".aufgabe");

function count(): void {
    document.querySelector("h2").innerHTML = listIndex + " Aufgaben";
}


function emptyInputField(): void {
    (<HTMLInputElement>document.getElementById("#newTasks")).value = "";
} 

function createElement (): void {
    let myLi: HTMLElement = document.createElement("li");
    myLi.className = "aufgabe";

    let deleteIcon: HTMLElement = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt";

    let textInput: HTMLSpanElement = document.createElement("span");
    textInput.innerHTML = newTask.value;

    let circleIcon: HTMLElement = document.createElement("i");
    circleIcon.className = "fal fa-circle";

    let checkedIcon: HTMLElement = document.createElement("i");
    checkedIcon.className = "fas fa-check-square hidden";
    
    document.querySelector("#listoftasks").appendChild(myLi);

    myLi.appendChild(deleteIcon);

    myLi.appendChild(textInput);

    myLi.appendChild(circleIcon);

    myLi.appendChild(checkedIcon);

    circleIcon.addEventListener("click", function(): void {
        if (checkedIcon.classList.contains("hidden")) {
            checkedIcon.classList.remove("hidden");
        }   
            else { 
                checkedIcon.classList.add("hidden");
            }

        });

    deleteIcon.addEventListener("click", function(): void {
        document.querySelector("#listoftasks").removeChild(myLi);
        listIndex--;
        count();
    });

    listIndex++;
    count();

}

document.querySelector(".add").addEventListener("click", function(): void {
    
    createElement();
    emptyInputField();
});

newTask.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        createElement();
        emptyInputField();
        
    }

});