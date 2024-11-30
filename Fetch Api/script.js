// fetch("https://dummyjson.com/products")
//     .then((res)=> res.json())
//     .then((data)=> console.log(data))

// fetch("https://dummyjson.com/products/add",{
//     method: "POST",
//     body: JSON.stringify({
//         title: "Apsara Pencil",
//         category: "Stationary"
//     })
// }).then(res => res.json())
// .then(res => console.log(res))

fetch('https://dummyjson.com/users')
    .then((res)=> res.json())
    .then((usersData) => fetch(`https://dummyjson.com/posts/user/${usersData.users[8].id}`))
    .then((res) => res.json())
    .then((postsData) => fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
    .then((res) => res.json())
    .then((commentsData) => fetch(`https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
    .then((res) => res.json())
    .then((userData) => console.log(userData.firstName))
    .catch((err) => console.log(err))