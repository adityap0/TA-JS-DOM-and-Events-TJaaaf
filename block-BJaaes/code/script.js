let form = document.querySelector('form');
let name= document.querySelectorAll('input')[1];
let email= document.querySelectorAll('input')[2];
let num= document.querySelectorAll('input')[3];
let error = document.querySelector('small').innerText;
form.addEventListener('submit', handleSubmit);
function handleSubmit(event){
event.preventDefault();
let user = event.target.elements.Username;
if(user.value === "")
{
    console.log(document.querySelector('small').innerText);
    error = 'Cant be empty!'
    console.log(error);
}

console.log(user.nextelementsibling);

}