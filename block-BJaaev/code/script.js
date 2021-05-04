
let input = document.querySelector('.input-bar input');
let ul = document.querySelector('ul');
let todoList = JSON.parse(localStorage.getItem('todos'))||[];
let root = document.querySelector('nav')

input.addEventListener('keyup', handleEvent)

function handleEvent (event){
    let name = event.target.value;
    if (event.keyCode === 13 && name!=="") {
        let todo = {
            name : event.target.value,
            isDone : false
        }
        todoList.push(todo);
        event.target.value =""; 
        createUI();
    }
    localStorage.setItem('todos', JSON.stringify(todoList))
      }
function handleDelete(event){
        let id = event.target.dataset.index;
        todoList.splice(id,1);
        localStorage.setItem('todos', JSON.stringify(todoList))
        createUI();
    }
    
function handleToggle(event){
        let id = event.target.dataset.id;
        todoList[id].isDone = !todoList[id].isDone;
        localStorage.setItem('todos', JSON.stringify(todoList))
        createUI();
    }
function handleAll(){
    localStorage.setItem('todos', JSON.stringify(todoList))
    createUI();
}
function handleActive(event){
    let id = event.target;
    
    let activeToDo = todoList.filter((item)=>{
       return item.isDone === false;
    })
    localStorage.setItem('todos', JSON.stringify(todoList))
    createUI(activeToDo);
}
function handleCompleted(){
    let id = event.target;
    let completedToDo = todoList.filter((item)=>{
       return item.isDone === true;
    })
    localStorage.setItem('todos', JSON.stringify(todoList))
    createUI(completedToDo);
}

      function createUI(data = todoList){
          ul.innerHTML = "";
        
          data.forEach((item, index)=>{
            let li = document.createElement('li');
            li.classList.add('flexc','space-between','list-item');
            let div = document.createElement('div');
            div.classList.add('flex','align','space-between', 'item-name');
            let input =  document.createElement('input');
            input.type = 'checkbox';
            input.id = 'checkbox';
            input.checked = item.isDone;
            input.addEventListener('input', handleToggle);
            input.setAttribute('data-id', index);
            let span = document.createElement('span');
            span.innerText = item.name;
            let btn = document.createElement('button');
            btn.innerText = "❌";
            btn.setAttribute('data-index', index);
            btn.addEventListener('click', handleDelete);
            //append
            div.append(input,span,btn);
            li.append(div);
            ul.append(li);
        })
        if(todoList.length > 0)
        {   
            root.innerHTML = "";
            let addFeatures =  document.createElement('div');
            addFeatures.classList.add('flex', 'space-between', 'extra-info');
            addFeatures.innerText = `${todoList.length} items left`;
            let div = document.createElement('div');
            let ul = document.createElement('ul');
            ul.classList.add('flex', 'features');
            let li1 = document.createElement('li');
            li1.innerText = 'All';
            li1.addEventListener('click', handleAll);
            let li2 = document.createElement('li');
            li2.innerText = 'Active';
            li2.addEventListener('click', handleActive)
            let li3 = document.createElement('li');
            li3.innerText = 'Completed';
            li3.addEventListener('click', handleCompleted)
            //append
            ul.append(li1, li2, li3);
            div.append(ul);
            addFeatures.append(div);
            root.append(addFeatures);
        }
        else{
            root.innerHTML = "";
        }

      }  






