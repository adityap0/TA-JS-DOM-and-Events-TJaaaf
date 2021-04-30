let form = document.querySelector('form');
let submit = document.querySelector('.submit')
// let radio = document
let terms = document.querySelector('#terms');
let root = document.querySelector('.parent');

let userInfo = {};
form.addEventListener('submit', handleSubmit)
function handleSubmit(event){
event.preventDefault();
userInfo.name = form.elements[0].value;
userInfo.email = form.elements[1].value;
userInfo.movies = form.elements[2].value;
userInfo.color = form.elements[3].value;
userInfo.ratings = form.elements[4].value;

if(form.elements[5].checked === true)
{
    userInfo.genre = form.elements[5].value;
}
else if(form.elements[6].checked === true)
{
    userInfo.genre = form.elements[6].value;
}
else if(form.elements[7].checked === true)
{
    userInfo.genre = form.elements[7].value;
}
userInfo.agree = form.elements[8].value;

let div = document.createElement('div');
    div.classList.add('modal');

    let p = document.createElement('p');
    p.classList.add('close');
    p.innerText = 'close';

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `Hello ${userInfo.name}`;

    let span0 = document.createElement('span');
    span0.classList.add('modal-element');
    span0.innerText = `Your email : ${userInfo.email}`;
    
    let span1 = document.createElement('span');
    span1.classList.add('modal-element');
    span1.innerText = `Your Love : ${userInfo.movies}`;

    let span2 = document.createElement('span');
    span2.classList.add('modal-element');
    span2.innerText = `Color : ${userInfo.color}`;

    let span3 = document.createElement('span');
    span3.classList.add('modal-element');
    span3.innerText = `Ratings: ${userInfo.ratings}`;

    let span4 = document.createElement('span');
    span4.classList.add('modal-element');
    span4.innerText = `Book Genre : ${userInfo.genre}`;

    let span5 = document.createElement('span');
    span5.classList.add('modal-element');
    
    if(userInfo.agree === 'on')
    {
        span5.innerText = `You Agree to the terms and conditions`;
    }
    else{
        span5.innerText = `You Disgree to the terms and conditions`;
    }
    div.append(p,h1,span0,span1,span2,span3,span4,span5);
    root.append(div);
}

{/* <div class="modal">
<p class="close">Close</p>
<h1 class="heading">Hello Sameer</h1>
<span class="modal-element">Email : test@gmail.com</span>
<span class="modal-element">You Love : Movies</span>
<span class="modal-element">Color : ####</span>
<span class="modal-element">Ratings: 8</span>
<span class="modal-element">book Genre : fcsdewfw</span>
<span class="modal-element">You Agree to Terms and conditions</span>
</div> */}




    



