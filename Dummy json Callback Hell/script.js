function makeHttpRequest(method, url){
    const xhr = new XMLHttpRequest()
    const promise = new Promise((resolve, reject)=>{
        xhr.addEventListener("load",()=>{
            resolve(xhr.response)
        })

        xhr.addEventListener("error",()=>{
            reject("Promise rejected")
        })
    })

    xhr.responseType = "json"
    xhr.open(method,url)
    xhr.send()

    return promise
}

makeHttpRequest("GET",'https://dummyjson.com/users')
    .then((usersData)=>{
        return makeHttpRequest("GET",`https://dummyjson.com/users/${usersData.users[8].id}/posts`)
    }).then((userPosts)=>{
        console.log(userPosts.posts[0])
        return makeHttpRequest("GET",`https://dummyjson.com/comments/post/${userPosts.posts[0].id}`)
    }).then((commentsData)=>{
        console.log(commentsData.comments[0].user)
        return makeHttpRequest("GET",`https://dummyjson.com/users/${commentsData.comments[0].user.id}`)
    }).then((user)=>{
        console.log(user)
    }).catch((err)=>{
        console.log(err)
    })




// Callback Hell

// makeHttpRequest("GET",'https://dummyjson.com/users',(usersData)=>{
//     console.log(usersData.users[8])
//     makeHttpRequest("GET",`https://dummyjson.com/users/${usersData.users[8].id}/posts`,(postsData)=>{
//         console.log(postsData.posts[0])
//         makeHttpRequest("GET",`https://dummyjson.com/comments/post/${postsData.posts[0].id}`,(commentsData)=>{
//             console.log(commentsData.comments[0].user.id)
//             makeHttpRequest("GET",`https://dummyjson.com/users/${commentsData.comments[0].user.id}`,(userData)=>{
//                 console.log(userData)
//             })
//         })
//     })
// })