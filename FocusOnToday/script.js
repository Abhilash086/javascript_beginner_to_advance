const allCheckBoxes = document.querySelectorAll(".check-box")
const allInputFields = document.querySelectorAll(".input-goal input")
const inputGoalArray = document.querySelectorAll(".input-goal")
const showError = document.querySelector(".form-div")
const progressValue = document.querySelector(".progress-value span")

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {}
let completedGoals = Object.values(allGoals).filter((goal)=> {return goal.completed}).length

allCheckBoxes.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        let progress = 0
        const allFieldsFilled = [...allInputFields].every((input)=>{
            return input.value
        })

        if(allFieldsFilled){
            const inputId = elem.nextElementSibling.id

            elem.parentElement.classList.toggle("completed")
            allGoals[inputId].completed = !allGoals[inputId].completed
            completedGoals = Object.values(allGoals).filter((goal)=> {return goal.completed}).length
            progressValue.textContent = `${completedGoals}/3 completed`
            progressValue.parentElement.style.width = `${(100/3)*completedGoals}%`
            localStorage.setItem("allGoals", JSON.stringify(allGoals))
        }else{
            showError.classList.add("show-error")
        }
    })
})

allInputFields.forEach((input)=>{
    if(allGoals[input.id]?.completed){
        input.parentElement.classList.add("completed")
    }

    input.addEventListener("focus",()=>{
        showError.classList.remove("show-error")
    })

    input.addEventListener("input",(e)=>{
        if(allGoals[input.id]?.completed){
            input.value = allGoals[input.id].name
            return
        }
        allGoals[input.id] = {
            name: input.value,
            completed: false
        }
        localStorage.setItem("allGoals", JSON.stringify(allGoals))
    })

    input.value = allGoals[input.id]?.name || ""
})
