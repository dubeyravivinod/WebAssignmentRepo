const searchInput = document.getElementById("searchBox")
const profileContainer = document.getElementById("profileContainer")

async function fetch_info() {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    profileContainer.innerHTML = ""
    console.log(data);

    data.map((ele)=> {
        console.log(ele);
        const username = ele.login;
        const avatar = ele.avatar_url;
        const profile = ele.profile;

        profileContainer.innerHTML += `
        <div class="innerDiv">
            <img src=${avatar} alt="avatar" />
            <div>
                <h3>${username}</h3>
                <a href=${profile}</h3>
            </div?
        </div>
        `
    })
}

fetch_info()

async function fetch_info() {
    const SearchValue = searchInput.value 
    const Response = await fetch(`https://api.github.com/search/users?q=${SearchValue}`)
    const data = await Response.json()
    console.log(data.items);
    profileContainer.innerHTML = ""

    data.items.map((ele)=>{
        const userName = ele.login
        const avatar = ele.avatar_url
        const profile = ele.html_url
        console.log(userName, avatar, profile, profileContainer);
        profileContainer.innerHTML += `
            <div class="innerDiv">
                <img src= ${avatar} />
                <div class="info">
                    <h3>${userName}</h3>
                    <a href=${profile}>view profile</a>
                </div>
            </div>
        `
    })

}

function clearFunc() {
    profileContainer.innerHTML = ""
    searchInput.value = ""
    // func2()
}