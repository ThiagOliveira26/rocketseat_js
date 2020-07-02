var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//parse faz retornar a array.
var toDos = JSON.parse(localStorage.getItem('list_todos')) || [];

/*var toDos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar Rocketseat'
];
-- COMENTARIO PARA INICIAR O ARRAY DE toDo COM JSON
*/ 

function rendertoDos(){
    listElement.innerHTML = '';
    for (toDo of toDos){
        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href','#');

        var pos = toDos.indexOf(toDo);
        linkElement.setAttribute('onclick','deleteToDo('+pos+')');

        var linkText = document.createTextNode("Excluir");

        linkElement.appendChild(linkText);

        toDoElement.appendChild(toDoText);
        toDoElement.appendChild(linkElement);
        
        listElement.appendChild(toDoElement);
    }
}

rendertoDos();

function addtoDo(){
    var toDoText = inputElement.value;

    toDos.push(toDoText);
    inputElement.value = '';
    rendertoDos();
    saveToStorage()
}

buttonElement.onclick = addtoDo;

function deleteToDo(pos){
    toDos.splice(pos,1);
    rendertoDos();
    saveToStorage()
}

function saveToStorage(){

    localStorage.setItem('list_todos',JSON.stringify(toDos));
}