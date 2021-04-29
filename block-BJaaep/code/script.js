//Without Event Deligation
let box = document.querySelectorAll('.box');
box.forEach((boxx, index)=>{
   boxx.addEventListener('click', function(){
    boxx.innerText = index+1;
    console.log(boxx.innerText,index);
    setTimeout(() => {
        boxx.innerText = "";
    }, 2000);
   })
})

// With event delegation
let box2 = document.querySelectorAll('.box-2');
box2.forEach((box, index)=>{
    box.setAttribute('data-index', index+1);
});

let root = document.querySelectorAll('.boxes')[1];
root.addEventListener('click', handleEvent);
function handleEvent(event)
{   
   event.target.innerText = event.target.dataset.index;
   setTimeout(() => {
    event.target.innerText = "";
   }, 2000);
}

