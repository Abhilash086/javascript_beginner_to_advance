function makeHttpRequest(method, url, callback){
    const xhr = new XMLHttpRequest()

    xhr.open(method,url)
    xhr.send()
    xhr.responseType = "json"
    xhr.addEventListener("load",()=>{
        callback(xhr.response)
    })
}

makeHttpRequest("GET",'https://dummyjson.com/users',(usersData)=>{
    console.log(usersData.users[8])
    makeHttpRequest("GET",`https://dummyjson.com/users/${usersData.users[8].id}/posts`,(postsData)=>{
        console.log(postsData.posts[0])
        makeHttpRequest("GET",`https://dummyjson.com/comments/post/${postsData.posts[0].id}`,(commentsData)=>{
            console.log(commentsData.comments[0].user.id)
            makeHttpRequest("GET",`https://dummyjson.com/users/${commentsData.comments[0].user.id}`,(userData)=>{
                console.log(userData)
            })
        })
    })
})