let root = document.querySelector('.input-numbers');
let opr = document.querySelector('.input-buttons');
let screen = document.querySelector('.input-screen');
let final = document.querySelector('.equal');

root.addEventListener('click', clickHandlenum1);
function clickHandlenum1(event){
    screen.innerText += event.target.innerText;
    let a = Number(screen.innerText);
    console.log(a);
    



}


