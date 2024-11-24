const tarefa = document.querySelector("#todo-input");
const btn = document.querySelector("#todo-button");
const lista = document.querySelector("#todo-list");

document.addEventListener("DOMContentLoaded", cargarTareas);

btn.addEventListener("click", function () {
    if (tarefa.value.trim() === "") {
        alert("Digite uma tarefa");
    } else {
        agregarTarea(tarefa.value);
        guardarTareaEnStorage(tarefa.value);
        tarefa.value = "";
    }
});

// Función para agregar una tarea a la lista
function agregarTarea(tareaTexto) {
    const li = document.createElement("li");
    li.innerHTML = `
        <i class="bi bi-check-circle" id="check"></i> 
        <span>${tareaTexto}</span>
        <i class="bi bi-trash3" id="delete"></i>
    `;
    lista.appendChild(li);

    // Evento para eliminar la tarea
    li.querySelector("#delete").addEventListener("click", function () {
        li.remove();
        eliminarTareaDeStorage(tareaTexto);
    });

    // Evento para marcar la tarea como completada
    li.querySelector("#check").addEventListener("click", function () {
        this.style.color = "#349223";
        li.querySelector("span").style.textDecoration = "line-through";
        li.querySelector("span").style.color = "#349223";
    });
}

// Función para cargar las tareas desde el Local Storage
function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.forEach((tareaTexto) => {
        agregarTarea(tareaTexto);
    });
}

// Función para guardar una tarea en el Local Storage
function guardarTareaEnStorage(tareaTexto) {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push(tareaTexto);
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Función para eliminar una tarea del Local Storage
function eliminarTareaDeStorage(tareaTexto) {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas = tareas.filter((tarea) => tarea !== tareaTexto);
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

/*
btn.addEventListener("click", function(){

if(tarefa.value ==""){

    alert("digite uma tarefa");
    
}

else{

    lista.innerHTML += 
    `
    <li><i class="bi bi-check-circle" id="check"> 
    <span> ${tarefa.value}</span></i>
    <i class="bi bi-trash3" id="delete"></i></li>
    `

    tarefa.value ="";

}




const close = document.querySelectorAll("#delete");

for(let i=0; i<close.length; i++){

    close[i].addEventListener("click", function(){

        close[i].parentElement.remove();


    });

}

lista.addEventListener("click", function(e){
e.target.parentElement.querySelector("#check").style.color = "#349223";
e.target.parentElement.querySelector("span").style.textDecoration ="line-through";

})

})*/