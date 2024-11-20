const tarefa = document.querySelector("#todo-input");
const btn = document.querySelector("#todo-button");
const lista = document.querySelector("#todo-list");


btn.addEventListener("click", function(){

if(tarefa.value ==""){

    alert("digite uma tarefa")
    
}
else{

    lista.innerHTML += 
    `
    <li><i class="bi bi-check-circle" id="check"> 
    <span> ${tarefa.value}</span></i>
    <i class="bi bi-trash3" id="delete"></i></li>
    `
}

tarefa.value =="";

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




})