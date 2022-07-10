const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber);
    
    if (randomNumber === 1) {
        computerChoice = 'Taş'
    }
    if (randomNumber === 2) {
        computerChoice = 'Kağıt'
    }
    if (randomNumber === 3) {
        computerChoice = 'Makas'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Beraberlik!'
    }
    else if (computerChoice === userChoice) {
        result = 'Beraberlik!'
    }
    else if (computerChoice === 'Taş' && userChoice === 'Makas') {
        result = 'Bilgisayar kazandı!'
    }
    else if (computerChoice === 'Makas' && userChoice === 'Kağıt') {
        result = 'Bilgisayar kazandı!'
    }
    else if (computerChoice === 'Kağıt' && userChoice === 'Taş') {
        result = 'Bilgisayar kazandı!'
    }
    else {
        result = 'Kullanıcı kazandı!'
    }

    resultDisplay.innerHTML = result
}





