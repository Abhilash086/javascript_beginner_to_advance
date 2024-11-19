const rock = document.querySelector(".rock-btn")
const paper = document.querySelector(".paper-btn")
const scissor = document.querySelector(".scissors-btn")
let user, computer
const choice = ["rock", "paper", "scissor"]
const result = document.querySelector(".result")
const userHandIcon = document.querySelector(".user.hand-icon")
const computerHandIcon = document.querySelector(".computer.hand-icon")
const hands = {
    rock: "🤜",
    paper: "✋",
    scissor: "✌️"
}

function shakeHands(user, computer){
    userHandIcon.classList.add("shakeUserHands")
    computerHandIcon.classList.add("shakeComputerHands")
    setTimeout(()=>{
        userHandIcon.classList.remove("shakeUserHands")
        computerHandIcon.classList.remove("shakeComputerHands")    
        userHandIcon.textContent = hands[user]
        if(computer === "rock"){
            computerHandIcon.textContent = "🤛"
        }else{
            computerHandIcon.textContent = hands[computer]
        }
        result.textContent = checkResult(user, computer)
    },2000)
}

function generateRandomNumber(){
    return Math.floor(Math.random()*3)
}

function checkResult(user, comp){
    if(user === computer){
        return "Its a Draw"
    }else if(user === "rock"){
        if(comp === "paper"){
            return "Computer won"
        }else{
            return "You win"
        }
    }else if(user === "paper"){
        if(comp === "scissor"){
            return "Computer won"
        }else{
            return "You win"
        }
    }else if(user === "scissor"){
        if(comp === "rock"){
            return "Computer won"
        }else{
            return "You win"
        }
    }
}

function resetDefault(){
    userHandIcon.textContent = "🤜"
    computerHandIcon.textContent = "🤛"
    result.textContent = ""
}

rock.addEventListener('click',()=>{
    resetDefault()
    user = "rock"
    computer = choice[generateRandomNumber()]
    shakeHands(user, computer)
})

paper.addEventListener('click',()=>{
    resetDefault()
    user = "paper"
    computer = choice[generateRandomNumber()]
    shakeHands(user, computer)
})

scissor.addEventListener('click',()=>{
    resetDefault()
    user = "scissor"
    computer = choice[generateRandomNumber()]
    shakeHands(user, computer)
})