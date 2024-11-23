const input = document.querySelector("input")

let previousValue = ""
let firstThreeNum = ""
input.addEventListener("input",(e)=>{
    let inputValue = e.target.value

    if(/\d+$/g.test(inputValue)){
        input.value = inputValue
    }else{
        input.value = inputValue.substr(0, inputValue.length - 1)
    }
    
    if(inputValue.length === 4 && previousValue.length < inputValue.length){
        firstThreeNum = inputValue.substr(0,3)
        input.value = `+(${firstThreeNum}) - ${inputValue[inputValue.length - 1]}`
    }else if(inputValue.length === 9 && previousValue.length > inputValue.length){
        input.value = firstThreeNum
    }
    previousValue = inputValue
})