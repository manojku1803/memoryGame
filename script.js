const cardArray =[
    {
        name: 'fries',
        img: 'Images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img: 'Images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'Images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'Images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'Images/pizza.png'
    },
    {
        name: 'fries',
        img: 'Images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img: 'Images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'Images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'Images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'Images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon =[]

function createBoard() {
    for (let i=0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'Images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','Images/blank.png')
        cards[optionTwoId].setAttribute('src','Images/blank.png')
        alert('You have click a same image!')
    }

    if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'Images/white.png')
        cards[optionTwoId].setAttribute('src', 'Images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src','Images/blank.png')
        cards[optionTwoId].setAttribute('src','Images/blank.png')
        alert('Sorry try again!')
    }

    resultDisplay.textContent=cardsWon.length
    cardsChosen=[]
    cardsChosenIds=[]

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent='Congratulations you found them all!'
    }

}


function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }

}