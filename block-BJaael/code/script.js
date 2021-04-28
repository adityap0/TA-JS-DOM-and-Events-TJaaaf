
let rootArr = document.querySelectorAll('.small-box');
let parent = document.querySelector('.box-container');

rootArr.forEach((box)=>{
parent.addEventListener('mousemove', function(){
color = '#';
color += Math.random().toString(16).slice(2,8);
box.style.backgroundColor = color;
box.children[0].innerText = Math.random().toString(10).slice(2,5);
})
})


