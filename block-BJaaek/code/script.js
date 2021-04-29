let firstBox = document.querySelector('.first');
let secondBox = document.querySelector('.second');

firstBox.addEventListener('click', function(){
   let color = '#';
   color += Math.random().toString(16).slice(2,8);
   firstBox.style.backgroundColor = color;
})

secondBox.addEventListener('mousemove', function(){
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    secondBox.style.backgroundColor = color;
 })