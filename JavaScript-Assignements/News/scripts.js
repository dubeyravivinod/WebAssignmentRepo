const results_container = document.getElementById("result-section")
const result_container = document.getElementById("result")

// default informations
const api_key = "3b442bbf11ac468eb8017639814d58e8"


async function allNews() {
    result_container.innerHTML = " ";
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`
    const response = await fetch(url)
    const data = await response.json()
    const json_data = data.articles
    for (const element of json_data) {
        if(element.urlToImage != null && element.description != null && element.title != null && element.author != null) {
            result_container.innerHTML += `
            <div class='news'>
                <div class='imgUrl'><img src="${element.urlToImage}" alt="urlImage" /></div>
                <div class='info'>
                    <h3 class='title'>${element.title}</h3>
                    <p class='author'>Author - ${element.author}</p>
                    <p class='desc'>${element.description}</p>
                </div>
            </div>
            `
            results_container.appendChild(result_container)
        }
    }
    
}
allNews();

async function businessNews() {
    result_container.innerHTML = " ";
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${api_key}`
    const response = await fetch(url)
    const json_data = await response.json()
    const data = json_data.articles
    for (const element of data) {
        if(element.urlToImage != null && element.description != null && element.title != null && element.author != null) {
            result_container.innerHTML += `
            <div class='news'>
                <div class='imgUrl'><img src="${element.urlToImage}" alt="urlImage" /></div>
                <div class='info'>
                    <h3 class='title'>${element.title}</h3>
                    <p class='author'>Author - ${element.author}</p>
                    <p class='desc'>${element.description}</p>
                </div>
            </div>
            `
            results_container.appendChild(result_container)
        }
    }
}

async function sportNews() {
    result_container.innerHTML = " ";
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${api_key}`
    const response = await fetch(url)
    const json_data = await response.json()
    const data = json_data.articles
    for (const element of data) {
        if(element.urlToImage != null && element.description != null && element.title != null && element.author != null) {
            result_container.innerHTML += `
            <div class='news'>
                <div class='imgUrl'><img src="${element.urlToImage}" alt="urlImage" /></div>
                <div class='info'>
                    <h3 class='title'>${element.title}</h3>
                    <p class='author'>Author - ${element.author}</p>
                    <p class='desc'>${element.description}</p>
                </div>
            </div>
            `
            results_container.appendChild(result_container)
        }
    }
}

async function politicsNews() {
    result_container.innerHTML = " ";
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=${api_key}`
    const response = await fetch(url)
    const json_data = await response.json()
    const data = json_data.articles
    for (const element of data) {
            if(element.urlToImage != null && element.description != null && element.title != null && element.author != null) {
            result_container.innerHTML += `
            <div class='news'>
                <div class='imgUrl'><img src="${element.urlToImage}" alt="urlImage" /></div>
                <div class='info'>
                    <h3 class='title'>${element.title}</h3>
                    <p class='author'>Author - ${element.author}</p>
                    <p class='desc'>${element.description}</p>
                </div>
            </div>
            `
            results_container.appendChild(result_container)
        }
    }
}

async function techNews() {
    result_container.innerHTML = " ";
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${api_key}`
    const response = await fetch(url)
    const json_data = await response.json()
    const data = json_data.articles
    for (const element of data) {
        if(element.urlToImage != null && element.description != null && element.title != null && element.author != null) {
            result_container.innerHTML += `
            <div class='news'>
                <div class='imgUrl'><img src="${element.urlToImage}" alt="urlImage" /></div>
                <div class='info'>
                    <h3 class='title'>${element.title}</h3>
                    <p class='author'>Author - ${element.author}</p>
                    <p class='desc'>${element.description}</p>
                </div>
            </div>
            `
            results_container.appendChild(result_container)
        }
    }
}

async function entertainmentNews() {
    result_container.innerHTML = " ";
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${api_key}`
    const response = await fetch(url)
    const json_data = await response.json()
    const data = json_data.articles
    for (const element of data) {
        if(element.urlToImage != null && element.description != null && element.title != null && element.author != null) {
            result_container.innerHTML += `
            <div class='news'>
                <div class='imgUrl'><img src="${element.urlToImage}" alt="urlImage" /></div>
                <div class='info'>
                    <h3 class='title'>${element.title}</h3>
                    <p class='author'>Author - ${element.author}</p>
                    <p class='desc'>${element.description}</p>
                </div>
            </div>
            `
            results_container.appendChild(result_container)
        }
    }
}

async function scienceNews() {
    result_container.innerHTML = " ";
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${api_key}`
    const response = await fetch(url)
    const json_data = await response.json()
    const data = json_data.articles
    for (const element of data) {
        if(element.urlToImage != null && element.description != null && element.title != null && element.author != null) {
            result_container.innerHTML += `
            <div class='news'>
                <div class='imgUrl'><img src="${element.urlToImage}" alt="urlImage" /></div>
                <div class='info'>
                    <h3 class='title'>${element.title}</h3>
                    <p class='author'>Author - ${element.author}</p>
                    <p class='desc'>${element.description}</p>
                </div>
            </div>
            `
            results_container.appendChild(result_container)
        }
    }
}

async function healthNews() {
    result_container.innerHTML = " ";
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${api_key}`
    const response = await fetch(url)
    const json_data = await response.json()
    const data = json_data.articles
    for (const element of data) {
        if(element.urlToImage != null && element.description != null && element.title != null && element.author != null) {
            result_container.innerHTML += `
            <div class='news'>
                <div class='imgUrl'><img src="${element.urlToImage}" alt="urlImage" /></div>
                <div class='info'>
                    <h3 class='title'>${element.title}</h3>
                    <p class='author'>Author - ${element.author}</p>
                    <p class='desc'>${element.description}</p>
                </div>
            </div>
            `
            results_container.appendChild(result_container)
        }
    }
}

async function search() {
    result_container.innerHTML = " ";
    const category = document.getElementById("searchCategory").value;
    const country = document.getElementById("searchCountry").value;
    const url = `https://newsapi.org/v2/top-headlines?country=${country.toLowerCase()}&category=${category.toLowerCase()}&apiKey=${api_key}`
    const response = await fetch(url);
    const json_data = await response.json()
    const data = json_data.articles
    console.log(data);
    for (const element of data) {
        if(element.urlToImage != null && element.description != null && element.title != null && element.author != null) {
            result_container.innerHTML += `
            <div class='news'>
                <div class='imgUrl'><img src="${element.urlToImage}" alt="urlImage" /></div>
                <div class='info'>
                    <h3 class='title'>${element.title}</h3>
                    <p class='author'>Author - ${element.author}</p>
                    <p class='desc'>${element.description}</p>
                </div>
            </div>
            `
            results_container.appendChild(result_container)
        }
    }

}