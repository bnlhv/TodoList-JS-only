var i = 1;

//clear the input
clearField = () => document.getElementById('input').value = "";

//add input field to list of todo's
addField = () => { 
    var li = document.createElement("li");
    li.onclick = markTodo;
    var text = document.getElementById("input").value;
    if (text === ""){
        text = "Enter Somtehing!!"
    }
    var t = document.createTextNode(text);
    li.appendChild(t);
    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Del"));
    button.onclick = delTodo;
    li.appendChild(button);
    li.id = i++;
    document.getElementById("list").appendChild(li);

    document.getElementById("input").value = "";
}

//erase a mission after completed
delTodo = (e) => {
    //event is on the button and we need to remove his parent the li
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
}

//line-through the li on and off
markTodo = () => { 
    let listItems = document.querySelectorAll('li');
    for(let i = 0; i < listItems.length; i++){
        listItems[i].addEventListener('click', () => {
            listItems[i].classList.contains('line') ?
                listItems[i].classList.remove('line'):
                listItems[i].classList.add('line');           
        });
    }
}

eraseAll = () => {
    let list= document.querySelectorAll('li');
    for(let i = 0 ; i < list.length ; i++ ){
        list[i].parentElement.removeChild(list[i]);
    }
}