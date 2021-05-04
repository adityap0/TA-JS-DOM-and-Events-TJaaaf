const cardsArray = [{
    'name': 'shell',
    'img': '/block-BJaaex/assets/blueshell.png'
},
{
    'name': 'star',
    'img': '/block-BJaaex/assets/star.png',
},
{
    'name': 'bobomb',
    'img': 'img/bobomb.png',
},
{
    'name': 'mario',
    'img': 'img/mario.png',
},
{
    'name': 'luigi',
    'img': 'img/luigi.png',
},
{
    'name': 'peach',
    'img': 'img/peach.png',
},
{
    'name': '1up',
    'img': 'img/1up.png',
},
{
    'name': 'mushroom',
    'img': 'img/mushroom.png',
},
{
    'name': 'thwomp',
    'img': 'img/thwomp.png',
},
{
    'name': 'bulletbill',
    'img': 'img/bulletbill.png',
},
{
    'name': 'coin',
    'img': 'img/coin.png',
},
{
    'name': 'goomba',
    'img': 'img/goomba.png',
},
];
cardsArray.forEach((card) => {
    console.log(card.img);
})


const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

cardsArray.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;
    card.style.backgroundImage = `url(${item.img})`;
    grid.appendChild(card);
});