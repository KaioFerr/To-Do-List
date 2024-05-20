function addTask() {
    //pegando as section task, task_list e alerta
    var task = document.getElementById("task")
    let task_list = document.getElementById("task_list")
    let alert = document.getElementById("alert")

    //criando uma div com input, paragrafo e imagens
    if (task.value != "") {

        alert.innerHTML = ""
        task.style.border = "2px solid black"

        let newDiv = document.createElement("div")
        newDiv.id = "newDiv"

        let divInputAndTask = document.createElement("div")
        divInputAndTask.id = "divInputAndTask"
        let divIcons = document.createElement("div")
        divIcons.id = "divIcons"

        let newInput = document.createElement("input")
        newInput.type = "checkbox"
        newInput.id = "checkbox"

        let newTask = document.createElement("p")
        newTask.textContent = task.value

        let editIcon = document.createElement("img")
        editIcon.id = "edit_icon"
        editIcon.src = "assets/edit-icon.svg"
        editIcon.onclick = function () {
            let taskEdited = prompt("Digite a nova tarefa")
            if (taskEdited != null) {
                newTask.textContent = taskEdited
            }
        }

        let deleteIcon = document.createElement("img")
        deleteIcon.src = "assets/delete-icon.svg"
        deleteIcon.onclick = function () {
            task_list.removeChild(newDiv)
        }


        task_list.appendChild(newDiv)
        newDiv.appendChild(divInputAndTask)
        divInputAndTask.appendChild(newInput)
        divInputAndTask.appendChild(newTask)
        newDiv.appendChild(divIcons)
        divIcons.appendChild(editIcon)
        divIcons.appendChild(deleteIcon)
        task.value = ""
        task.focus()


    } else {
        alert.innerHTML = "Digite uma tarefa para ser adicionada"
        task.style.border = "2px solid red"
        alert.style.color = "red"
    }
}
