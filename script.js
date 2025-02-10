const guessInput = document.querySelector('#guess-input')
const guessBtn = document.querySelector('#guess-btn')
const message = document.querySelector('#message')
const attemptsDisplay = document.querySelector('#attempts')
const restartBtn = document.querySelector('#restart-btn')

let randomNumber = Math.floor(Math.random() * 100) + 1
let attempts = 0

function checkGuess() {
    const userGuess = parseInt(guessInput.value)

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Введите число от 1 до 100!'
        return
    }

    attempts++
    attemptsDisplay.textContent = `Попытки: ${attempts}`

    if (userGuess === randomNumber) {
        message.textContent = `Поздравляю, вы угадали число за ${attempts} попыток.`
        endGame()
    } else if (userGuess < randomNumber) {
        message.textContent = 'Слишком мало, попробуй еще раз'
    } else {
        message.textContent = 'Силшком много, попробуй еще раз'
    }

    guessInput.value = ''
}

function endGame() {
    guessInput.disabled = true
    guessBtn.disabled = true
    restartBtn.style.display = 'block'
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1
    attempts = 0
    attemptsDisplay.textContent = `Попытки: ${attempts}`
    message.textContent = ''
    guessInput.disabled = false
    guessBtn.disabled = false
    restartBtn.style.display = 'none'
    guessInput.value = ''
}

guessBtn.addEventListener('click', checkGuess)
restartBtn.addEventListener('click', restartGame)

guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkGuess()
    }
})