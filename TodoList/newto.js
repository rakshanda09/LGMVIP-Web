let addbutton=document.getElementById('addtask');
let taskcontainer=document.getElementById('todolist');
let inputfield=document.getElementById('inputfield');

addbutton.addEventListener('click',function(){
    
    
        var paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputfield.value;
        taskcontainer.appendChild(paragraph);
        inputfield.value = "";
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('dblclick', function(){
            taskcontainer.removeChild(paragraph);
        })


});