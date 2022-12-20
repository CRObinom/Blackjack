let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "" 

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

let player = {
    name: "Lovre",
    chips: 150
 }

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1 
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) { 
        return 11}
        else { 
            return randomNumber
        }
}

function startGame() {
    renderGame()
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
}

function renderGame() {

    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++ ) {
    cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = ("Do you want to draw another card?")
    }
    else if (sum === 21) {
        message = ("You've won Blackjack!")
        hasBlackJack = true
    }
    else {
        message = ("You're out of the game!")
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard() {

    if ( isAlive === true && hasBlackJack === false) {
    console.log("Drawing new card from deck!")
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
    }
}




console.log(hasBlackJack)
console.log(isAlive)
console.log(messageEl)