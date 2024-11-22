const input = document.querySelector("input")
const submit = document.querySelector(".submit-btn")
const start = document.querySelector(".start-btn")
const decision = document.querySelector(".decision")
const guess = document.querySelector(".guess")

let score = `Your Guesses: `
let num = randomNumber()

function randomNumber(){
    return Math.floor((Math.random()*100))+1
}

submit.addEventListener("click",()=>{
    const number = parseInt(input.value)
    if(number === num){
        decision.textContent = "You are correct"
        score += number
    }else if(number > num){
        decision.textContent = "Too high"
        score += number + " ,"
    }else{
        decision.textContent = "Too low"
        score += number + " ,"
    }
    guess.textContent = score
    input.value = ""
})

start.addEventListener("click",()=>{
    num = randomNumber()
    guess.textContent = ""
    decision.textContent = ""
    input.value = ""
    score = `Your Guesses: `
})