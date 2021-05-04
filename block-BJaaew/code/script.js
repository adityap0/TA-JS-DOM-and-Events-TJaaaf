let root = document.querySelector('.root');
let house = document.querySelectorAll('nav ul li');
let input = document.querySelector('input');

input.addEventListener('keyup', handleInput)
function handleInput(event) {
    let searchInput = event.target.value;
    root.innerHTML = "";
    let final = [];
    let houseName = event.target.innerText;
    final = got.houses.filter((house) => {
        if (house.name.toLowerCase().includes(searchInput)) {
            return house;
        }
    })
    final.forEach((house) => {
        house.people.forEach(person => {
            createUI(person);
        })

    })
}
function handleHouse(event) {
    root.innerHTML = "";
    let final = [];
    let houseName = event.target.innerText;
    final = got.houses.filter((house) => {
        if (house.name.toLowerCase() === houseName.toLowerCase()) {
            return house;
        }
    })
    final.forEach((house) => {
        house.people.forEach(person => {
            createUI(person);
        })

    })
}
house.forEach((home) => {
    home.addEventListener('click', handleHouse);
})


function createUI(character) {
    let li = document.createElement('li');

    let div = document.createElement('div');
    div.classList.add('person-info', 'flexc', 'center', 'align-center', 'space-between');

    let img = document.createElement('img');
    img.src = character.image;
    img.alt = 'dp';

    let h2 = document.createElement('h2');
    h2.innerText = character.name;

    let p = document.createElement('p');
    p.innerText = character.description;

    let button = document.createElement('button');
    button.innerText = 'Know More!';

    div.append(img, h2, p, button);
    li.append(div);
    root.append(li);
}
