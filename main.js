const localStorageKey = 'to-do-list-gi'

function validadeIdExistNewTask(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input-new-task').value
    let exists = values.find(x => x.name == inputValue)
    return !exists ? false : true
    
}

function newTask (){

    let input = document.getElementById('input-new-task')
    input.style.border = ''
    
    
    if(!input.value){
        input.style.border = '1px solid red'
        alert('Digite algo para inserir na sua lista')
    }
    else if (validadeIdExistNewTask()) {
        alert('Já existe uma task com essa descrição')
    }
    else {
        //incremente to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push ({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }
    input.value = ''
}

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i =0; i < values.length; i++){
        list.innerHTML += `<li>${values[i]['name']}<button id="btn-ok" onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
      </svg></button></li>`
    }
}
function removeItem(data){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.find(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}
showValues()

