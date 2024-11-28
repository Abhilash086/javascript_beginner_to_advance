export const autoTyping = (wordsPassed, spanElement)=>{
    let wordList = wordsPassed || ["Developer", "YouTuber", "Video Creator"]
    let span = spanElement || document.querySelector("span")

    let i = 0
    let j = 0
    let showSkill = ""
    let reverseType = false
    let word = wordList[j]

    setInterval(()=>{
        if(!reverseType){
            showSkill = showSkill + word[i]
            span.innerText = showSkill
            i++ 
        } else{
            showSkill = showSkill.slice(0, showSkill.length - 1)
            span.innerText = showSkill
        }
    
        if(showSkill.length === 0 && reverseType){
            reverseType = false
            i = 0
            j++
            if(j === wordList.length){
                j = 0
                word = wordList[j]
            }else{
                word = wordList[j]
            }
        }
    
        if(i === word.length){
            reverseType = true
        }
    
    },300)    
}

export default autoTyping

const autoTyping = (wordsPassed, spanElement)=>{
    let wordList = wordsPassed || ["Developer", "YouTuber", "Video Creator"]
    let span = spanElement || document.querySelector("span")

    let i = 0
    let j = 0
    let showSkill = ""
    let reverseType = false
    let word = wordList[j]

    setInterval(()=>{
        if(!reverseType){
            showSkill = showSkill + word[i]
            span.innerText = showSkill
            i++ 
        } else{
            showSkill = showSkill.slice(0, showSkill.length - 1)
            span.innerText = showSkill
        }
    
        if(showSkill.length === 0 && reverseType){
            reverseType = false
            i = 0
            j++
            if(j === wordList.length){
                j = 0
                word = wordList[j]
            }else{
                word = wordList[j]
            }
        }
    
        if(i === word.length){
            reverseType = true
        }
    
    },300)    
}

let arr = ["Developer", "YouTuber", "Video Creator"]
let span = document.querySelector("span")

autoTyping(arr, span)