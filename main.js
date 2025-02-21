const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");
const toDoList = document.getElementById("to-do-list");

const addToDo = () => {
    
    if (inputField.value) {
        toDoList.innerHTML += `
            <div class="w-auto h-10 border-b-1 border-gray-300 p-1 flex gap-5 items-center last:border-transparent cursor-pointer" id="to-do">
                <ion-icon name="square-outline" class="stroke-0 ml-3 cursor-pointer" id="check-to-do"></ion-icon>
                <p class="">${inputField.value}</p>
                <ion-icon name="close-outline" class="ml-auto mr-2 cursor-pointer" id="remove-to-do"></ion-icon>
            </div>
        `
    }
    inputField.value = " "
}

addButton.addEventListener("click", addToDo)

inputField.addEventListener("keyup", (e) => {
    if (e.key === "Enter"){
        addToDo();
        saveData();
    }
})

const removeButton = document.getElementById("remove-to-do");
const toDo = document.getElementById("to-do")

toDoList.addEventListener("click", (e) => {
    if (e.target.tagName === "DIV") {
        e.target.classList.toggle("line-through")
        e.target.classList.toggle("custom-before")
        saveData();
    } else if (e.target.id === "remove-to-do") {
        e.target.parentElement.remove();
        saveData();
    }
})

const saveData = () => {
    localStorage.setItem("data", toDoList.innerHTML)
}

const retrieveData = () => {
    toDoList.innerHTML = localStorage.getItem("data")
}

retrieveData()