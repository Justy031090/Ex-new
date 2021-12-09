const btn = document.querySelector('.search-btn')
const area = document.querySelector('.search-area');
const searchData = document.querySelector('#search')
const profileImg = document.querySelector('.profile-img');
const profileLogin = document.querySelector('.profile-login');
const profileRepo = document.querySelector('.profile-repo');
const profileContainer = document.querySelector('.profile-container')
const a = document.querySelectorAll("a")

let userUrl = [];
let userAvatarUrl = [];
let userLogin = [];
let userRepo = [];
let repoUrl = [];

const getProfile = async function (userName) {
    try{
    const user = await (await fetch(`https://api.github.com/users/${userName}`)).json();
    if(user.message === "Not Found") return console.log('Enter a valid username');
    userUrl.push(user.html_url);
    userAvatarUrl.push( user.avatar_url);
    userLogin.push(user.login)
    userRepo.push(user.public_repos) 
    repoUrl.push(user.repos_url)
    displayAll()
    userLogin = [];
    }
    catch (e){
        console.log(e, 'Something gone wrong')
    }
}

btn.addEventListener('click', (e)=>{
    getProfile(searchData.value)
    searchData.value = ''
})

const displayAll = () => {
    const imgEl = document.createElement("img");
    const repo = document.createElement("a");
    const link = document.createElement("a");
    
    userAvatarUrl.forEach((user) => {
    imgEl.src = user;
    imgEl.height = 200;
    imgEl.width = 200;
    profileContainer.appendChild(imgEl);
    });
    userUrl.forEach((userUrl) => {
    link.href = userUrl;
    link.innerText = userLogin;
    profileContainer.appendChild(link);
    });
    userRepo.forEach((userRepo) => {
    repo.href = repoUrl
    repo.innerText = userRepo
    profileContainer.appendChild(repo);
    });
};