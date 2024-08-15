const likes = document.querySelectorAll(".like")
const geral = document.querySelector(".geral")
const follow = document.querySelector(".follow")
const feed = document.querySelector("#feed")
const chat = document.querySelector("#chat")


const feedDiv = document.querySelector(".feed")
const chatDiv = document.querySelector(".chats")

chat.addEventListener("click", ()=>{
    feed.style.background = "var(--dark-light)"
    chat.style.background = "var(--light-dark)"
    chatDiv.style.display = "flex"
    chatDiv.style.animation = "forwards nav_right 1s"
    feedDiv.style.display = "none"
})

feed.addEventListener("click", ()=>{
    chat.style.background = "var(--dark-light)"
    feed.style.background = "var(--light-dark)"
    feedDiv.style.display = "flex"
    feedDiv.style.animation = "forwards nav_left 1s"
    chatDiv.style.display = "none"
})

geral.addEventListener("click", ()=>{
    follow.style.background = "var(--dark-light)"
    geral.style.background = "var(--light-dark)"
})

follow.addEventListener("click", ()=>{
    follow.style.background = "var(--light-dark)"
    geral.style.background = "var(--dark-light)"
})

let liked = []
likes.forEach((like)=>{
    like.addEventListener("click", ()=>{
        const index = liked.indexOf(like)
        if(index === -1){
            liked.push(like)
            like.src = "../icons/likeActive.png"
            like.style.animation = "like 0.5s ease-out infinite"
            setTimeout(()=>{
                like.style.animation = ""
            }, 500)
        }
        else{
            liked.splice(index, 1)
            like.src = "../icons/like.png"
        }
    })
})
