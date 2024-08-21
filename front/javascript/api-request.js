const postSection = document.querySelector(".post-section")
fetch("http://localhost:8000/posts", {
    method: "GET"
})
.then(response => response.json())
.then((data)=>{
    let posts = ""
    data.map(dados =>{
        if(dados.type === "code"){
            posts += `
                <div class="post">
                    <div class="post-header">
                        <div class="post-profile">
                            <div><img class="post-profile-image" src="http://localhost:8000/img/${dados.authorAvatar}"></div>
                            <div class="post-profile-info">
                                <h3>${dados.author}</h3>
                                <p>${dados.userAuthor}</p>
                            </div>
                        </div>
                    </div>
                    <div class="post-content">
                        <p>${dados.textContent}</p>
                        <div class="media-content">
                            <pre>
                                <code>
                                    ${dados.codeContent}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div class="post-actions">
                        <div class="actions">
                            <img src="../icons/like.png">
                            <img src="../icons/comentActive.png">
                        </div>
                        <div class="post-time">${dados.date}</div>
                    </div>
                </div>
            `
        }
        else if( dados.type === "text" ){
            posts += `
                    <div class="post">
                    <div class="post-header">
                        <div class="post-profile">
                            <div><img class="post-profile-image" src="http://localhost:8000/img/${dados.authorAvatar}"></div>
                            <div class="post-profile-info">
                                <h3>${dados.author}</h3>
                                <p>${dados.userAuthor}</p>
                            </div>
                        </div>
                    </div>
                    <div class="post-content">
                        <p>${dados.textContent}</p>
                    </div>
                    <div class="post-actions">
                        <div class="actions">
                            <img src="../icons/like.png">
                            <img src="../icons/comentActive.png">
                        </div>
                        <div class="post-time">2h</div>
                    </div>
                </div>
            `
        }
    })
    postSection.innerHTML = posts
})
.catch(error => console.error('Error:', error));
