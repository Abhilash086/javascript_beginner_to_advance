const input = document.querySelector("input")
const upper = document.querySelector(".upper-case span")
const lower = document.querySelector(".lower-case span")
const camel = document.querySelector(".camel-case span")
const pascal = document.querySelector(".pascal-case span")
const snake = document.querySelector(".snake-case span")
const kebab = document.querySelector(".kebab-case span")
const trim = document.querySelector(".trim span")

input.addEventListener("input",(e)=>{
    let inputText = e.target.value
    let uppercase = inputText.toUpperCase()
    let lowercase = inputText.toLowerCase()
    let camelcase = ()=>{
        let str = ""
        inputText.split(" ").forEach((element, i) => {
            if(i === 0){
                str += element.toLowerCase()
            }else{
                str += element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
            }
        });
        return str
    }
    let pascalcase = ()=>{
        let str = ""
        inputText.split(" ").forEach((element, i) => {
            str += element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
        });
        return str
    }
    let snakecase = ()=>{
        return inputText.replaceAll(" ","_")
    }
    let kebabcase = ()=>{
        return inputText.replaceAll(" ","-")
    }
    let trimcase = ()=>{
        return inputText.replaceAll(" ","").trim()
    }

    upper.textContent = uppercase
    lower.textContent = lowercase
    camel.textContent = camelcase()
    pascal.textContent = pascalcase()
    snake.textContent = snakecase()
    kebab.textContent = kebabcase()
    trim.textContent = trimcase()
})