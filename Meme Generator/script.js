const image = document.querySelector(".image img")
const heading = document.querySelector("h2")
const generateMemeBtn = document.querySelector("button")

generateMemeBtn.addEventListener("click",()=>{
    fetch("https://meme-api.com/gimme").then((res) => res.json())
        .then((data) => {
            const {title, url} = data
            console.log(data)
            heading.innerText = title
            image.src = url
        }).catch((err) => console.log(err))
})