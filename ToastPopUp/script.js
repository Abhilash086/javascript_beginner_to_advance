const horizontalPosition = document.querySelector("#horizontal-position")
const verticalPosition = document.querySelector("#vertical-position")
const type = document.querySelector("#type")
const duration = document.querySelector(".duration span")
const durationInput = document.querySelector(".duration input")
const button = document.querySelector(".btn")
const message = document.querySelector(".message")

durationInput.addEventListener("change",(e)=>{
    duration.textContent = `${e.target.value} (s)`
})

function generateToast(){
    const xvalue = horizontalPosition.value
    const yvalue = verticalPosition.value
    console.log(xvalue, yvalue)
    const toastType = type.value
    const time = parseInt(duration.textContent)
    const newToast = document.createElement("div")
    const toastContainer = document.querySelector(`.toast-container.${yvalue}-${xvalue}`)
    console.log(toastContainer)

    newToast.innerText = message.value
    newToast.classList.add("toast", toastType)
    toastContainer.append(newToast)
    setTimeout(()=>{
        newToast.remove();
    },time*1000)
}

button.addEventListener("click",()=>{
    generateToast()
})